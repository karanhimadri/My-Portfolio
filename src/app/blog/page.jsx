'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { useTheme } from '@/context/ThemeContext';
import { blogPosts } from '@/lib/blogData';

blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date

export default function BlogIndexPage() {
  const { theme } = useTheme();

  const classes = {
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      subText: 'text-gray-600',
      cardBg: 'bg-white',
      border: 'border-gray-200',
      tagBg: 'bg-blue-100',
      tagText: 'text-blue-800',
      metaText: 'text-gray-500',
      titleHover: 'group-hover:text-blue-600',
      iconText: 'text-gray-400',
      shadow: 'shadow-sm',
      gradient: 'from-blue-100 to-purple-100',
      readMore: 'text-blue-600'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      subText: 'text-gray-300',
      cardBg: 'bg-gray-800',
      border: 'border-gray-700',
      tagBg: 'bg-blue-900/30',
      tagText: 'text-blue-300',
      metaText: 'text-gray-400',
      titleHover: 'group-hover:text-blue-400',
      iconText: 'text-gray-500',
      shadow: 'shadow-gray-900/20',
      gradient: 'from-blue-900 to-purple-900',
      readMore: 'text-blue-400'
    }
  }[theme];

  return (
    <main className={`min-h-screen ${classes.bg} transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${classes.text}`}>
            Blog
          </h1>
          <p className={`text-lg ${classes.subText} max-w-2xl mx-auto`}>
            Thoughts, tutorials, and insights on web development, technology, and more.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10">
          {blogPosts.map(({ slug, title, excerpt, img, date, readTime, tags }) => (
            <article 
              key={slug}
              className={`group ${classes.cardBg} ${classes.border} ${classes.shadow} rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden border`}
            >
              <Link href={`/blog/${slug}`} className="block">
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <div className={`aspect-video md:aspect-square bg-gradient-to-br ${classes.gradient}`}>
                      {img ? (
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                            <svg className={`w-6 h-6 ${classes.iconText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium ${classes.tagBg} ${classes.tagText} rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className={`text-xl md:text-2xl font-bold ${classes.text} ${classes.titleHover} transition-colors duration-200`}>
                        {title}
                      </h2>

                      {excerpt && (
                        <p className={`leading-relaxed ${classes.subText}`}>
                          {excerpt}
                        </p>
                      )}

                      <div className={`flex items-center justify-between pt-4 border-t ${classes.border}`}>
                        <div className={`flex items-center text-sm space-x-4 ${classes.metaText}`}>
                          <time dateTime={date} className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {format(new Date(date), 'MMM dd, yyyy')}
                          </time>
                          {readTime && (
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {readTime}
                            </span>
                          )}
                        </div>

                        <div className={`flex items-center text-sm font-medium ${classes.readMore}`}>
                          Read more
                          <svg 
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className={`w-12 h-12 ${classes.iconText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className={`text-lg font-medium ${classes.text} mb-2`}>No posts yet</h3>
            <p className={`${classes.metaText}`}>Check back soon for new content!</p>
          </div>
        )}
      </div>
    </main>
  );
}




// Let me know if you want to:

// Add search or filters

// Show estimated reading time automatically

// Add pagination or infinite scroll

// I'm happy to help with any of these.