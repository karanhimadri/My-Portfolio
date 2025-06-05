import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params; 

  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', post.htmlFile);

  let html = '';
  try {
    html = fs.readFileSync(filePath, 'utf-8');
  } catch {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6 prose dark:prose-invert">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.date} &bull; {post.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
