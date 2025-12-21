import Masthead from "@/components/newspaper/Masthead";
import Sidebar from "@/components/newspaper/Sidebar";
import SectionHeader from "@/components/newspaper/SectionHeader";
import ArticleCard from "@/components/newspaper/ArticleCard";
import BookCard from "@/components/newspaper/BookCard";
import Footer from "@/components/newspaper/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <Masthead />
        
        <div className="flex gap-12">
          <Sidebar />
          
          <main className="flex-1 max-w-2xl">
            {/* SELF SECTION */}
            <section id="self" className="scroll-mt-8 mb-12">
              <ArticleCard
                variant="feature"
                title="On Curiosity, Code, and the Human Mind"
                summary="Amine Moulai is a L3 computer science student at Université de Perpignan, specializing in AI and automation. He is passionate about machine learning, algorithms, and systems, and enjoys building concrete projects that make everyday user tasks simpler. His interests also extend to game development, psychology, and the links between AI, cognition, and human behavior, with a focus on thinking critically about how intelligent systems interact with people."
              />
              <div className="border-t border-border mt-8" />
            </section>

            {/* PROJECTS SECTION */}
            <SectionHeader title="Projects" id="projects" />
            
            {/* University Projects */}
            <div className="mb-8">
              <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4 border-b border-border-light pb-2">
                University / Degree Projects
              </h3>
              
              <ArticleCard
                title="Psycho-robots"
                summary="Simulation of heterogeneous robots on a 2D grid that explore, cooperate, and handle conflicts to model collective behavior inspired by psychology."
                meta="2025 · Developer · C/C++, Python"
                links={[
                  { label: "GitHub", href: "#", external: true },
                  { label: "Demo", href: "#", external: true }
                ]}
              />
              
              <ArticleCard
                title="RV32I & Carcassonne"
                summary="Design of a 32-bit RISC-V processor and an associated strategic game, combining hardware architecture work with software logic in a team setting."
                meta="2024 · Developer · VHDL, C/C++"
                links={[
                  { label: "Read more", href: "#" }
                ]}
              />
              
              <ArticleCard
                title="Python Games"
                summary="Development of small games in Python with basic GUIs, focusing on game algorithms, state management, and data structures."
                meta="2023–2024 · Developer · Python, Tkinter"
                links={[
                  { label: "GitHub", href: "#", external: true }
                ]}
              />
              
              <ArticleCard
                title="Automotive Automation & Book Platform"
                summary="Automation of processes for the automotive sector and a community book platform, setting up online management and automation tools."
                meta="2024 · Developer · n8n, Web Stack"
                links={[
                  { label: "Read more", href: "#" }
                ]}
              />
            </div>

            {/* AI Projects */}
            <div className="mb-8">
              <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4 border-b border-border-light pb-2">
                Artificial Intelligence
              </h3>
              
              <ArticleCard
                title="Psycho-robots (AI Focus)"
                summary="Multi-agent simulation exploring emergent behaviors, cooperation strategies, and conflict resolution through psychological modeling principles."
                meta="2025 · ML Experiments · Python"
              />
            </div>

            {/* Game Dev Projects */}
            <div className="mb-8">
              <h3 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4 border-b border-border-light pb-2">
                Game Development
              </h3>
              
              <ArticleCard
                title="Python Mini-Games Collection"
                summary="A collection of interactive games built to explore game algorithms, player input handling, and visual feedback systems."
                meta="2023–2024 · Python, Pygame"
              />
              
              <ArticleCard
                title="Godot Prototype"
                summary="Experimental game prototype exploring 2D mechanics and player interactions using the Godot engine."
                meta="Ongoing · GDScript, Godot 4"
              />
            </div>

            {/* ESSAYS SECTION */}
            <SectionHeader title="Essays" id="essays" />
            
            <div className="space-y-1">
              <ArticleCard
                variant="list"
                title="AI, Habits, and Human Attention"
                summary="How automation shapes daily behavior and cognitive load."
                to="/essays/ai-habits-attention"
              />
              
              <ArticleCard
                variant="list"
                title="Psychology of Cooperative Agents"
                summary="Reflections inspired by the Psycho-robots simulation."
                to="/essays/cooperative-agents"
              />
              
              <ArticleCard
                variant="list"
                title="Spiritual Intelligence and Machine Learning"
                summary="Early thoughts on links between Islamic psychology and AI models."
                to="/essays/spiritual-intelligence-ml"
              />
            </div>

            {/* READING SECTION */}
            <SectionHeader title="Reading" id="reading" />
            
            <BookCard
              title="Thinking, Fast and Slow"
              author="Daniel Kahneman"
              insights={[
                "System 1 vs System 2 thinking; how biases appear in everyday decisions.",
                "Helps reflect on parallels between human heuristics and algorithmic shortcuts."
              ]}
            />
            
            <BookCard
              title="Deep Learning"
              author="Ian Goodfellow, Yoshua Bengio, Aaron Courville"
              insights={[
                "Core architectures and training methods for modern neural networks.",
                "Clarifies foundations for future ML projects."
              ]}
            />

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
