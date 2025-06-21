// lib/mdx.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import SocialLinks from '@/components/SocialLinks';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

export async function getPostBySlug(slug) {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);        // Compile MDX content to React component
    const compiled = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        }
      },
      components: {
        SocialLinks,
      }
    });

    return {
      slug: realSlug,
      meta: data,
      content: compiled.content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    throw error;
  }
}

// Get metadata from all posts (no content)
export function getAllPostsMeta() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: slug.replace(/\.mdx$/, ''),
      meta: data,
    };
  });
}
