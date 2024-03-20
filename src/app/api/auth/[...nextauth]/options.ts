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
    async jwt({ token, account }) {
      if (account && account.access_token) {
        const getToken = authenticate.bind(null, { token: account.access_token });
        const data = await getToken();

        const me = data && (await getMe(data?.token));

        return {
          serviceToken: data?.token ?? null,
          nickname: me?.nickname ?? null,
        };
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
