import EssayClientView from "./EssayClientView";
import { essays } from "@/data/essays";

interface Props {
  params: { slug: string };
}

export default function EssayPage({ params }: Props) {
  return <EssayClientView slug={params.slug} />;
}

export async function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}
