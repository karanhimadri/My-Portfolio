import { getPostBySlug, getPostSlugs } from "../../../lib/mdx";
import { notFound } from 'next/navigation';
import BlogPostContent from '../../../components/BlogPostContent';

export async function generateStaticParams() {
    const slugs = getPostSlugs().map(slug => slug.replace(/\.mdx$/, ''));
    return slugs.map(slug => ({ slug }));
}

export default async function BlogPostPage({ params }) {
    try {
        const resolvedParams = await params;
        const { content, meta } = await getPostBySlug(resolvedParams.slug);
        
        return <BlogPostContent content={content} meta={meta} />;
    } catch (err) {
        notFound();
    }
}
