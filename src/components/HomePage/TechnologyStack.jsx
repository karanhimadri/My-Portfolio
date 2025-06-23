"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { skills } from "../../../public/data";

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

function TechnologyStack() {
    const { theme } = useTheme();
    const classes = themeClasses[theme];
    // Memoize skills for performance
    const duplicatedSkills = useMemo(() => [...skills, ...skills], []);

    return (
        <motion.section
            className="mb-24"
            variants={itemVariants}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Technology Stack
            </h2>
            <div className="scroll-container py-6">
                <div className="scroll-content gap-6">
                    {duplicatedSkills.map((tech, index) => (
                        <span
                            key={`${tech}-${index}`}
                            className={`${classes.chip} px-6 py-3 rounded-2xl font-semibold text-sm whitespace-nowrap transition-all duration-300 hover:scale-110`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default TechnologyStack;