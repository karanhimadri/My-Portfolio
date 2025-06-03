'use client'; // if using in app directory and doing client-side rendering

import Link from 'next/link';
import { format } from 'date-fns';

const posts = [
  {
    slug: 'my-first-post',
    title: 'My First Post',
    date: '2024-06-01',
  },
  {
    slug: 'nextjs-tips',
    title: 'Next.js Tips and Tricks',
    date: '2024-05-20',
  },
  {
    slug: 'deploy-guide',
    title: 'Deploying Your App to Vercel',
    date: '2024-04-10',
  },
  // Add more posts here
];

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default function BlogIndexPage() {
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
