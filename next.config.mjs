import nextMdx from "@next/mdx";
import withTwin from "./withTwin.mjs";
import withPWAInit from "@ducanh2912/next-pwa";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     styledComponents: true,
//   },
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: `${process.env.DB_BASE_URL}/:path*`,
//       },
//     ];
//   },
// };

// module.exports = withMDX(nextConfig);

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm],
    // providerImportSource: "@mdx-js/react",
  },
});

/**
 * @type {import('next').NextConfig}
 */
export default withPWA(
  withMDX(
    withTwin({
      reactStrictMode: true,
      pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
      async rewrites() {
        return [
          {
            source: "/call/:path*",
            destination: `${process.env.DB_BASE_URL}/:path*`,
          },
        ];
      },

      images: { domains: ["masilgasil-s3.s3.amazonaws.com", "github.com"] },
    }),
  ),
);
