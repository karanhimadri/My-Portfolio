export const projects = [
  {
    id: 1,
    order: 1, // Custom display order - lower numbers appear first
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
    order: 2, // Custom display order - you can change this number to reorder
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
    id: 3,
    order: 3, // Custom display order - you can change this number to reorder
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
  },
  {
    id: 4,
    order: 4, // Custom display order - you can change this number to reorder
    slug: "vidtube-react-clone",
    title: "VidTube – YouTube Clone Using React and YouTube API",
    tagline: "Responsive YouTube-Like Video Platform with Category Filtering and Playback",
    description: "VidTube is a fully responsive YouTube clone built with React.js and the YouTube Data API v3, offering real-time video playback, category filtering, and detailed video pages with comments and related videos.",
    longDescription: `
  VidTube is a responsive single-page video platform inspired by YouTube. Built using React.js and YouTube Data API v3, it includes:
  - Dynamic category selection with real-time video rendering
  - Video playback with channel details, likes, subscriber count, and full description
  - Responsive UI for mobile, tablet, and desktop
  - Right-hand panel showing clickable related videos
  - Ability to navigate and play any related video with seamless experience
  `,
    category: "Frontend, API Integration, Responsive Design",
    technologies: [
      "React.js", "JavaScript", "CSS3", "YouTube Data API v3",
      "React Router", "Axios", "Context API", "HTML5", "Vite"
    ],
    features: [
      "YouTube V3 API Integration",
      "Category-wise Video Filtering Like YouTube",
      "Responsive Layout for All Devices",
      "Detailed Video Pages with Meta Information",
      "Real-Time Comments Section",
      "Interactive Sidebar for Related Videos",
      "Dynamic Routing with React Router",
      "Smooth Video Transitions",
      "SPA with Fast Navigation and Rendering"
    ],
    problemSolved: "Mimics YouTube's core features for learning and demonstration purposes, offering a user-friendly and mobile-optimized video streaming experience.",
    role: "Frontend Developer",
    responsibilities: [
      "Designed and implemented responsive React UI with video playback",
      "Connected and configured YouTube Data API v3 for dynamic video content",
      "Handled state and routing using Context API and React Router",
      "Implemented dynamic category-based video filtering",
      "Built comment, like, and related video sections with real-time data"
    ],
    impact: "Showcases how to build a complex, real-world frontend application using public APIs with modern development practices.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2024-11-01",
    endDate: "2025-01-10",
    duration: "2.5 months",
    demoUrl: "https://youtube-clone-zeta-woad.vercel.app/",
    githubUrl: "https://github.com/karanhimadri/Fully-Functional-Youtube-Clone.git",
    docsUrl: "https://github.com/yourusername/vidtube/blob/main/README.md",
    images: [
      "/images/vidtube.png"
    ],
    featured: true,
    badges: ["React", "YouTube API", "SPA", "Responsive UI"],
    keywords: ["VidTube", "YouTube Clone", "React.js", "YouTube Data API", "Video App", "Responsive SPA", "Frontend Project"]
  },
  {
    id: 5,
    order: 5, // Custom display order - you can change this number to reorder
    slug: "knowyourpdf-ai-chat",
    title: "KnowYourPDF – AI-Powered PDF Question Answering",
    tagline: "Upload PDFs and Ask Questions via Natural Chat Interface",
    description: "KnowYourPDF is a full-stack AI web app that allows users to upload PDF documents and query them conversationally using the Gemini API for real-time, intelligent answers.",
    longDescription: `
  KnowYourPDF is a document intelligence platform where users can upload PDF files and interact with them through an AI-powered chat interface. Built using a full-stack architecture and the Gemini API, the application processes and understands document content in real time.
  
  Key capabilities include:
  - Natural language Q&A interface powered by Gemini (Google)
  - Secure user authentication with JWT-based session management
  - Responsive, chat-style frontend for desktop and mobile
  - Email-based password reset using Nodemailer
  - Backend handling with Express and Node.js
  `,
    category: "AI/ML, Full-Stack, NLP",
    technologies: [
      "React.js", "Node.js", "Express.js", "Gemini API",
      "JWT", "Bootstrap", "CSS3", "Nodemailer",
      "HTML5", "Cookies", "Git", "GitHub"
    ],
    features: [
      "PDF Upload and Parsing",
      "Gemini-Powered Q&A System",
      "Conversational UI with Real-Time Responses",
      "User Auth with Signup, Login, Logout",
      "Secure Password Reset via Email (Nodemailer)",
      "JWT-Based Session Management with Cookies",
      "Responsive Layout for Desktop and Mobile",
      "MVC-Based Backend Structure"
    ],
    problemSolved: "Traditional document reading is time-consuming and non-interactive. KnowYourPDF transforms static PDFs into conversational knowledge bases for faster understanding and information retrieval.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built frontend with React.js and Bootstrap for responsive UI",
      "Designed backend using Express.js and Node.js with MVC structure",
      "Integrated Gemini API to process and query PDF content",
      "Implemented secure user auth and password reset flows using JWT and Nodemailer",
      "Managed chat context handling and session storage using cookies"
    ],
    impact: "Transforms document-heavy workflows by allowing users to extract insights from PDFs through AI-powered conversation, boosting accessibility and efficiency.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2025-02-01",
    endDate: "2025-03-20",
    duration: "1.5 months",
    demoUrl: "https://your-demo-url.com/knowyourpdf",
    githubUrl: "https://github.com/yourusername/knowyourpdf",
    docsUrl: "https://github.com/yourusername/knowyourpdf/blob/main/README.md",
    images: [
      "/images/knowyourpdf.png"
    ],
    featured: true,
    badges: ["AI", "Gemini", "PDF", "JWT", "Chatbot"],
    keywords: [
      "AI Chatbot", "PDF Question Answering", "Gemini API", "React.js",
      "Express.js", "Full Stack", "JWT Authentication", "PDF Parsing", "Conversational UI"
    ]
  },
  {
    id: 6,
    order: 6,
    slug: "postly-appwrite-post-app",
    title: "Postly – Social Posting App with Appwrite Authentication",
    tagline: "Create, Share, and Manage Posts with Image Upload and Guest Access",
    description: "Postly is a modern social web app built with React and Appwrite, enabling users—including guests—to create and manage posts with image uploads, likes, edits, and deletions.",
    longDescription: `
  Postly is a full-stack post sharing platform built using React.js and Appwrite. It supports both authenticated users and guest access. Users can create posts with images, like posts, and perform updates or deletions on their own content.

  Key capabilities include:
  - Secure authentication with signup, login, and guest user access
  - Image upload with post creation
  - Full CRUD operations on posts
  - Like/unlike feature per post
  - Responsive UI for all screen sizes
  - Appwrite used for auth, database, and storage
  `,
    category: "Web Development, Full-Stack, Social App, Auth",
    technologies: [
      "React.js", "Appwrite", "JavaScript", "CSS3", "HTML5",
      "Vite", "React Router", "Appwrite Storage", "Appwrite Database"
    ],
    features: [
      "Sign Up and Login via Appwrite",
      "Guest User Access without Registration",
      "Post Creation with Image Upload",
      "Edit and Delete User's Own Posts",
      "Like and Unlike Functionality",
      "Responsive Design for Desktop and Mobile",
      "Secure Session Handling with Appwrite",
      "Real-Time Post Updates"
    ],
    problemSolved: "Postly provides an easy-to-use platform for content sharing with secure access, even for guest users, making social posting more accessible and fast to use without needing backend setup.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Implemented Appwrite for authentication, database, and file storage",
      "Built responsive frontend in React using Vite",
      "Created post management logic including like, update, and delete",
      "Managed guest user flow with limited privileges",
      "Handled session states and real-time post updates"
    ],
    impact: "Demonstrates how to build a feature-rich social app with serverless backend (Appwrite), reducing infrastructure overhead while providing real-time capabilities.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2025-04-01",
    endDate: "2025-05-05",
    duration: "1 month",
    demoUrl: "https://postlyx.netlify.app/",
    githubUrl: "https://github.com/karanhimadri/Post-webapp.git",
    docsUrl: "https://github.com/yourusername/postly/blob/main/README.md",
    images: [
      "/images/postly.png"
    ],
    featured: true,
    badges: ["Appwrite", "Guest Login", "Post App", "Image Upload"],
    keywords: [
      "Postly", "Appwrite Authentication", "Guest User", "React.js",
      "Image Upload", "Post CRUD", "Appwrite Database", "Social Web App", "Full Stack"
    ]
  },
  {
    id: 7,
    order: 7,
    slug: "weather-report-app",
    title: "Weather Report – Real-Time Global Weather App",
    tagline: "Get Real-Time Weather Data by City or Country with a Responsive UI",
    description: "Weather Report is a responsive weather app that shows real-time temperature, humidity, and wind speed using the AccuWeather API. Users can search by city or country name to get accurate weather info instantly.",
    longDescription: `
  Weather Report is a clean and responsive web application that provides real-time weather data from around the globe. Built using modern frontend tools and powered by the AccuWeather API, it allows users to check weather metrics like:
  
  - Temperature
  - Humidity
  - Wind Speed
  
  Users can search using either a city or country name. The application is fully responsive and optimized for mobile, tablet, and desktop devices. It displays live weather updates by querying the AccuWeather API based on user input.
  `,
    category: "Frontend, API Integration",
    technologies: [
      "HTML5", "JavaScript", "CSS3", "Bootstrap", "Fetch", "AccuWeather API", "Netlify"
    ],
    features: [
      "Real-Time Weather Data with AccuWeather API",
      "Search by City or Country Name",
      "Displays Temperature, Humidity, and Wind Speed",
      "Responsive UI for All Screen Sizes",
      "Clean Design with Weather-Based Styling"
    ],
    problemSolved: "Provides users with instant access to accurate weather information anywhere in the world, helping them plan travel, commutes, and daily activities more effectively.",
    role: "Frontend Developer",
    responsibilities: [
      "Integrated AccuWeather API for dynamic data fetching",
      "Built the responsive frontend with React and CSS",
      "Implemented search functionality by city or country",
      "Displayed structured weather data clearly for user accessibility",
      "Ensured consistent performance and layout across devices"
    ],
    impact: "Offers a fast and intuitive way to access live weather updates, enhancing convenience and usability for both desktop and mobile users.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2025-03-01",
    endDate: "2025-03-20",
    duration: "20 days",
    demoUrl: "https://weather-apps-x.netlify.app",
    githubUrl: "https://github.com/karanhimadri/weather-app.git",
    docsUrl: "https://github.com/yourusername/weather-report/blob/main/README.md",
    images: [
      "/images/weather-report.png"
    ],
    featured: true,
    badges: ["Weather API", "Responsive UI", "Real-Time Data"],
    keywords: [
      "Weather App", "AccuWeather API", "HTML5", "Real-Time Weather",
      "Responsive Design", "Frontend Project", "City Search", "Global Weather"
    ]
  },
  {
    id: 8,
    order: 8,
    slug: "global-news-react-app",
    title: "Global News – Real-Time Indian News in Multiple Languages",
    tagline: "Latest Indian Headlines in Hindi, English, Kannada, Tamil & More",
    description: "Global News is a multilingual real-time news website built with React and Bootstrap, using the GNews API to deliver the latest Indian news in various Indian languages with a responsive design.",
    longDescription: `
  Global News is a real-time news application that fetches the latest headlines from across India using the GNews API. Designed to support multiple Indian languages such as Hindi, English, Kannada, Tamil, and more, it provides a localized news experience for a diverse audience.

  Key highlights include:
  - Real-time updates using the GNews API
  - News filtering by language and category
  - Clean, responsive design for all screen sizes
  - Optimized UI for both mobile and desktop users
  `,
    category: "Frontend, API Integration, Multilingual",
    technologies: [
      "React.js", "JavaScript", "Bootstrap", "CSS3", "HTML5",
      "Axios", "GNews API", "Vite", "Netlify"
    ],
    features: [
      "Real-Time News Fetching from GNews API",
      "Support for Multiple Indian Languages (Hindi, English, Kannada, Tamil, etc.)",
      "Responsive Design for Mobile, Tablet, and Desktop",
      "Top Headlines by Category and Region (India)",
      "User-Friendly Interface for Seamless Reading"
    ],
    problemSolved: "Many news apps limit access to a single language. Global News solves this by offering real-time, accessible news content in multiple Indian languages for diverse readers.",
    role: "Frontend Developer",
    responsibilities: [
      "Integrated GNews API to fetch live top headlines for India",
      "Implemented multi-language support in UI rendering",
      "Developed responsive layout using Bootstrap and React",
      "Built category-based and regional filtering for news content",
      "Ensured consistent performance across all device sizes"
    ],
    impact: "Empowers users to access real-time Indian news in their preferred language, enhancing inclusivity and engagement across different linguistic groups.",
    status: "Completed",
    isTeamProject: false,
    startDate: "2025-05-10",
    endDate: "2025-06-05",
    duration: "25 days",
    demoUrl: "https://knews-x.netlify.app/",
    githubUrl: "https://github.com/karanhimadri/News-App.git",
    docsUrl: "https://github.com/yourusername/global-news/blob/main/README.md",
    images: [
      "/images/global-news.png"
    ],
    featured: true,
    badges: ["Multilingual", "GNews API", "Real-Time News", "Responsive UI"],
    keywords: [
      "Global News", "GNews API", "Indian News", "Multilingual News App",
      "React.js", "Bootstrap", "Live News", "Hindi News", "Kannada News", "Tamil News"
    ]
  },
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
