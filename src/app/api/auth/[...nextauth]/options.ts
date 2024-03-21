import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { authenticate, getMe, refreshToken } from "@/lib/api/User/server";

export const parseJwt = (
  token: string,
): { iss: string; iat: number; exp: number; user_id: number; authorities: string } => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
};

export async function refreshAccessToken(token: any) {
  const refreshedToken = await refreshToken({
    serviceToken: token.serviceToken,
    refreshToken: token.refreshToken,
  });

  return {
    serviceToken: refreshedToken,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.DB_KAKAO_API_KEY!,
      clientSecret: process.env.DB_KAKAO_CLIENT_KEY!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.access_token) {
        // 카카오 인증 로그인 시
        // 서비스 서버로부터 새로운 accessToken, refreshToken 을 발급
        const tokenData = await authenticate({ accessToken: account.access_token });

        token.serviceToken = tokenData?.accessToken;
        token.refreshToken = tokenData?.refreshToken;

        if (tokenData) {
          const serviceTokenExp = parseJwt(tokenData.accessToken).exp * 1000;

          const nowTime = Date.now();
          const TEN_MINUTES_AGO_IN_MS = 60 * 10 * 1000; // 10분 전

          // 10분전에 토큰을 갱신해준다.
          const shouldRefreshTime = serviceTokenExp - nowTime - TEN_MINUTES_AGO_IN_MS;

          if (shouldRefreshTime <= 0) {
            token.serviceToken = await refreshAccessToken(token);
          }

          const me = await getMe(token.serviceToken as string);
          token.nickname = me?.nickname;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.serviceToken) {
        session.serviceToken = token.serviceToken as string;
        session.nickname = token.nickname as string;
      } else {
        session.serviceToken = undefined;
        session.nickname = undefined;
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
