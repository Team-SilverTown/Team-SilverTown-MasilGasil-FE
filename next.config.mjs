import nextMdx from "@next/mdx";
import withTwin from "./withTwin.mjs";

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
export default withMDX(
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
  }),
);
