import { refreshAccessToken } from "./lib/api/User/server";
import apiClient from "./lib/client/apiClient";
import { parseJwt } from "./lib/utils/parseJwt";
import { pathAbleCheck } from "./lib/utils/pathAbleCheck";

import { encode, getToken } from "next-auth/jwt";
import { RequestCookies, ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|masil.ico|fonts|images).*)",
    // "/home",
    "/setting/:path*",
    "/log/record",
    "/diary",
    "/diary/:path*",
  ],
};

const bypassPaths = [
  // "/",
  "/home",
  "/explore*",
  "/post*",
  "/more*",
  "/mate*",
  "/manifest*",
  "/swe-worker*",
  "/sw.js*",
  "/workbox-*",
  "/icons*",
  "/fonts*",
  "/favicon*",
  // "/call*",
];
// const protectedPaths = ["/home", "/setting*", "/log/record", "/diary*"]; // 로그인이 필요한 페이지 목록
// const publicPaths = ["/signup*", "/auth*"]; // 로그인이 되면 접근할 수 없는 페이지 목록

const sessionCookie = process.env.NEXTAUTH_URL?.startsWith("https://")
  ? "__Secure-next-auth.session-token"
  : "next-auth.session-token";

/**
 * @param token
 * serviceToken 을 parsing 하여 만료시간을 계산
 * 계산된 시간이 기준시간 이하로 떨어지면 refresh 해야함을 알림
 */
function shouldUpdateToken(token: string) {
  const serviceTokenExp = parseJwt(token).exp * 1000;

  const nowTime = Date.now();
  const TEN_MINUTES_AGO_IN_MS = 1 * 1000; // 10분 전

  // 10분전에 토큰을 갱신해준다.
  const shouldRefreshTime = serviceTokenExp - nowTime - TEN_MINUTES_AGO_IN_MS;

  if (shouldRefreshTime <= 0) {
    return true;
  }

  return false;
}

/**
 * @param req
 * @param res
 * refreshed Token 이 생성된 경우 response 의 header 가 갱신됨
 * 이 때 request 의 header 또한 갱신될 수 있도록 하는 함수
 */
function applySetCookie(req: NextRequest, res: NextResponse): void {
  const resCookies = new ResponseCookies(res.headers);
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  resCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  NextResponse.next({
    request: { headers: newReqHeaders },
  }).headers.forEach((value, key) => {
    if (key === "x-middleware-override-headers" || key.startsWith("x-middleware-request-")) {
      res.headers.set(key, value);
    }
  });
}

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // 미들웨어 인터셉트가 필요없는 경우 bypass
  const isBypassPaths = pathAbleCheck(bypassPaths, currentPath);
  if (isBypassPaths) return;

  // request 에 포함된 토큰 정보
  const token = await getToken({ req: request });

  // 토큰이 존재하고, 토큰 내부의 serviceToken 에 대한 갱신이 필요한 경우
  if (token && shouldUpdateToken(token.serviceToken as string)) {
    try {
      const newServiceToken = await refreshAccessToken({
        serviceToken: token.serviceToken as string,
        refreshToken: token.refreshToken as string,
      });

      // console.log("before");
      // console.log(newServiceToken);
      // console.log("------------------–");

      // nexauth 사양에 맞도록 쿠키 정보를 인코딩
      const newSessionToken = await encode({
        secret: process.env.NEXTAUTH_SECRET as string,
        token: {
          ...token,
          serviceToken: newServiceToken,
        },
        // maxAge: 30 * 24 * 60 * 60, // 30 days, or get the previous token's exp
      });

      // console.log("after");
      // console.log(
      //   await decode({ secret: process.env.NEXTAUTH_SECRET as string, token: newSessionToken }),
      // );
      // console.log("------------------–");

      // 갱신된 쿠키 정보를 브라우저측에서도 인지할 수 있도록 redirect
      const response = NextResponse.redirect(request.url);
      // 쿠키 갱신
      apiClient.setDefaultHeader("Authorization", `Bearer ${newServiceToken}`);
      response.cookies.set(sessionCookie, newSessionToken, {
        httpOnly: true,
        secure: process.env.NEXTAUTH_URL?.startsWith("https://"),
        sameSite: "lax",
      });

      // response 뿐만이 아니라 request 에서도 갱신된 쿠키를 바라볼 수 있도록 함
      applySetCookie(request, response);
      return response;
    } catch (error) {
      // refreshedToken 발급에 실패한 경우 쿠키를 초기화하고 재로그인 할 수 있도록 redirect
      const response = NextResponse.redirect(new URL("/", request.url));
      request.cookies.delete(sessionCookie);
      applySetCookie(request, response);
      if (currentPath !== "/") return response;
    }
  }

  if (!token) {
    const response = NextResponse.redirect(new URL("/", request.url));
    if (currentPath !== "/") return response;
  }

  // if (!token) return signOut(request);

  // 미인증, 가인증 유저인 경우, 보호되는 경로로 접근할 수 없도록 함.
  // const protectedPathsAccessInable = pathAbleCheck(protectedPaths, currentPath);
  // if (protectedPathsAccessInable && ((token && !token.serviceToken) || !token)) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/";

  //   if (currentPath !== "/") return NextResponse.redirect(url);
  // }

  // // 인증된 유저인 경우, 인증 유저는 접근할 수 없는 경로에 대한 블로킹 (유저인증 관련 등)
  // const publicPathsAccessInable = pathAbleCheck(publicPaths, currentPath);
  // if (publicPathsAccessInable && token && token.serviceToken && token.nickname) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/";

  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export default middleware;
