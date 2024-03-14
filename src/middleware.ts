import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { pathAbleCheck } from "./utils/pathAbleCheck";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)"],
};

// const protectedPaths = ["/map"]; // 로그인이 필요한 페이지 목록
const publicPaths = ["/signup*", "/auth*"]; // 로그인이 되면 접근할 수 없는 페이지 목록

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const currentPath = request.nextUrl.pathname;

  // console.log("middleware", token);

  // if (!token && protectedRoutes.includes(currentPath)) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/signup";
  //   return NextResponse.redirect(url);
  // }

  const publicPathsAccessInable = pathAbleCheck(publicPaths, currentPath);

  // 인증된 유저인 경우 publicPaths 에 접근할 수 없도록 함.
  if (token && token.nickname && publicPathsAccessInable) {
    // console.log("middleware block");
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default middleware;
