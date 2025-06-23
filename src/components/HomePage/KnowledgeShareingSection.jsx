"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

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

function KnowledgeShareingSection() {
  const { theme } = useTheme();
  const classes = themeClasses[theme];
  const router = useRouter();

  return (
    <motion.section
      className="mb-24"
      variants={itemVariants}
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${classes.hero.accent} gradient-text`}>
            Knowledge Sharing
          </span>
        </motion.h2>
        <p className={`${classes.hero.text} text-xl max-w-2xl mx-auto leading-relaxed`}>
          Contributing to the tech community through research, insights, and practical knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Research Papers */}
        <motion.div
          className={`${classes.card.base} ${classes.card.hover} glass-card rounded-3xl overflow-hidden group transition-all duration-700 relative`}
          whileHover={{
            scale: 1.02,
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative text-6xl p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:scale-110 transition-transform duration-300">
                📄
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`${classes.card.title} text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300`}>
                Research Papers
              </h3>
              <p className={`${classes.card.text} leading-relaxed text-base`}>
                Publishing research on emerging technologies, software engineering practices, and innovative solutions to complex technical challenges.
              </p>

              <button className={`w-full mt-6 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg opacity-100 transform translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 focus-ring`}>
                View Publications
              </button>
            </div>
          </div>
        </motion.div>

        {/* Technology Roadmaps */}
        <motion.div
          className={`${classes.card.base} ${classes.card.hover} glass-card rounded-3xl overflow-hidden group transition-all duration-700 relative`}
          whileHover={{
            scale: 1.02,
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative text-6xl p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 group-hover:scale-110 transition-transform duration-300">
                🗺️
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`${classes.card.title} text-2xl font-bold group-hover:text-purple-600 transition-colors duration-300`}>
                Technology Roadmaps
              </h3>
              <p className={`${classes.card.text} leading-relaxed text-base`}>
                Creating comprehensive roadmaps for new technologies, helping developers and organizations navigate the evolving tech landscape.
              </p>

              <button className={`w-full mt-6 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg opacity-100 transform translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 focus-ring`}>
                View Roadmaps
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tech Blogs */}
        <motion.div
          className={`${classes.card.base} ${classes.card.hover} glass-card rounded-3xl overflow-hidden group transition-all duration-700 relative`}
          whileHover={{
            scale: 1.02,
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative text-6xl p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 group-hover:scale-110 transition-transform duration-300">
                ✍️
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`${classes.card.title} text-2xl font-bold group-hover:text-green-600 transition-colors duration-300`}>
                Tech Blogs
              </h3>
              <p className={`${classes.card.text} leading-relaxed text-base`}>
                Writing about the latest technologies, best practices, tutorials, and insights to help fellow developers stay updated and grow.
              </p>

              <button className={`w-full mt-6 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg opacity-100 transform translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 focus-ring`}
                onClick={() => router.push("/blog")}
              >
                Read Blogs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default KnowledgeShareingSection;