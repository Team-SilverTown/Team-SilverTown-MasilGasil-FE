import { getMe } from "@/lib/api/User/server";

import { authOptions } from "../api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth/next";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.name) return null;

    const currentUser = await getMe();

    if (!currentUser) return null;

    return {
      user: currentUser,
      serviceToken: session.serviceToken,
    };
  } catch (error: any) {
    return null;
  }
}
