import NextAuth from "next-auth";

declare module "next-auth" {
  interface JWT {
    provider?: string;
    accessToken?: string;
  }

  interface Session {
    accessToken?: string;
    serviceToken?: string;
    nickname?: string;
  }
}
