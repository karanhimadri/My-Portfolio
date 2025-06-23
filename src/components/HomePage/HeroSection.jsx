"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.25, 0.46, 0.45, 0.94],
            duration: 1,
            delay: 0.5
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

function HeroSection() {
    const { theme } = useTheme();
    const classes = themeClasses[theme];

    return (
        <motion.div
            className="text-center mb-24"
            variants={heroVariants}
        >
            <motion.div className="floating-element">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight`}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${classes.hero.gradient} gradient-text`}>
                        Himadri
                    </span>
                    <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${classes.hero.accent} gradient-text`}>
                        Portfolio
                    </span>
                </h1>
            </motion.div>

            <motion.p
                className={`${classes.hero.text} text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-light`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                Full-stack developer & CSE researcher crafting innovative digital experiences
                with modern technologies and AI-driven solutions.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
            >
                <button className={`${classes.button.primary} px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus-ring`}>
                    Explore My Work
                </button>

                <a
                    href="/files/FullStack_Developer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${classes.button.secondary} px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus-ring inline-block text-center`}
                >
                    Download Resume
                </a>
            </motion.div>
        </motion.div>
    )
}

export default HeroSection;