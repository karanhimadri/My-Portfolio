import ProjectsList from '@/components/ProjectsList';

export const metadata = {
  title: 'Projects | Your Portfolio',
  description: 'Explore my portfolio of projects spanning web development, mobile apps, AI/ML, and more.',
  keywords: 'projects, portfolio, web development, mobile apps, AI, machine learning, React, Next.js',
};

function ProjectsPage() {
  return <ProjectsList />;
}

export default ProjectsPage;