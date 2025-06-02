/** @type {import('next').NextConfig} */
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            // Pass remark and rehype plugins here
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
