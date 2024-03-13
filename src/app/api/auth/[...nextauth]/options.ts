import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { authenticate, getMe } from "@/lib/api/User/server";

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
        console.log(token, account);
        const getToken = authenticate.bind(null, { token: account.access_token });
        const data = await getToken();

        const me = data && (await getMe(data?.token));

        // console.log("JWT", data?.token, me);

        return {
          // accessToken: account.access_token,
          serviceToken: data?.token,
          nickname: me?.nickname,
          // accessTokenExpires: account.expires_at,
          // refreshToken: account.refresh_token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.serviceToken) {
        // console.log("session", token);
        // session.accessToken = token.accessToken as string;
        session.serviceToken = token.serviceToken as string;
        session.nickname = token.nickname as string;
      } else {
        session.serviceToken = undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};
