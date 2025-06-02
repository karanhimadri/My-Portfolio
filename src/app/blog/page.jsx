import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { format } from 'date-fns';

const BLOG_PATH = path.join(process.cwd(), 'src/content/blog');

export default function BlogIndexPage() {
  const files = fs.readdirSync(BLOG_PATH);

  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(BLOG_PATH, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="max-w-3xl mx-auto p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
              {title}
            </Link>{' '}
            <span className="text-gray-500 text-sm">({format(new Date(date), 'MMMM dd, yyyy')})</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
