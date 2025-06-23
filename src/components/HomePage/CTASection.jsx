"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.6
    }
  },
};

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

function CTASection() {
  const { theme } = useTheme();
  const classes = themeClasses[theme];

  return (
    <motion.section
      className={`${classes.section} glass-card rounded-3xl p-12 text-center`}
      variants={itemVariants}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Let's Build Something Amazing
      </h2>
      <p className={`${classes.hero.text} text-xl mb-10 max-w-2xl mx-auto leading-relaxed`}>
        Ready to bring your ideas to life? I'm always excited to work on
        challenging projects and collaborate with innovative teams.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className={`${classes.button.primary} px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus-ring hover:scale-105`}>
          Start a Project
        </button>
        <a
          href="https://wa.me/7585046672?text=Hi%2C%20I%20would%20like%20to%20chat%20with%20you"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`${classes.button.secondary} px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus-ring hover:scale-105`}>
            Chat on WhatsApp
          </button>
        </a>
      </div>
    </motion.section>
  )
}

export default CTASection;