/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optional: if you don’t need `.mdx` pages, remove the extension
  pageExtensions: ['js', 'jsx'],

  // Remove MDX-related experimental flags and webpack config
};

export default nextConfig;
