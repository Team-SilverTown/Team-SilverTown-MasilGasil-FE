// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;

import { sources } from "next/dist/compiled/webpack/webpack";
import withTwin from "./withTwin.mjs";

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://.../:path*",
      },
    ];
  },
});
