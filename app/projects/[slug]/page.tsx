import ProjectClientView from "./ProjectClientView";
import { projects } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectClientView slug={params.slug} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
