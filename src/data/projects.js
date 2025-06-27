export const projects = [
  {
    id: 1,
    slug: "ai-powered-rag-chatbot",
    title: "RAG-Based AI Assistant for Domain-Specific Knowledge",
    tagline: "Verifiable AI Chatbot for Healthcare, Legal, Education, and Research Domains",
    description: "An AI-powered chatbot using Retrieval-Augmented Generation (RAG) to deliver accurate, source-grounded answers across specialized domains.",
    longDescription: `
    A full-stack AI chatbot system integrating semantic search and generative models to solve the problem of hallucination in general-purpose LLMs. Key capabilities include:
    - Retrieval-Augmented Generation with ChromaDB and Gemini API
    - Domain-based document parsing (JSON, PDF, XML)
    - Relevance scoring via Cohere embeddings
    - User credit management using Upstash Redis
    - React-based real-time single-page UI
    - Multi-domain document handling with per-query document traceability
    - Embedded testing utilities and modular backend design
  `,
    category: "AI/ML, Full-Stack, NLP",
    technologies: [
      "Python", "FastAPI", "React", "Tailwind CSS",
      "Cohere API", "Gemini API", "ChromaDB", "Upstash Redis",
      "JSON", "PDF", "dotenv", "React Context", "Vite"
    ],
    features: [
      "RAG Architecture with Chunk-Level Retrieval",
      "Modular Embedding System using Cohere",
      "Generative LLM Integration with Gemini",
      "Real-Time Query-Response Interface (SPA)",
      "Document Source Tracking and Highlighting",
      "Usage-Based Credit System",
      "Multi-format Data Ingestion (PDF, JSON, XML)",
      "Upstash Redis for Rate Limiting & Usage Tracking",
      "Fully Configurable via .env Setup",
      "Responsive UI with Theming Support"
    ],
    problemSolved: "General-purpose LLMs hallucinate and lack trustworthiness in high-stakes domains. This project ensures factual grounding in verified, domain-specific sources.",
    role: "Full-Stack Developer (End-to-End)",
    responsibilities: [
      "Designed and implemented FastAPI backend with vector search integration",
      "Built React frontend with real-time response handling and usage tracking",
      "Connected Gemini API with contextual document chunk injection",
      "Optimized chunking, embedding, and indexing pipelines",
      "Set up environment-based configuration and secure API key handling"
    ],
    impact: "Demoed to stakeholders in education and healthcare sectors for use in policy compliance Q&A bots.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2024-03-10",
    endDate: "2024-05-25",
    duration: "2.5 months",
    demoUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/yourusername/rag-chatbot",
    docsUrl: "https://github.com/yourusername/rag-chatbot/blob/main/README.md",
    images: [
      "/images/rag.png"
    ],
    featured: true,
    badges: ["LLM", "NLP", "RAG", "Gemini", "ChromaDB", "Cohere"],
    keywords: ["Retrieval Augmented Generation", "AI Chatbot", "LLM Grounding", "FastAPI", "React", "Gemini API", "Cohere", "Vector Search", "Full Stack AI"]
  },
  {
    id: 2,
    slug: "prescripto-healthcare-platform",
    title: "Prescripto - Healthcare Management Platform",
    tagline: "Streamlined Healthcare Platform for Doctors and Patients",
    description: "A comprehensive healthcare management system connecting patients with doctors through secure appointments and medical record management.",
    longDescription: `
    A full-stack healthcare platform built with the MERN stack, providing a complete solution for medical practice management. Features include:
    - Patient registration and profile management
    - Doctor scheduling and appointment booking
    - Secure medical records storage
    - Real-time notifications and reminders
    - Payment processing integration
    - Telemedicine video consultation support
    - Prescription management and tracking
  `,
    category: "Web Development, Healthcare",
    technologies: [
      "React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Socket.io", "Tailwind CSS", "Cloudinary", "Spring Boot"
    ],
    features: [
      "Patient Portal with Medical History",
      "Doctor Dashboard with Scheduling",
      "Secure Authentication & Authorization",
      "Real-time Notifications",
      "Payment Gateway Integration",
      "Video Consultation Support",
      "Medical Records Management",
      "Appointment Booking System"
    ],
    problemSolved: "Streamlined healthcare appointment management and reduced wait times through digital platform integration.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developed patient and doctor portals with React",
      "Built RESTful APIs with Express and MongoDB",
      "Implemented secure authentication and authorization",
      "Integrated payment processing with Stripe",
      "Designed responsive UI with Tailwind CSS"
    ],
    metrics: {
      users: "500+ registered users",
      appointments: "1000+ appointments booked",
      uptime: "99.9% platform availability"
    },
    impact: "Improved healthcare accessibility and reduced appointment scheduling time by 60%.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2024-01-15",
    endDate: "2024-03-01",
    duration: "1.5 months",
    demoUrl: "https://prescripto-demo.com",
    githubUrl: "https://github.com/yourusername/prescripto",
    images: [
      "/images/prescripto.png"
    ],
    featured: true,
    badges: ["MERN", "Healthcare", "Stripe", "Socket.io"],
    keywords: ["Healthcare", "MERN Stack", "Appointment Booking", "Medical Records", "Telemedicine"]
  },
  {
    id: 4,
    slug: "codelive-collaborative-editor",
    title: "CodeLIVE - Real-time Collaborative Code Editor",
    tagline: "Collaborate on Code in Real-Time with Chat and Room Features",
    description: "A live coding platform enabling real-time collaborative code editing with chat, rooms, and multi-language support.",
    longDescription: `
  CodeLIVE is a web-based real-time collaborative code editor where multiple users can code together, chat, and track active participants in a shared coding room. It is designed for seamless remote interviews, pair programming, and live technical collaboration.

  Key features include:
  - Real-time collaborative editing with Monaco Editor
  - WebSocket-based communication using Socket.IO
  - Unique room creation and joining
  - Active user list with timestamps
  - In-room chat system
  - Light/Dark theme toggle
  - Support for multiple programming languages
  - Anonymous temporary usernames
  - Graceful user disconnection and cleanup
  `,
    category: "Web Development, Real-time Collaboration",
    technologies: [
      "React", "Tailwind CSS", "Monaco Editor", "Socket.IO", "Node.js", "Express", "JavaScript"
    ],
    features: [
      "Real-time Code Collaboration",
      "In-room Chat Messaging",
      "User List with Join Timestamps",
      "Light/Dark Mode Toggle",
      "Multi-language Code Support",
      "Temporary Anonymous Usernames",
      "Room Creation and Joining via ID",
      "Graceful Disconnect and Cleanup"
    ],
    problemSolved: "Enabled remote teams and interviewers to collaborate on code seamlessly without needing third-party software or manual syncing.",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed frontend using React and Tailwind CSS",
      "Integrated Monaco Editor for real-time code editing",
      "Set up WebSocket communication using Socket.IO",
      "Built backend server with Express and Node.js",
      "Managed room and user sessions using in-memory data structures",
      "Implemented chat and user activity tracking features"
    ],
    metrics: {
      latency: "Sub-100ms sync delay",
      maxUsers: "Up to 50 concurrent users per room",
      roomCleanup: "Rooms auto-cleaned on last user exit"
    },
    impact: "Improved remote coding collaboration efficiency, reduced setup time for interviews and pair programming by 90%.",
    status: "Completed",
    isTeamProject: true,
    startDate: "2024-02-01",
    endDate: "2024-03-15",
    duration: "1.5 months",
    demoUrl: "https://codelive-demo.vercel.app",
    githubUrl: "https://github.com/your-username/code-live",
    images: [
      "/images/codelive.png"
    ],
    featured: true,
    badges: ["WebSocket", "Collaboration", "Monaco Editor", "React", "Node.js"],
    keywords: ["Real-time Editor", "Collaborative Coding", "Remote Interviews", "Code Sharing", "WebSockets"]
  }

];

export const categories = [
  "All",
  "Web Development",
  "AI/ML",
  "Mobile Development",
  "Data Science",
  "Blockchain",
  "Game Development",
  "DevOps"
];

export const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express", "Django", "Flask",
  "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "PHP", "Go",
  "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Vercel", "Netlify",
  "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK",
  "React Native", "Flutter", "Swift", "Kotlin", "Xamarin",
  "Solidity", "Web3.js", "Ethereum", "Blockchain", "Smart Contracts",
  "Git", "GitHub", "GitLab", "CI/CD", "Jest", "Cypress", "Selenium"
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get projects by technology
export const getProjectsByTechnology = (technology) => {
  return projects.filter(project =>
    project.technologies.includes(technology)
  );
};

// Helper function to search projects
export const searchProjects = (query) => {
  const searchLower = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchLower) ||
    project.description.toLowerCase().includes(searchLower) ||
    project.longDescription.toLowerCase().includes(searchLower) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
    project.category.toLowerCase().includes(searchLower)
  );
};
