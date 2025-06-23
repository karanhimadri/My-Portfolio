"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { projects } from "../../../public/data";
import { useCallback, useState } from "react";

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

function FeaturedProjectsSection() {

	const { theme } = useTheme();
	const classes = themeClasses[theme];
	const [hoveredProject, setHoveredProject] = useState(null);

	const handleProjectHover = useCallback((projectId) => {
		setHoveredProject(projectId);
	}, []);

	const handleProjectLeave = useCallback(() => {
		setHoveredProject(null);
	}, []);

	return (
		<motion.section
			className="mb-24"
			variants={itemVariants}
		>
			<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
				Featured Projects
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						className="group cursor-pointer"
						onMouseEnter={() => handleProjectHover(project.id)}
						onMouseLeave={handleProjectLeave}
						whileHover={{ scale: 1.03 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<div className={`${classes.card.base} ${classes.card.hover} glass-card rounded-3xl overflow-hidden transition-all duration-500`}>
							<div className="relative overflow-hidden">
								<img
									src={project.img}
									alt={project.title}
									className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
									loading="lazy"
								/>
								<div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-90' : 'opacity-60'
									}`} />
							</div>

							<div className="p-8">
								<h3 className={`${classes.card.title} text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300`}>
									{project.title}
								</h3>
								<p className={`${classes.card.text} mb-6 leading-relaxed`}>
									{project.desc}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className={`${classes.chip} px-3 py-1 rounded-xl text-xs font-medium`}
										>
											{tag}
										</span>
									))}
								</div>

								<button className={`${classes.button.secondary} w-full py-3 rounded-xl font-semibold transition-all duration-300 focus-ring`}>
									View Project
								</button>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	)
}

export default FeaturedProjectsSection;