// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;

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
        destination: "http://ec2-3-35-207-242.ap-northeast-2.compute.amazonaws.com/:path*",
      },
    ];
  },
});
