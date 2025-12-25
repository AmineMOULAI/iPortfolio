import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";

const essays = [
  { slug: "ai-habits-attention", title: "AI, Habits, and Human Attention", subtitle: "How automation shapes daily behavior and cognitive load." },
  { slug: "cooperative-agents", title: "Psychology of Cooperative Agents", subtitle: "Reflections inspired by the Psycho-robots simulation." },
  { slug: "spiritual-intelligence-ml", title: "Spiritual Intelligence and Machine Learning", subtitle: "Early thoughts on Islamic psychology and AI models." }
];

const EssaysListPage = () => {
  return (
    <PageLayout pageNumber={10} sectionName="Opinion">
      <div className="border-b-2 border-foreground pb-2 mb-6">
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase">Opinion & Essays</h1>
        <p className="font-body text-sm text-muted-foreground italic mt-1">Reflections on AI, psychology, and the intersection of mind and machine</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {essays.map((essay, index) => (
          <article key={essay.slug} className="pb-6 border-b border-border-light">
            <PageLink to={`/essays/${essay.slug}`}>
              <h2 className="font-display text-2xl font-bold mb-2 hover:underline">{essay.title}</h2>
            </PageLink>
            <p className="font-body text-muted-foreground italic">{essay.subtitle}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-border flex justify-between text-sm">
        <PageLink to="/projects" className="uppercase tracking-widest">← Projects</PageLink>
        <PageLink to="/reading" className="uppercase tracking-widest">Reading →</PageLink>
      </div>
    </PageLayout>
  );
};

export default EssaysListPage;
