import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";

const books = [
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", insights: ["System 1 vs System 2 thinking", "How biases appear in everyday decisions"] },
  { title: "Deep Learning", author: "Goodfellow, Bengio, Courville", insights: ["Core neural network architectures", "Training methods for modern ML"] }
];

const ReadingPage = () => {
  return (
    <PageLayout pageNumber={15} sectionName="Literature">
      <div className="border-b-2 border-foreground pb-2 mb-6">
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase">Reading List</h1>
        <p className="font-body text-sm text-muted-foreground italic mt-1">Books and papers that shape my thinking</p>
      </div>

      <div className="max-w-2xl space-y-8">
        {books.map((book) => (
          <article key={book.title} className="pb-6 border-b border-border-light">
            <h2 className="font-display text-xl font-bold mb-1">{book.title}</h2>
            <p className="text-sm text-muted-foreground italic font-body mb-3">{book.author}</p>
            <ul className="space-y-1 text-sm font-body text-muted-foreground">
              {book.insights.map((insight, i) => (
                <li key={i} className="flex gap-2"><span>•</span><span>{insight}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-border flex justify-between text-sm">
        <PageLink to="/essays" className="uppercase tracking-widest">← Essays</PageLink>
        <PageLink to="/contact" className="uppercase tracking-widest">Letters →</PageLink>
      </div>
    </PageLayout>
  );
};

export default ReadingPage;
