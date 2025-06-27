'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';

const themeClasses = {
  light: {
    card: {
      base: "bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-xl shadow-slate-200/20",
      hover: "hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/50",
      text: "text-slate-600",
      title: "text-slate-900",
    },
    image: "bg-slate-100",
    badge: {
      featured: "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border border-amber-200/50",
      status: "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200/50",
      tech: "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50",
    },
    accent: "text-blue-600 hover:text-blue-700",
    linkBtn: "text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 hover:brightness-105",
    icon: "text-slate-500 hover:text-blue-600",
  },
  dark: {
    card: {
      base: "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 shadow-xl shadow-black/20",
      hover: "hover:shadow-2xl hover:shadow-black/40 hover:border-slate-600/50",
      text: "text-slate-400",
      title: "text-slate-100",
    },
    image: "bg-slate-800",
    badge: {
      featured: "bg-gradient-to-r from-amber-900/30 to-yellow-900/30 text-amber-300 border border-amber-700/50",
      status: "bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-300 border border-green-700/50",
      tech: "bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-300 border border-blue-700/50",
    },
    accent: "text-amber-400 hover:text-amber-300",
    linkBtn: "text-amber-300 bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border-amber-700/50 hover:brightness-110",
    icon: "text-slate-400 hover:text-amber-400",
  },
};

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  return (
    <article className={`group p-6 rounded-xl transition-all duration-300 ${classes.card.base} ${classes.card.hover}`}>
      {/* Project Image */}
      {project.images && project.images[0] && (
        <div className={`relative w-full h-48 mb-4 rounded-lg overflow-hidden ${classes.image}`}>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('hidden');
            }}
          />
        </div>
      )}

      {/* Featured Badge */}
      {project.featured && (
        <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${classes.badge.featured}`}>
          Featured
        </div>
      )}

      {/* Title */}
      <Link href={`/projects/${project.slug}`} className="block group">
        <h3 className={`text-xl font-semibold mb-2 transition-colors ${classes.card.title} group-hover:${classes.accent}`}>
          {project.title}
        </h3>
      </Link>

      {/* Tagline */}
      {project.tagline && (
        <p className={`text-sm font-medium mb-3 ${classes.accent}`}>
          {project.tagline}
        </p>
      )}

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${classes.card.text}`}>
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-xs font-medium rounded ${classes.badge.tech}`}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className={`px-2 py-1 text-xs font-medium rounded ${classes.badge.tech} opacity-60`}>
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Status and Meta */}
      <div className={`flex items-center justify-between text-xs mb-4 ${classes.card.text}`}>
        <span className={`px-2 py-1 rounded ${classes.badge.status}`}>
          {project.status}
        </span>
        <span>{project.duration}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className={`inline-block text-sm border rounded-md px-4 py-2 font-medium transition-all duration-200 hover:scale-[1.03] ${classes.linkBtn}`}
        >
          View Details →
        </Link>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 transition-colors ${classes.icon}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 transition-colors ${classes.icon}`}
              title="Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
