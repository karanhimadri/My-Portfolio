'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
const themeClasses = {
  light: {
    navBg: "bg-white/80 backdrop-blur-md border-b border-slate-200/50",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-600",
    hoverText: "hover:text-slate-900",
    mobileMenuBg: "bg-white/95 backdrop-blur-md border-t border-slate-200/50",
    mobileText: "text-slate-700",
    mobileHoverBg: "hover:bg-slate-50/80",
    logoGradient: "from-blue-600 via-indigo-600 to-purple-600",
    activeBg: "bg-slate-100/80",
    shadow: "shadow-lg shadow-slate-200/20",
    hoverBg: "hover:bg-slate-100/50",
    borderSplit: "border-slate-200/50",
  },
  dark: {
    navBg: "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50",
    textPrimary: "text-slate-100",
    textSecondary: "text-slate-300",
    hoverText: "hover:text-white",
    mobileMenuBg: "bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50",
    mobileText: "text-slate-300",
    mobileHoverBg: "hover:bg-slate-800/80",
    logoGradient: "from-amber-400 via-yellow-400 to-orange-400",
    activeBg: "bg-slate-800/80",
    shadow: "shadow-lg shadow-black/20",
    hoverBg: "hover:bg-slate-800/50",
    borderSplit: "border-slate-700/50",
  },
};

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/projects", label: "Projects", icon: "🛠️" },
  { href: "/blog", label: "Blog", icon: "📝" },
  { href: "/certificates", label: "Certificates", icon: "📜" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/blog') {
      return pathname === '/blog' || pathname.startsWith('/blog/');
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${classes.navBg} ${isScrolled ? classes.shadow : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/" className="group flex items-center space-x-2 sm:space-x-3" onClick={handleLinkClick}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r ${classes.logoGradient} flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                H
              </div>
              <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${classes.textPrimary} group-hover:scale-105 transition-transform duration-300`}>
                Himadri
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group flex items-center space-x-2 ${isActive(href)
                  ? `${classes.activeBg} ${classes.textPrimary}`
                  : `${classes.textSecondary} ${classes.hoverText} ${classes.hoverBg}`
                  }`}
              >
                <span>{label}</span>
                {isActive(href) && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r ${classes.logoGradient} rounded-full`} />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <div className={`ml-6 pl-6 border-l ${classes.borderSplit}`}>
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r ${classes.logoGradient} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              className={`p-1.5 sm:p-2 rounded-xl ${classes.textSecondary} ${classes.hoverText} ${classes.hoverBg} transition-all duration-300 focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span className={`block w-4 sm:w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
                <span className={`block w-4 sm:w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-4 sm:w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className={`space-y-1 ${classes.mobileMenuBg} rounded-xl mt-3 p-3 border ${classes.borderSplit}`}>
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${isActive(href)
                  ? `${classes.activeBg} ${classes.textPrimary}`
                  : `${classes.mobileText} ${classes.mobileHoverBg}`
                  }`}
              >
                <span className="text-base">{icon}</span>
                <span className="font-medium text-sm">{label}</span>
                {isActive(href) && (
                  <div className={`ml-auto w-2 h-2 bg-gradient-to-r ${classes.logoGradient} rounded-full`} />
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className={`pt-3 mt-3 border-t ${classes.borderSplit}`}>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r ${classes.logoGradient} hover:scale-105 transition-all duration-300 shadow-lg text-sm`}
              >
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
