interface BookCardProps {
  title: string;
  author: string;
  insights: string[];
}

const BookCard = ({ title, author, insights }: BookCardProps) => {
  return (
    <article className="mb-6 pb-6 border-b border-border-light last:border-b-0">
      <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground italic mb-3 font-body">{author}</p>
      <ul className="space-y-1 text-sm font-body text-muted-foreground">
        {insights.map((insight, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-foreground">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default BookCard;
