import NextAuth from "next-auth";

declare module "next-auth" {
  interface JWT {
    provider?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    serviceToken?: string;
    nickname?: string;
  }
}
