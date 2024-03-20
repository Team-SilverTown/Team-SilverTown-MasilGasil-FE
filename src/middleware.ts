import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { pathAbleCheck } from "./utils/pathAbleCheck";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)"],
};

const bypassPaths = [
  "/",
  "/manifest*",
  "/swe-worker*",
  "/sw.js",
  "/workbox-*",
  "/icons*",
  "/fonts*",
  "/favicon*",
];
const protectedPaths = ["/setting*"];
const publicPaths = ["/signup*", "/auth*"];

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  const isBypassPaths = pathAbleCheck(bypassPaths, currentPath);
  if (isBypassPaths) return;

  const token = await getToken({ req: request });

  const protectedPathsAccessInable = pathAbleCheck(protectedPaths, currentPath);
  if (!token || (!token.nickname && protectedPathsAccessInable)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  const publicPathsAccessInable = pathAbleCheck(publicPaths, currentPath);
  if (token && token.nickname && publicPathsAccessInable) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default middleware;
