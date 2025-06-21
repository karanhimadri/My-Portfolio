'use client';

import { useTheme } from '@/context/ThemeContext';

const BlogPostContent = ({ content, meta }) => {
  const { theme } = useTheme();
  const themeClasses = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      heading: 'text-gray-900',
      titleColor: 'text-blue-700',
      subtext: 'text-gray-600',
      excerpt: 'text-gray-700',
      prose: 'prose-gray',
      fullBg: 'bg-gradient-to-br from-slate-50 to-white',
    },
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      heading: 'text-white',
      titleColor: 'text-blue-400',
      subtext: 'text-gray-400',
      excerpt: 'text-gray-300',
      prose: 'prose-invert',
      fullBg: 'bg-gradient-to-br from-gray-900 to-black',
    },
  }[theme];

  return (
    <div className={`${themeClasses.fullBg} min-h-screen w-full mt-5`}>
      <div className="max-w-4xl mx-auto px-6 py-10 pt-20">
        <article className={`prose prose-lg ${themeClasses.prose} mx-auto`}>
          <header className="mb-8">
            <h1 className={`blog-post-title ${theme === 'light' ? 'blog-post-title-light' : 'blog-post-title-dark'}`}>
              {meta.title}
            </h1>

            {/* Author and Date Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mt-4 mb-6">
              {meta.author && (
                <div className={`flex items-center gap-2 ${themeClasses.subtext}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">{meta.author}</span>
                </div>
              )}

              {meta.date && (
                <div className={`flex items-center gap-2 ${themeClasses.subtext}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{meta.date}</span>
                </div>
              )}

              {meta.tags && meta.tags.length > 0 && (
                <div className="flex gap-2">
                  {meta.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${theme === 'light'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-blue-900/30 text-blue-300'
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {meta.excerpt && (
              <p className={`text-base ${themeClasses.excerpt} mt-4 mb-6 italic leading-relaxed border-l-4 ${theme === 'light' ? 'border-blue-200 bg-blue-50' : 'border-blue-700 bg-blue-900/20'} pl-4 py-2 rounded-r`}>
                {meta.excerpt}
              </p>
            )}
          </header>
          <div className={`prose-content ${themeClasses.text}`}>
            {content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostContent;
