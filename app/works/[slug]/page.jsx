import WorkDetailView from '@/components/views/WorkDetailView';
import { works } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  // No published case studies yet — the route renders nothing until real
  // projects are added back to `works` in lib/content.js.
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = works.find((w) => w.slug === slug);
  if (!project) return { title: 'Work' };
  return {
    title: `${project.title.en} — Case Study`,
    description: `${project.title.en} / ${project.title.ar} — ${project.category.en}. A Hafix Solution case study delivered from Saudi Arabia.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <WorkDetailView slug={slug} />;
}
