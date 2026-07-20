import TopicClientView from "./TopicClientView";
import { rawTopics } from "@/data/essays";

interface Props {
  params: { topic_id: string };
}

export default function TopicPage({ params }: Props) {
  return <TopicClientView topicId={params.topic_id} />;
}

export async function generateStaticParams() {
  return rawTopics.map((topic) => ({
    topic_id: topic.topic_id,
  }));
}
