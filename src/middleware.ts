export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // "/((?!api|_next/static|_next/image|favicon.ico|masil.ico|fonts|images).*)",
    "/setting/:path*",
    "/log/record",
    "/diary",
    "/diary/:path*",
  ],
};
