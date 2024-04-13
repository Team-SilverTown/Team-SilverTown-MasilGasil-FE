// import { authenticate, getMe, refreshToken } from "@/lib/api/User/server";
import { getMe, kakaoAuth, refreshAccessToken } from "@/lib/api/User/server";
import apiClient from "@/lib/client/apiClient";
import { parseJwt } from "@/lib/utils/parseJwt";

import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.DB_KAKAO_API_KEY!,
      clientSecret: process.env.DB_KAKAO_CLIENT_KEY!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, trigger, session }) {
      if (trigger === "update" && session.nickname) {
        token.nickname = session.nickname;
        token.serviceToken = session.serviceToken;
      }

      if (account && account.access_token) {
        // 카카오 인증 로그인 시
        // 서비스 서버로부터 새로운 accessToken, refreshToken 을 발급

        const tokenData = await kakaoAuth({ accessToken: account.access_token });

        token.serviceToken = tokenData?.accessToken;
        token.refreshToken = tokenData?.refreshToken;

        if (tokenData) {
          const serviceTokenExp = parseJwt(tokenData.accessToken).exp * 1000;

          const nowTime = Date.now();
          const TEN_MINUTES_AGO_IN_MS = 60 * 10 * 1000; // 10분 전

          // 10분전에 토큰을 갱신해준다.
          const shouldRefreshTime = serviceTokenExp - nowTime - TEN_MINUTES_AGO_IN_MS;

          if (shouldRefreshTime <= 0) {
            token.serviceToken = await refreshAccessToken({
              serviceToken: token.serviceToken as string,
              refreshToken: token.refreshToken as string,
            });
          }

          // apiClient.setDefaultHeader("Authorization", `Bearer ${token.serviceToken}`);

          const me = await getMe();
          token.nickname = me?.nickname;
        }
      }
      return token;
    },
    async session({ session, token, trigger, newSession }) {
      if (trigger === "update") {
        newSession.serviceToken && (session.serviceToken = newSession.serviceToken);
        session.nickname = newSession.nickname;
      }

      if (token.serviceToken) {
        session.serviceToken = token.serviceToken as string;
        session.nickname = token.nickname as string;
        apiClient.setDefaultHeader("Authorization", `Bearer ${token.serviceToken}`);
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
