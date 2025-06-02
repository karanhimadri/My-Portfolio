"use client";
import React from 'react';
import {
  Calendar,
  User,
  Tag,
  ExternalLink,
  Code,
  Container,
  Zap,
  Shield,
  Layers,
  GitBranch
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

export default function DockerBlogPost() {
  const { theme } = useTheme();

  const classes = {
    light: {
      pageBg: 'bg-gray-50',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      tagBg: 'bg-blue-100',
      tagText: 'text-blue-800',
      iconText: 'text-blue-600',
      codeBg: 'bg-gray-900',
      codeHeaderBg: 'bg-gray-800',
      codeBorder: 'border-gray-200',
      footerText: 'text-gray-600',
      heading2: 'text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3',
      paragraph: 'text-gray-700 leading-relaxed',
      stepNumber: 'bg-blue-600 text-white',
      codeText: 'text-green-400',
    },
    dark: {
      pageBg: 'bg-gray-900',
      textPrimary: 'text-gray-100',
      textSecondary: 'text-gray-300',
      tagBg: 'bg-blue-900/30',
      tagText: 'text-blue-300',
      iconText: 'text-blue-400',
      codeBg: 'bg-black',
      codeHeaderBg: 'bg-gray-900',
      codeBorder: 'border-gray-700',
      footerText: 'text-gray-400',
      heading2: 'text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3',
      paragraph: 'text-gray-300 leading-relaxed',
      stepNumber: 'bg-blue-500 text-white',
      codeText: 'text-green-400',
    }
  }[theme];

  const metadata = {
    title: "Introduction to Docker: Simplifying Software Deployment",
    date: "2024-12-01",
    tags: ["Docker", "Linux", "Containerization"],
    author: "Himadri Karan",
  };

  const benefits = [
    { icon: <ExternalLink className="w-5 h-5" />, title: "Portability", desc: "Containers run the same on any machine with Docker installed." },
    { icon: <Shield className="w-5 h-5" />, title: "Consistency", desc: "Avoid the classic \"it works on my machine\" problem." },
    { icon: <Zap className="w-5 h-5" />, title: "Lightweight", desc: "Containers are more efficient than traditional virtual machines." },
    { icon: <Container className="w-5 h-5" />, title: "Fast Deployment", desc: "Containers start almost instantly." },
    { icon: <Layers className="w-5 h-5" />, title: "Dependency Management", desc: "All dependencies are bundled inside the container." },
    { icon: <GitBranch className="w-5 h-5" />, title: "Scalability", desc: "Easy to scale applications horizontally." }
  ];

  const concepts = [
    { title: "Docker Image", desc: "A Docker image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software." },
    { title: "Docker Container", desc: "A container is a runtime instance of a Docker image running the application in isolation." },
    { title: "Dockerfile", desc: "A Dockerfile is a text file with instructions to build a Docker image." },
    { title: "Docker Hub", desc: "Docker Hub is a cloud-based registry to store and share Docker images." }
  ];

  const workflow = [
    "Write a Dockerfile to specify your app environment.",
    "Build the Docker image using the Dockerfile.",
    "Run a container from the image.",
    "Share images via Docker Hub or other registries.",
    "Deploy containers anywhere with Docker installed."
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 pt-24 ${classes.pageBg}`}>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <div className="relative overflow-hidden rounded-2xl mb-8 h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center justify-center p-8">
              <Container className="w-20 h-20 text-white/90" />
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${classes.textPrimary}`}>
            {metadata.title}
          </h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm mt-4 ${classes.textSecondary}`}>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {metadata.date}</div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> {metadata.author}</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {metadata.tags.map((tag, index) => (
              <span key={index} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${classes.tagBg} ${classes.tagText}`}>
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <p className={`text-xl leading-relaxed mb-12 ${classes.textSecondary}`}>
          Docker has revolutionized the way developers build, ship, and run applications by providing a consistent, portable, and efficient containerization platform.
        </p>

        <section className="mb-12">
          <h2 className={classes.heading2}><Container className={`w-8 h-8 ${classes.iconText}`} /> What is Docker?</h2>
          <p className={classes.paragraph}>
            Docker is an open-source platform to automate the deployment, scaling, and management of apps inside containers. Containers isolate your app from the system to make sure it runs the same everywhere — on your laptop, server, or cloud.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={classes.heading2}>Why Use Docker?</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-2 rounded-md ${classes.iconText}`}>{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className={classes.paragraph}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className={classes.heading2}>Key Concepts</h2>
          <div className="space-y-6">
            {concepts.map((concept, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-1">{index + 1}. {concept.title}</h3>
                <p className={classes.paragraph}>{concept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className={classes.heading2}>How Docker Works: Basic Workflow</h2>
          <ol className="space-y-4 pl-2">
            {workflow.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${classes.stepNumber}`}>
                  {index + 1}
                </div>
                <p className={classes.paragraph}>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className={classes.heading2}>
            <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
            Example: Dockerizing a Node.js App
          </h2>
          <p className={`mb-6 ${classes.paragraph}`}>
            Here's a minimal example of a Dockerfile for a simple Node.js application.
          </p>

          <div className={`rounded-lg overflow-hidden border ${classes.codeBorder}`}>
            <div className={`px-6 py-4 flex items-center justify-between ${classes.codeHeaderBg}`}>
              <span className="text-gray-300 font-medium">Dockerfile</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className={classes.codeBg}>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className={classes.codeText}>
{`# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <footer className={`pt-8 mt-8 border-t ${classes.codeBorder}`}>
          <div className="flex items-center justify-between text-sm">
            <div className={classes.footerText}>Published by {metadata.author}</div>
            <div className={classes.footerText}>{metadata.date}</div>
          </div>
        </footer>
      </article>
    </div>
  );
}
