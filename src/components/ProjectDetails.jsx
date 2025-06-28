'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from 'lucide-react';

const themeClasses = {
  light: {
    container: "bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900",
    title: "text-slate-900",
    subtitle: "text-slate-600",
    text: "text-slate-600",
    meta: "text-slate-500",
    accent: "text-blue-600",
    link: "text-blue-600 hover:text-blue-700",
    badge: {
      featured: "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border border-amber-200/50",
      status: "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200/50",
      tech: "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50",
    },
    button: {
      primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25",
      secondary: "bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-lg",
    },
    section: "bg-white/60 backdrop-blur-sm border border-slate-200/30 shadow-lg shadow-slate-200/20",
  },
  dark: {
    container: "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-slate-100",
    title: "text-slate-100",
    subtitle: "text-slate-300",
    text: "text-slate-200",
    meta: "text-slate-400",
    accent: "text-amber-400",
    link: "text-amber-400 hover:text-amber-300",
    badge: {
      featured: "bg-gradient-to-r from-amber-900/30 to-yellow-900/30 text-amber-300 border border-amber-700/50",
      status: "bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-300 border border-green-700/50",
      tech: "bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-300 border border-blue-700/50",
    },
    button: {
      primary: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 shadow-lg shadow-amber-500/25",
      secondary: "bg-slate-800/80 backdrop-blur-sm text-slate-300 border border-slate-700 hover:bg-slate-700 hover:shadow-lg",
    },
    section: "bg-slate-800/60 backdrop-blur-sm border border-slate-700/30 shadow-lg shadow-black/20",
  },
};

const ProjectDetails = ({ project }) => {
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  const formatDate = (dateString) => {
    if (!dateString) return 'Ongoing';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${classes.container}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${classes.title}`}>Project Not Found</h1>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 ${classes.link}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 ${classes.container}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link
          href="/projects"
          className={`inline-flex items-center gap-2 mb-8 transition-colors ${classes.link}`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          {project.featured && (
            <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${classes.badge.featured}`}>
              Featured
            </div>
          )}
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${classes.title}`}>
            {project.title}
          </h1>
          
          {project.tagline && (
            <p className={`text-xl mb-6 ${classes.accent}`}>
              {project.tagline}
            </p>
          )}
          
          <p className={`text-lg mb-6 leading-relaxed ${classes.subtitle}`}>
            {project.description}
          </p>

          {/* Meta */}
          <div className={`flex flex-wrap items-center gap-6 text-sm mb-8 ${classes.meta}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{project.isTeamProject ? 'Team Project' : 'Solo Project'}</span>
            </div>
            <span className={`px-2 py-1 text-xs rounded ${classes.badge.status}`}>
              {project.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${classes.button.primary}`}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${classes.button.secondary}`}
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </header>

        {/* Project Image */}
        {project.images && project.images[0] && (
          <div className="mb-12">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded-lg shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content Sections */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Overview */}
          {project.longDescription && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Overview</h2>
              <div className={`leading-relaxed whitespace-pre-line ${classes.text}`}>
                {project.longDescription}
              </div>
            </section>
          )}

          {/* Problem */}
          {project.problemSolved && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Problem</h2>
              <p className={`leading-relaxed ${classes.text}`}>
                {project.problemSolved}
              </p>
            </section>
          )}

          {/* What I Did */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>What I Did</h2>
              <ul className={`space-y-2 ${classes.text}`}>
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`mt-1 ${classes.accent}`}>•</span>
                    <span className={`${classes.text}`}>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className={`flex items-start gap-3 ${classes.text}`}>
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          {project.metrics && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-2xl font-bold mb-1 ${classes.accent}`}>
                      {value}
                    </div>
                    <div className={`text-sm ${classes.meta}`}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Impact */}
          {project.impact && (
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Impact</h2>
              <p className={`leading-relaxed ${classes.text}`}>
                {project.impact}
              </p>
            </section>
          )}

          {/* Technologies */}
          <section className="mb-12">
            <h2 className={`text-2xl font-semibold mb-4 ${classes.title}`}>Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded ${classes.badge.tech}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;