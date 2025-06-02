'use client';

import { useTheme } from '../../context/ThemeContext';

export default function BlogPostClient({ title, date }) {
  const { theme } = useTheme();

  return (
    <header className="mb-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <time className="text-sm text-gray-500">{date}</time>
    </header>
  );
}
