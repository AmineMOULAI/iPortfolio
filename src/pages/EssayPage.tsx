import { useParams } from "react-router-dom";
import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";

interface Essay {
  title: string;
  subtitle: string;
  content: string[];
}

const essays: Record<string, Essay> = {
  "ai-habits-attention": {
    title: "AI, Habits, and Human Attention",
    subtitle: "How automation shapes daily behavior and cognitive load.",
    content: [
      "In an age where algorithms curate our feeds, predict our preferences, and automate our routines, the relationship between artificial intelligence and human attention has become increasingly complex. The question is no longer whether AI shapes our behavior, but how deeply it has embedded itself into the fabric of our daily cognition.",
      "Consider the morning ritual of checking one's phone. What begins as a conscious decision quickly becomes an automatic response—a habit loop triggered by the mere sight of the device. AI systems, designed to maximize engagement, exploit these loops with precision.",
      "The cognitive load paradox emerges here: while AI promises to reduce mental burden by automating decisions, it simultaneously creates new demands on our attention.",
      "This essay explores the mechanisms through which AI systems influence habit formation, the implications for human agency, and potential frameworks for maintaining cognitive sovereignty in an increasingly automated world."
    ]
  },
  "cooperative-agents": {
    title: "Psychology of Cooperative Agents",
    subtitle: "Reflections inspired by the Psycho-robots simulation.",
    content: [
      "The Psycho-robots project began as a technical exercise in multi-agent simulation but quickly evolved into a meditation on the nature of cooperation itself.",
      "In the simulation, each robot operates with individual goals and limited information about its peers. Cooperation emerges not from centralized command but from local interactions—agents learning through trial and error which strategies yield mutual benefit.",
      "The parallels extend further. Just as humans develop trust through repeated positive interactions, the simulated agents build cooperative relationships over time.",
      "What surprised me most was how the agents' behavior began to feel psychologically meaningful."
    ]
  },
  "spiritual-intelligence-ml": {
    title: "Spiritual Intelligence and Machine Learning",
    subtitle: "Early thoughts on links between Islamic psychology and AI models.",
    content: [
      "At first glance, Islamic psychology and machine learning occupy entirely separate domains—one concerned with the soul and its relationship to the Divine, the other with pattern recognition and optimization.",
      "Islamic psychology presents a model of the human psyche structured around the concepts of nafs (self/soul), qalb (heart), aql (intellect), and ruh (spirit).",
      "Modern neural networks encode their own form of hierarchy. Deep learning architectures process information through layers of abstraction.",
      "These reflections remain preliminary, more suggestive than systematic. Yet they point toward a broader project: understanding intelligence as a spectrum of awareness."
    ]
  }
};

const EssayPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? essays[slug] : null;
  const essayIndex = Object.keys(essays).indexOf(slug || '');

  if (!essay) {
    return (
      <PageLayout pageNumber={10} sectionName="Essays">
        <div className="text-center py-16">
          <h1 className="font-display text-4xl font-bold mb-4">Essay Not Found</h1>
          <PageLink to="/essays">← Return to Essays</PageLink>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout pageNumber={11 + essayIndex} sectionName="Opinion">
      <nav className="mb-6">
        <PageLink to="/essays" className="text-sm uppercase tracking-widest text-muted-foreground">
          ← Back to Essays
        </PageLink>
      </nav>

      <article className="max-w-2xl mx-auto">
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            {essay.title}
          </h1>
          <p className="font-body text-xl text-muted-foreground italic">
            {essay.subtitle}
          </p>
        </header>

        {essay.content.map((paragraph, index) => (
          <p key={index} className={`font-body text-lg leading-relaxed mb-6 ${index === 0 ? 'drop-cap' : ''}`}>
            {paragraph}
          </p>
        ))}
      </article>

      <div className="mt-12 pt-6 border-t border-border flex justify-between text-sm">
        <PageLink to="/essays" className="uppercase tracking-widest">← All Essays</PageLink>
        <PageLink to="/" className="uppercase tracking-widest">Front Page →</PageLink>
      </div>
    </PageLayout>
  );
};

export default EssayPage;
