import BookClientView from "./BookClientView";
import { rawBooks } from "@/data/books";

interface Props {
  params: { slug: string };
}

export default function BookDetailPage({ params }: Props) {
  return <BookClientView slug={params.slug} />;
}

export async function generateStaticParams() {
  return rawBooks.map((book) => ({
    slug: book.slug,
  }));
}
