"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import KnowledgeShareingSection from "@/components/HomePage/KnowledgeShareingSection";
import FeaturedProjectsSection from "@/components/HomePage/FeaturedProjectsSection";
import CTASection from "@/components/HomePage/CTASection";
import TechnologyStack from "@/components/HomePage/TechnologyStack";
import AboutSection from "@/components/HomePage/AboutSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import HeroSection from "@/components/HomePage/HeroSection";

const themeClasses = {
  light: {
    container: "bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900",
    hero: {
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      accent: "from-blue-600 via-indigo-600 to-purple-600",
      text: "text-slate-600",
    },
    card: {
      base: "bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-xl shadow-slate-200/20",
      hover: "hover:shadow-2xl hover:shadow-slate-300/30 hover:border-slate-300/50",
      text: "text-slate-600",
      title: "text-slate-900",
    },
    section: "bg-white/60 backdrop-blur-sm border border-slate-200/30 shadow-lg shadow-slate-200/20",
    chip: "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200/50 shadow-sm",
    button: {
      primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25",
      secondary: "bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-lg",
    },
  },
  dark: {
    container: "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-slate-100",
    hero: {
      gradient: "from-slate-100 via-white to-slate-100",
      accent: "from-amber-400 via-yellow-400 to-orange-400",
      text: "text-slate-300",
    },
    card: {
      base: "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 shadow-xl shadow-black/20",
      hover: "hover:shadow-2xl hover:shadow-black/40 hover:border-slate-600/50",
      text: "text-slate-400",
      title: "text-slate-100",
    },
    section: "bg-slate-800/60 backdrop-blur-sm border border-slate-700/30 shadow-lg shadow-black/20",
    chip: "bg-gradient-to-r from-amber-900/30 to-yellow-900/30 text-amber-300 border border-amber-700/50 shadow-sm",
    button: {
      primary: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 shadow-lg shadow-amber-500/25",
      secondary: "bg-slate-800/80 backdrop-blur-sm text-slate-300 border border-slate-700 hover:bg-slate-700 hover:shadow-lg",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.8,
    },
  },
};

function HomePage() {
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  return (
    <>
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scroll-seamless {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .gradient-text {
          background-size: 200% auto;
          animation: gradient-shift 8s ease-in-out infinite;
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        .scroll-container {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .scroll-content {
          display: flex;
          animation: scroll-seamless 30s linear infinite;
          will-change: transform;
        }
        .scroll-content:hover {
          animation-play-state: paused;
        }
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .focus-ring:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .scroll-content {
            animation: none !important;
          }
        }
      `}</style>
      <motion.div
        className={`${classes.container} transition-all duration-700 ease-in-out min-h-screen`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          {/* Enhanced Hero Section */}
          <HeroSection />

          {/* Enhanced Services Overview */}
          <ServiceSection />

          {/* About Section with Enhanced Design */}
          <AboutSection />

          {/* Enhanced Skills Section */}
          <TechnologyStack />

          {/* Projects Section */}
          <FeaturedProjectsSection />

          {/* Knowledge Shareing Section */}
          <KnowledgeShareingSection />

          {/* Enhanced CTA Section */}
          <CTASection />
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;