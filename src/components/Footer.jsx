'use client';

import { useTheme } from '@/context/ThemeContext';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { theme } = useTheme();

  const themeClasses = {
    light: {
      bg: 'bg-slate-100',
      text: 'text-slate-600',
      border: 'border-slate-200',
      link: 'hover:text-slate-900',
    },
    dark: {
      bg: 'bg-slate-900',
      text: 'text-slate-400',
      border: 'border-slate-700',
      link: 'hover:text-white',
    },
  }[theme];

  return (
    <footer className={`${themeClasses.bg} ${themeClasses.text} border-t ${themeClasses.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {currentYear} Himadri Karan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className={`transition-colors ${themeClasses.link}`}>Privacy</a>
            <a href="/terms" className={`transition-colors ${themeClasses.link}`}>Terms</a>
            <a href="/contact" className={`transition-colors ${themeClasses.link}`}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
