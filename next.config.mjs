/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx'],
};

export default nextConfig;
