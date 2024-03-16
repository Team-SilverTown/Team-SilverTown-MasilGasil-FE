import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { pathAbleCheck } from "./utils/pathAbleCheck";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)"],
};

const bypassPaths = ["/manifest*", "/swe-worker*", "/sw.js", "/workbox-*", "/icons*", "/fonts*"];
const protectedPaths = ["/setting*"]; // 로그인이 필요한 페이지 목록
const publicPaths = ["/signup*", "/auth*"]; // 로그인이 되면 접근할 수 없는 페이지 목록
const NEXT_AUTH_URL = process.env.NEXTAUTH_URL;

export async function middleware(request: NextRequest) {
  const referer = request.headers.get("x-forwarded-host");

  const currentPath = request.nextUrl.pathname;

  const isBypassPaths = pathAbleCheck(bypassPaths, currentPath);
  if (isBypassPaths) return;

  const token = await getToken({ req: request });

  const protectedPathsAccessInable = pathAbleCheck(protectedPaths, currentPath);

  if (!token || (!token.nickname && protectedPathsAccessInable)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    if (referer === request.url || (referer && NEXT_AUTH_URL?.endsWith(referer))) return;
    return NextResponse.redirect(url);
  }

  const publicPathsAccessInable = pathAbleCheck(publicPaths, currentPath);

  if (token && token.nickname && publicPathsAccessInable) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    if (referer === request.url || (referer && NEXT_AUTH_URL?.endsWith(referer))) return;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default middleware;
