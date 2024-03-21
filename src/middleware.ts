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
  "/sw.js*",
  "/workbox-*",
  "/icons*",
  "/fonts*",
  "/favicon*",
  "/call*",
];
const protectedPaths = ["/setting*", "/log/record", "/diary"]; // 로그인이 필요한 페이지 목록
const publicPaths = ["/signup*", "/auth*"]; // 로그인이 되면 접근할 수 없는 페이지 목록

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // 미들웨어 인터셉트가 필요없는 경우 bypass
  const isBypassPaths = pathAbleCheck(bypassPaths, currentPath);
  if (isBypassPaths) return;

  const token = await getToken({ req: request });

  // 미인증, 가인증 유저인 경우, 보호되는 경로로 접근할 수 없도록 함.
  const protectedPathsAccessInable = pathAbleCheck(protectedPaths, currentPath);
  if (!token || (!token.nickname && protectedPathsAccessInable)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  // 인증된 유저인 경우, 인증 유저는 접근할 수 없는 경로에 대한 블로킹 (유저인증 관련 등F)
  const publicPathsAccessInable = pathAbleCheck(publicPaths, currentPath);
  if (token && token.nickname && publicPathsAccessInable) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default middleware;
