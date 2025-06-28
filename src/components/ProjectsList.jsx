'use client';

import { useState, useMemo } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Search, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects, categories } from '@/data/projects';

const themeClasses = {
  light: {
    container: "bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900",
    title: "text-slate-900",
    subtitle: "text-slate-600",
    search: {
      input: "bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-900 placeholder-slate-500",
      focus: "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      icon: "text-slate-400",
    },
    button: {
      filter: "bg-slate-100/80 text-slate-700 border border-slate-200/50 hover:bg-slate-200/80",
      active: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25",
      clear: "text-white-500 hover:text-slate-700",
    },
    meta: "text-slate-500",
  },
  dark: {
    container: "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-slate-100",
    title: "text-slate-100",
    subtitle: "text-slate-300",
    search: {
      input: "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-slate-100 placeholder-slate-400",
      focus: "focus:ring-2 focus:ring-amber-500 focus:border-transparent",
      icon: "text-slate-400",
    },
    button: {
      filter: "bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:bg-slate-700/80",
      active: "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg shadow-amber-500/25",
      clear: "text-slate-400 hover:text-slate-300",
    },
    meta: "text-slate-400",
  },
};

const ProjectsList = () => {
  const { theme } = useTheme();
  const classes = themeClasses[theme];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
        project.category.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => 
        project.category.includes(selectedCategory)
      );
    }

    // Sort by custom order (if specified), then featured first, then by date
    filtered.sort((a, b) => {
      // First priority: custom order field (if both projects have it)
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      
      // Second priority: featured projects first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Third priority: by date (newest first)
      const dateA = new Date(a.startDate || '2024-01-01');
      const dateB = new Date(b.startDate || '2024-01-01');
      return dateB - dateA;
    });

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className={`min-h-screen py-12 ${classes.container}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl mt-10 md:text-5xl font-bold mb-4 ${classes.title}`}>
            Projects
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${classes.subtitle}`}>
            A collection of projects I've built, ranging from web applications to AI tools.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute z-50 left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${classes.search.icon}`} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-10 py-3 rounded-lg transition-all duration-200 ${classes.search.input} ${classes.search.focus}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors ${classes.search.icon}`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? classes.button.active
                    : classes.button.filter
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="text-center mb-8">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className={`text-sm transition-colors ${classes.button.clear}`}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className={`text-sm ${classes.meta}`}>
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className={`text-lg ${classes.meta}`}>
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className={`mt-4 transition-colors ${classes.button.clear}`}
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
