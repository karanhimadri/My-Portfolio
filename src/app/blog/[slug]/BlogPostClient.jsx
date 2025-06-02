'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const themeClasses = {
  light: {
    container: "bg-white text-slate-800",
    backBtn: "text-blue-600 hover:text-blue-800",
    date: "text-slate-500",
  },
  dark: {
    container: "bg-slate-900 text-white",
    backBtn: "text-blue-400 hover:text-blue-200",
    date: "text-slate-400",
  },
};

export default function BlogPostClient({ title, date, content }) {
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  return (
    <div className={`min-h-screen px-4 py-12 ${classes.container}`}>
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className={`text-sm mb-6 inline-block ${classes.backBtn}`}>
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className={`text-sm mb-6 ${classes.date}`}>{date}</p>
        <div className="prose dark:prose-invert max-w-none">{content}</div>
      </div>
    </div>
  );
}
