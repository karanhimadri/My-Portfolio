import { getAllPostsMeta } from '@/lib/mdx';
import BlogList from '@/components/BlogList';

export default async function BlogListPage() {
    const posts = getAllPostsMeta();

    return <BlogList posts={posts} />;
}
