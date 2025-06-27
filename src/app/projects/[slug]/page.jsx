import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';
import ProjectDetails from '@/components/ProjectDetails';

export async function generateMetadata({ params }) {
  const param = await params;
  const project = getProjectBySlug(param.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Your Portfolio`,
    description: project.description,
    keywords: project.technologies.join(', '),
  };
}

export default async function ProjectPage({ params }) {
  const param = await params;
  const project = getProjectBySlug(param.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
