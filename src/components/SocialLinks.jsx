'use client';

import { useTheme } from '@/context/ThemeContext';
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon
} from 'lucide-react';


const SocialLinks = ({
  linkedinUrl = "https://www.linkedin.com/in/himadrikaran",
  githubUrl = "https://github.com/karanhimadri",
  youtubeUrl = "https://youtube.com/@your-channel"
}) => {
  const { theme } = useTheme();

  const links = [
    {
      name: 'LinkedIn',
      url: linkedinUrl,
      icon: LinkedinIcon,
      light: 'hover:text-blue-700 hover:bg-blue-100',
      dark: 'hover:text-blue-400 hover:bg-blue-900/30',
    },
    {
      name: 'GitHub',
      url: githubUrl,
      icon: GithubIcon,
      light: 'hover:text-gray-900 hover:bg-gray-100',
      dark: 'hover:text-white hover:bg-gray-700/50',
    },
    {
      name: 'YouTube',
      url: youtubeUrl,
      icon: YoutubeIcon,
      light: 'hover:text-red-600 hover:bg-red-100',
      dark: 'hover:text-red-400 hover:bg-red-900/30',
    },
  ];


  return (
    <div className={`flex justify-center gap-4 mt-8 mb-4`}>
      {links.map(({ name, url, icon: Icon, light, dark }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            p-2 rounded-lg transition-colors duration-200 
            border border-transparent 
            ${theme === 'dark' ? dark : light}
          `}
          aria-label={name}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
