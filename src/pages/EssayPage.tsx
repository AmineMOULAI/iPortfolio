import { useParams, Link } from "react-router-dom";
import Footer from "@/components/newspaper/Footer";

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
      "Consider the morning ritual of checking one's phone. What begins as a conscious decision quickly becomes an automatic response—a habit loop triggered by the mere sight of the device. AI systems, designed to maximize engagement, exploit these loops with precision. Notifications arrive at optimal moments, content is tailored to our psychological profiles, and friction is systematically eliminated from every interaction.",
      "The cognitive load paradox emerges here: while AI promises to reduce mental burden by automating decisions, it simultaneously creates new demands on our attention. We must now navigate an environment designed to capture and hold our focus, making the simple act of disengagement a cognitive effort in itself.",
      "This essay explores the mechanisms through which AI systems influence habit formation, the implications for human agency, and potential frameworks for maintaining cognitive sovereignty in an increasingly automated world."
    ]
  },
  "cooperative-agents": {
    title: "Psychology of Cooperative Agents",
    subtitle: "Reflections inspired by the Psycho-robots simulation.",
    content: [
      "The Psycho-robots project began as a technical exercise in multi-agent simulation but quickly evolved into a meditation on the nature of cooperation itself. Watching artificial agents navigate a shared environment, forming alliances and resolving conflicts, offers unexpected insights into the psychological foundations of collective behavior.",
      "In the simulation, each robot operates with individual goals and limited information about its peers. Cooperation emerges not from centralized command but from local interactions—agents learning through trial and error which strategies yield mutual benefit. This bottom-up emergence mirrors findings from behavioral economics and social psychology about how human groups self-organize.",
      "The parallels extend further. Just as humans develop trust through repeated positive interactions, the simulated agents build cooperative relationships over time. Defection carries reputational costs, and agents that consistently cooperate form stable coalitions. The mathematics of game theory meets the messiness of social dynamics.",
      "What surprised me most was how the agents' behavior began to feel psychologically meaningful. Their 'decisions' reflected patterns recognizable from human groups: the formation of in-groups, the management of free-riders, the delicate balance between competition and cooperation that characterizes so much of social life."
    ]
  },
  "spiritual-intelligence-ml": {
    title: "Spiritual Intelligence and Machine Learning",
    subtitle: "Early thoughts on links between Islamic psychology and AI models.",
    content: [
      "At first glance, Islamic psychology and machine learning occupy entirely separate domains—one concerned with the soul and its relationship to the Divine, the other with pattern recognition and optimization. Yet deeper investigation reveals surprising points of contact.",
      "Islamic psychology, particularly as articulated by scholars like Al-Ghazali, presents a model of the human psyche structured around the concepts of nafs (self/soul), qalb (heart), aql (intellect), and ruh (spirit). This framework describes not merely cognitive processes but a hierarchy of consciousness moving from base instincts toward higher awareness.",
      "Modern neural networks, despite their mathematical foundations, encode their own form of hierarchy. Deep learning architectures process information through layers of abstraction, moving from raw sensory input toward increasingly complex representations. The analogy is imperfect but instructive: both systems describe transformation through levels.",
      "The concept of tazkiyah—purification of the soul—finds an unexpected echo in machine learning regularization techniques. Just as the spiritual seeker works to remove obstacles between the heart and divine guidance, the ML practitioner constrains models to prevent overfitting and promote generalization. Both processes involve a kind of disciplined simplification in service of deeper truth.",
      "These reflections remain preliminary, more suggestive than systematic. Yet they point toward a broader project: understanding intelligence—artificial or human—not merely as computation but as a spectrum of awareness, with implications for how we design, train, and deploy learning systems."
    ]
  }
};

const EssayPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? essays[slug] : null;

  if (!essay) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Essay Not Found</h1>
          <Link to="/" className="article-link">← Return to homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-8">
        {/* Back navigation */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            ← Back to homepage
          </Link>
        </nav>

        {/* Article header */}
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            {essay.title}
          </h1>
          <p className="font-body text-xl text-muted-foreground italic">
            {essay.subtitle}
          </p>
        </header>

        {/* Article content */}
        <article className="prose-newspaper">
          {essay.content.map((paragraph, index) => (
            <p 
              key={index} 
              className="font-body text-lg leading-relaxed mb-6 text-foreground first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first:first-letter:text-5xl"
              style={index === 0 ? {} : { textIndent: 0 }}
            >
              {paragraph}
            </p>
          ))}
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default EssayPage;
