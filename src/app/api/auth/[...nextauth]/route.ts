import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

import { authenticate } from "@/lib/api/User/server";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.DB_KAKAO_API_KEY!,
      clientSecret: process.env.DB_KAKAO_CLIENT_KEY!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   if (account && account.provider === "kakao") {
    //     try {
    //       // const response = await axios.post("https://example.com/api/exchange", {
    //       //   accessToken: account.accessToken,
    //       // });
    //       // const serviceToken = response.data.token;
    //       // return { serviceToken };
    //       return true;
    //     } catch (error) {
    //       console.error("Failed to exchange access token:", error);
    //       return false;
    //     }
    //   }
    //   return true;
    // },
    async jwt({ token, account }) {
      if (account && account.access_token) {
        const getToken = authenticate.bind(null, { accessToken: account.access_token });
        const data = await getToken();

        // console.log("API", data);

        return {
          // accessToken: account.access_token,
          serviceToken: data?.token,
          // accessTokenExpires: account.expires_at,
          // refreshToken: account.refresh_token,
        };
      }
      return token;

      // 엑세스 코드로 서비스 서버에 요청을 보냄
      // 서비스 서버는 토큰을 반환함.
      // session.serviceToken 저장
      // me 요청을 보냄
      // me 에 해당하는 사용자가 없다면 서비스 토큰을 내려보내는 것을 거부
      // 미들웨어에서 서비스 토큰이 없을 경우 갈 수 없는 곳들을 지정
    },
    async session({ session, token }) {
      if (token.serviceToken) {
        // console.log(token.accessToken);
        session.accessToken = token.accessToken as string;
        session.serviceToken = token.serviceToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
