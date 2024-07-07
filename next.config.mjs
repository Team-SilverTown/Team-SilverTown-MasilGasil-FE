import withPWAInit from "@ducanh2912/next-pwa";
import nextMdx from "@next/mdx";

// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {
    return [
      {
        source: "/call/:path*",
        destination: `${process.env.DB_BASE_URL}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/call/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "masilgasil-image.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

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
export default withPWA(withMDX(nextConfig));
