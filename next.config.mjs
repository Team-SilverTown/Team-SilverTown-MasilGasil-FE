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
});
