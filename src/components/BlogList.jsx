'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Calendar, Clock, ArrowRight, Search, X, Filter } from 'lucide-react';
import TruncateString from '@/utils/TruncateLongString';

const BlogList = ({ posts }) => {
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const themeClasses = {
        light: {
            bg: 'bg-gradient-to-br from-slate-50 to-white',
            cardBg: 'bg-white',
            text: 'text-gray-900',
            subtext: 'text-gray-600',
            metaText: 'text-gray-500',
            border: 'border-gray-200',
            shadow: 'shadow-lg hover:shadow-xl',
            accent: 'text-blue-600',
            hoverBg: 'hover:bg-gray-50',
            gradientFrom: 'from-blue-600',
            gradientTo: 'to-purple-600',
            searchBg: 'bg-white/80',
            searchBorder: 'border-gray-300',
            searchText: 'text-gray-900',
            searchPlaceholder: 'placeholder-gray-500',
            filterBg: 'bg-gray-100',
            filterText: 'text-gray-700',
            filterActive: 'bg-blue-100 text-blue-700',
        },
        dark: {
            bg: 'bg-gradient-to-br from-gray-900 to-black',
            cardBg: 'bg-gray-900/50 backdrop-blur-sm',
            text: 'text-white',
            subtext: 'text-gray-300',
            metaText: 'text-gray-400',
            border: 'border-gray-700',
            shadow: 'shadow-2xl hover:shadow-blue-500/10',
            accent: 'text-blue-400',
            hoverBg: 'hover:bg-gray-800/50',
            gradientFrom: 'from-blue-400',
            gradientTo: 'to-purple-400',
            searchBg: 'bg-gray-800/80',
            searchBorder: 'border-gray-600',
            searchText: 'text-white',
            searchPlaceholder: 'placeholder-gray-400',
            filterBg: 'bg-gray-700/50',
            filterText: 'text-gray-300',
            filterActive: 'bg-blue-900/50 text-blue-300',
        },
    }[theme];

    // Get all unique tags from posts
    const allTags = useMemo(() => {
        const tags = new Set();
        posts.forEach(({ meta }) => {
            if (meta.tags) {
                meta.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, [posts]);

    // Filter and sort posts based on search criteria
    const filteredAndSortedPosts = useMemo(() => {
        let filtered = posts;

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(({ meta }) => {
                const searchLower = searchQuery.toLowerCase();
                return (
                    meta.title?.toLowerCase().includes(searchLower) ||
                    meta.excerpt?.toLowerCase().includes(searchLower) ||
                    meta.author?.toLowerCase().includes(searchLower) ||
                    meta.tags?.some(tag => tag.toLowerCase().includes(searchLower))
                );
            });
        }

        // Filter by selected tag
        if (selectedTag) {
            filtered = filtered.filter(({ meta }) =>
                meta.tags?.includes(selectedTag)
            );
        }

        // Sort posts
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.meta.title.localeCompare(b.meta.title);
                case 'readTime':
                    const readTimeA = calculateReadTime(a.meta.excerpt || '');
                    const readTimeB = calculateReadTime(b.meta.excerpt || '');
                    return readTimeA - readTimeB;
                case 'date':
                default:
                    return new Date(b.meta.date) - new Date(a.meta.date);
            }
        });

        return filtered;
    }, [posts, searchQuery, selectedTag, sortBy]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedTag('');
        setSortBy('date');
    };
    return (
        <div className={`min-h-screen ${themeClasses.bg} pt-16 mt-4 sm:pt-20 pb-12 sm:pb-16`}>
            <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
                {/* Header Section */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 ${themeClasses.text}`}>
                        <span className={`bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} bg-clip-text text-transparent`}>
                            Blog
                        </span>
                    </h1>
                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl ${themeClasses.subtext} max-w-2xl mx-auto leading-relaxed px-2 sm:px-0`}>
                        Explore my thoughts on software development, technology trends, and coding tutorials.
                    </p>
                </div>
                {/* Search and Filter Section */}
                <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl lg:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm`}>
                    {/* Horizontal Row: Search + Sort */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                        {/* Search Bar */}
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className={`h-4 w-4 sm:h-5 sm:w-5 ${themeClasses.metaText}`} />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search blogs..."
                                className={`${themeClasses.searchBg} ${themeClasses.searchBorder} ${themeClasses.searchText} ${themeClasses.searchPlaceholder} w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm `}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={`absolute inset-y-0 right-0 pr-3 flex items-center ${themeClasses.metaText} hover:${themeClasses.text} transition-colors`}
                                >
                                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                                </button>
                            )}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 md:ml-4">
                            <Filter className={`h-3 w-3 sm:h-4 sm:w-4 ${themeClasses.metaText} hidden sm:block`} />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={`${themeClasses.searchBg} ${themeClasses.searchBorder} ${themeClasses.searchText} px-3 py-2 sm:py-2.5 border rounded-lg text-xs sm:text-sm w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500 `}
                            >
                                <option value="date">Latest First</option>
                                <option value="title">By Title</option>
                                <option value="readTime">By Read Time</option>
                            </select>
                        </div>
                    </div>

                    {/* Tag Filters */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        <button
                            onClick={() => setSelectedTag('')}
                            className={` px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${!selectedTag ? themeClasses.filterActive : `${themeClasses.filterBg} ${themeClasses.filterText} hover:${themeClasses.filterActive}`} `}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${selectedTag === tag ? themeClasses.filterActive : `${themeClasses.filterBg} ${themeClasses.filterText} hover:${themeClasses.filterActive}`} `}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Clear Filters */}
                    {(searchQuery || selectedTag || sortBy !== 'date') && (
                        <button
                            onClick={clearFilters}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-white bg-red-600 hover:bg-red-500 transition-all duration-300 mb-2`}
                        >
                            Clear All
                        </button>
                    )}

                    {/* Results Count */}
                    <div className={`mt-2 text-xs sm:text-sm ${themeClasses.metaText}`}>
                        {filteredAndSortedPosts.length === posts.length
                            ? `Showing all ${posts.length} posts`
                            : `Found ${filteredAndSortedPosts.length} of ${posts.length} posts`
                        }
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {filteredAndSortedPosts.map(({ slug, meta }) => (
                        <article
                            key={slug}
                            className={`${themeClasses.cardBg} ${themeClasses.border} ${themeClasses.shadow} ${themeClasses.hoverBg}
                                border rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 transform hover:-translate-y-1 group `}
                        >
                            <Link href={`/blog/${slug}`} className="block">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                                    <div className="flex-1">
                                        {/* Title */}
                                        <h2 className={` text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${themeClasses.text} 
                                            group-hover:${themeClasses.accent} transition-colors duration-300 line-clamp-2`}>
                                            {meta.title}
                                        </h2>

                                        {/* Excerpt */}
                                        {meta.excerpt && (
                                            <p className={`${themeClasses.subtext} text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3`}>
                                                {TruncateString(meta.excerpt)}
                                            </p>
                                        )}

                                        {/* Meta Information */}
                                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                                            <div className={`flex items-center gap-1.5 sm:gap-2 ${themeClasses.metaText}`}>
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                <span>{new Date(meta.date).toLocaleDateString('en-US', {
                                                    year: 'numeric', month: 'long', day: 'numeric'
                                                })}
                                                </span>
                                            </div>

                                            <div className={`flex items-center gap-1.5 sm:gap-2 ${themeClasses.metaText}`}>
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                                <span>{calculateReadTime(meta.excerpt || '')} min read</span>
                                            </div>

                                            {meta.tags && (
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                                                    {meta.tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className={`flex items-center space-x-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${theme === 'light'
                                                                ? 'bg-blue-100 text-blue-700'
                                                                : 'bg-blue-900/30 text-blue-300'
                                                                }`}
                                                        >
                                                            <span>{tag}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Read More Arrow */}
                                    <div className="lg:ml-8 flex justify-end lg:justify-center">
                                        <div className={`${themeClasses.accent} group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2`}>
                                            <span className="text-sm sm:text-base lg:inline font-medium">Read More</span>
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
                {/* Empty State */}
                {posts.length === 0 ? (
                    <div className="text-center py-12 sm:py-16 lg:py-20">
                        <div className={`${themeClasses.text} text-lg sm:text-xl mb-3 sm:mb-4`}>
                            No blog posts yet
                        </div>
                        <p className={`${themeClasses.subtext} text-sm sm:text-base`}>
                            Check back soon for new content!
                        </p>
                    </div>
                ) : filteredAndSortedPosts.length === 0 ? (
                    <div className="text-center py-12 sm:py-16 lg:py-20">
                        <Search className={`w-12 h-12 sm:w-16 sm:h-16 ${themeClasses.metaText} mx-auto mb-3 sm:mb-4`} />
                        <div className={`${themeClasses.text} text-lg sm:text-xl mb-3 sm:mb-4`}>
                            No posts found
                        </div>
                        <p className={`${themeClasses.subtext} mb-4 sm:mb-6 text-sm sm:text-base px-4`}>
                            Try adjusting your search criteria or clearing filters
                        </p>
                        <button
                            onClick={clearFilters}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo}text-white hover:scale-105 transition-transform duration-300`}
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : null}

                {/* CTA Section */}
                <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                    <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl lg:rounded-2xl p-6 sm:p-8`}>
                        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 ${themeClasses.text}`}>
                            Want to stay updated?
                        </h3>
                        <p className={`${themeClasses.subtext} mb-4 sm:mb-6 text-sm sm:text-base`}>
                            Follow me on social media for the latest updates and insights.
                        </p>
                        <Link
                            href="/contact"
                            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} text-white font-medium rounded-lg text-sm sm:text-base hover:scale-105 transition-transform duration-300`}
                        >
                            Get in Touch
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to calculate estimated read time
const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(1, minutes);
};

export default BlogList;
