"use server";

import { AuthRequest } from "@/types/Request/User";
import { USER } from "../endPoints";
import { POST } from "../serverRootAPI";
import { AuthResponse } from "@/types/Response";

export async function authenticate(data: AuthRequest) {
  const response = await POST<AuthResponse>(USER.AUTH, data, { cache: "no-store" });
  return response;
}
