import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";

const Index = () => {
  return (
    <PageLayout pageNumber={1} sectionName="Front Page" showMasthead={true} showFullMasthead={true}>
      {/* Main Front Page Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Lead Story - About Me */}
        <article className="md:col-span-8 md:border-r md:border-border-light md:pr-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 uppercase">
            On Curiosity, Code, and the Human Mind
          </h2>
          
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-4 border-b border-border-light pb-2">
            An Introduction to the Author
          </p>

          {/* Main Photo with Caption */}
          <figure className="mb-6">
            <div className="aspect-[4/3] bg-muted border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-body italic">
                [ Author Portrait ]
              </span>
            </div>
            <figcaption className="text-xs font-body text-muted-foreground mt-2 italic border-b border-border-light pb-2">
              Amine Moulai at Université de Perpignan, 2025. — Personal Archive
            </figcaption>
          </figure>
          
          <div className="font-body text-base leading-relaxed space-y-4">
            <p className="drop-cap">
              Amine Moulai is a L3 computer science student at Université de Perpignan, specializing in AI and automation. He is passionate about machine learning, algorithms, and systems, and enjoys building concrete projects that make everyday user tasks simpler.
            </p>
            <p>
              His interests also extend to game development, psychology, and the links between AI, cognition, and human behavior, with a focus on thinking critically about how intelligent systems interact with people.
            </p>
            <p className="text-sm text-muted-foreground italic">
              — Continued on the Essays page
            </p>
          </div>
        </article>

        {/* Right Column - Press & Projects Teaser */}
        <aside className="md:col-span-4">
          <div className="border-t-2 border-b border-foreground py-2 mb-4">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] font-bold">
              Press & Projects
            </h3>
          </div>
          
          {/* Featured Project Teasers */}
          <div className="space-y-4">
            <article className="pb-4 border-b border-border-light">
              <PageLink to="/projects">
                <h4 className="font-display text-lg font-bold leading-tight mb-1">
                  Psycho-robots
                </h4>
              </PageLink>
              <p className="text-sm text-muted-foreground font-body">
                Multi-agent simulation exploring collective behavior through psychological modeling.
              </p>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                2025 · AI Research
              </span>
            </article>

            <article className="pb-4 border-b border-border-light">
              <PageLink to="/projects">
                <h4 className="font-display text-lg font-bold leading-tight mb-1">
                  RV32I & Carcassonne
                </h4>
              </PageLink>
              <p className="text-sm text-muted-foreground font-body">
                32-bit RISC-V processor design combined with strategic game development.
              </p>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                2024 · Hardware
              </span>
            </article>

            <article className="pb-4 border-b border-border-light">
              <PageLink to="/projects">
                <h4 className="font-display text-lg font-bold leading-tight mb-1">
                  Python Games
                </h4>
              </PageLink>
              <p className="text-sm text-muted-foreground font-body">
                Collection of interactive games exploring algorithms and player input.
              </p>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                2023–2024 · Game Dev
              </span>
            </article>
          </div>

          <PageLink to="/projects" className="block text-sm font-display uppercase tracking-widest mt-4 text-center py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors">
            Turn to Projects →
          </PageLink>
        </aside>
      </div>

      {/* Bottom Section - Essays & Reading Teasers */}
      <div className="mt-8 pt-6 border-t-2 border-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Essays Column */}
          <div className="md:border-r md:border-border-light md:pr-6">
            <div className="border-b border-foreground pb-2 mb-4">
              <h3 className="font-display text-xl uppercase tracking-wide font-bold">
                Opinion & Essays
              </h3>
            </div>
            
            <div className="space-y-3">
              <article>
                <PageLink to="/essays/ai-habits-attention">
                  <h4 className="font-display font-bold leading-tight">
                    AI, Habits, and Human Attention
                  </h4>
                </PageLink>
                <p className="text-sm text-muted-foreground font-body">
                  How automation shapes daily behavior and cognitive load.
                </p>
              </article>

              <article>
                <PageLink to="/essays/cooperative-agents">
                  <h4 className="font-display font-bold leading-tight">
                    Psychology of Cooperative Agents
                  </h4>
                </PageLink>
                <p className="text-sm text-muted-foreground font-body">
                  Reflections inspired by the Psycho-robots simulation.
                </p>
              </article>

              <article>
                <PageLink to="/essays/spiritual-intelligence-ml">
                  <h4 className="font-display font-bold leading-tight">
                    Spiritual Intelligence and Machine Learning
                  </h4>
                </PageLink>
                <p className="text-sm text-muted-foreground font-body">
                  Early thoughts on Islamic psychology and AI models.
                </p>
              </article>
            </div>

            <PageLink to="/essays" className="text-sm uppercase tracking-widest mt-4 block">
              Read all essays →
            </PageLink>
          </div>

          {/* Reading Column */}
          <div className="md:pl-6">
            <div className="border-b border-foreground pb-2 mb-4">
              <h3 className="font-display text-xl uppercase tracking-wide font-bold">
                Literature & Reading
              </h3>
            </div>
            
            <div className="space-y-3">
              <article>
                <h4 className="font-display font-bold leading-tight">
                  Thinking, Fast and Slow
                </h4>
                <p className="text-xs text-muted-foreground italic font-body">
                  Daniel Kahneman
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  System 1 vs System 2 thinking; how biases appear in decisions.
                </p>
              </article>

              <article>
                <h4 className="font-display font-bold leading-tight">
                  Deep Learning
                </h4>
                <p className="text-xs text-muted-foreground italic font-body">
                  Goodfellow, Bengio, Courville
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Core architectures and training methods for neural networks.
                </p>
              </article>
            </div>

            <PageLink to="/reading" className="text-sm uppercase tracking-widest mt-4 block">
              Full reading list →
            </PageLink>
          </div>
        </div>
      </div>

      {/* Contact Teaser */}
      <div className="mt-8 pt-4 border-t border-border text-center">
        <PageLink to="/contact" className="inline-block border-2 border-foreground px-6 py-3 font-display uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
          Write a Letter to the Editor →
        </PageLink>
      </div>
    </PageLayout>
  );
};

export default Index;
