import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(limit = 10) {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const fullPath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug,
        ...data, // contains title, description, date, img, etc.
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by newest
    .slice(0, limit); // return latest N posts

  return posts;
}
