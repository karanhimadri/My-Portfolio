"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";
import assets from "../../public/assets";

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

const projects = [
  {
    id: 1,
    title: "Prescripto - Full-Stack Appointment Booking System",
    desc: "Multi-role appointment booking system with JWT authentication, real-time earnings dashboard, and Stripe-based secure payments.",
    img: "/images/Screenshot 2025-06-04 103046.png",
    tags: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "JWT", "Stripe", "Cloudinary"],
  },
  {
    id: 2,
    title: "Codellive – Real-Time Collaborative Code Sharing Platform",
    desc: "Real-time code sharing and chat platform using WebSocket, with dynamic room creation and Google OAuth 2.0-based login.",
    img: "/images/codelive.png",
    tags: ["React.js", "Express.js", "WebSocket", "MongoDB", "OAuth 2.0", "Bootstrap"],
  },
  {
    id: 3,
    title: "KnowYourPDF – AI-Powered PDF Question Answering Model",
    desc: "Full-stack AI PDF Q&A tool for education powered by Gemini API with secure JWT cookies, signup/login system, and email password reset.",
    img: "/images/knowyourpdf.png",
    tags: ["React.js", "Express.js", "Gemini API", "JWT", "Cookies Auth"],
  },
];


const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "MongoDB", "PostgreSQL", "WebSocket", "Framer Motion", "Python",
  "AI/ML", "Docker", "AWS", "GraphQL"
];

const services = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end web applications with modern frameworks, scalable architecture, and seamless user experiences.",
    icon: "💻",
    color: "blue",
    features: ["React/Next.js", "Node.js APIs", "Database Design", "Cloud Deployment"],
    stats: "25+ Projects"
  },
  {
    title: "Spring Boot Development",
    desc: "Robust backend systems built with Spring Boot, leveraging Java’s power for scalable web applications and APIs.",
    icon: "🌱",
    color: "green",
    features: ["REST API Development", "Database Integration", "JWT Auth", "Maven/Gradle Projects"],
    stats: "10+ Spring Boot Projects"
  },
  {
    title: "Programming Language Teaching",
    desc: "Helping students master programming fundamentals and advanced concepts through structured lessons and practice.",
    icon: "📘",
    color: "blue",
    features: ["Java DSA", "OOP Concepts", "Frontend with React", "Project-Based Learning"],
    stats: "100+ Students Taught"
  }
];

// Animation variants
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

export default function HomePage() {
  const { theme } = useTheme();
  const classes = themeClasses[theme];
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = useCallback((projectId) => {
    setHoveredProject(projectId);
  }, []);

  const handleProjectLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  // Memoize skills for performance
  const duplicatedSkills = useMemo(() => [...skills, ...skills], []);

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

          {/* Enhanced Services Overview */}
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
                  What I Offer
                </span>
              </motion.h2>
              <p className={`${classes.hero.text} text-xl max-w-2xl mx-auto leading-relaxed`}>
                Comprehensive solutions tailored to bring your digital vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`${classes.card.base} ${classes.card.hover} glass-card rounded-3xl overflow-hidden group transition-all duration-700 relative`}
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'blue' ? 'from-blue-500/10 to-indigo-600/10' :
                    service.color === 'purple' ? 'from-purple-500/10 to-pink-600/10' :
                      'from-green-500/10 to-emerald-600/10'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-8">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                        service.color === 'purple' ? 'from-purple-400 to-pink-500' :
                          'from-green-400 to-emerald-500'
                        } rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl`} />
                      <div className={`relative text-6xl p-4 rounded-2xl bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-50 to-indigo-50' :
                        service.color === 'purple' ? 'from-purple-50 to-pink-50' :
                          'from-green-50 to-emerald-50'
                        } ${theme === 'dark' ? 'bg-opacity-10' : ''} group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`${classes.card.title} text-2xl font-bold group-hover:${service.color === 'blue' ? 'text-blue-600' :
                        service.color === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        } transition-colors duration-300`}>
                        {service.title}
                      </h3>

                      <p className={`${classes.card.text} leading-relaxed text-base`}>
                        {service.desc}
                      </p>

                      {/* Statistics */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-100 to-indigo-100 text-blue-700' :
                        service.color === 'purple' ? 'from-purple-100 to-pink-100 text-purple-700' :
                          'from-green-100 to-emerald-100 text-green-700'
                        } ${theme === 'dark' ? 'bg-opacity-20 text-opacity-90' : ''} text-sm font-semibold`}>
                        {service.stats}
                      </div>

                      {/* Feature list */}
                      <div className="pt-4 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.15) + (featureIndex * 0.1), duration: 0.6 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                              service.color === 'purple' ? 'from-purple-400 to-pink-500' :
                                'from-green-400 to-emerald-500'
                              }`} />
                            <span className={`${classes.card.text} text-sm font-medium`}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button - Always visible on mobile, hover reveal on desktop */}
                      <motion.button
                        className={`w-full mt-6 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' :
                          service.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' :
                            'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                          } text-white shadow-lg lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 opacity-100 transform translate-y-0 focus-ring`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* About Section with Enhanced Design */}
          <motion.section
            className={`${classes.section} glass-card rounded-3xl p-12 mb-24`}
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg leading-relaxed text-left">
                  <p>
                    I'm a passionate full-stack developer and Computer Science undergraduate
                    with a deep fascination for creating innovative digital solutions.
                  </p>
                  <p>
                    My expertise spans modern web technologies, AI research, and scalable
                    system architecture. I believe in writing clean, maintainable code
                    that solves real-world problems.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest in machine
                    learning research or contributing to open-source projects.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-blue-600">3+</div>
                  <p className="text-lg">Years of Development Experience</p>
                  <div className="text-6xl font-bold text-purple-600">15+</div>
                  <p className="text-lg">Projects made With Love & Logic</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Enhanced Skills Section */}
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

          {/* Enhanced Projects Section */}
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
          {/* Knowledge Shareing */}
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

                    <button className={`w-full mt-6 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg opacity-100 transform translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 focus-ring`}>
                      Read Blogs
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced CTA Section */}
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
              <button className={`${classes.button.secondary} px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus-ring hover:scale-105`}>
                Schedule a Call
              </button>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}