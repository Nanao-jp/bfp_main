import { SparklesIcon } from "@heroicons/react/24/solid";
import NewsCard from "../components/NewsCard";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/ui/Container";
import { newsItems } from "../data/newsItems";

export const metadata = {
  title: "News & Topics",
  description: "BFP（ビッグファイタープロジェクト）の最新ニュースとトピックスをお届けします。",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#121212] py-16">
      <Container>
        <SectionTitle icon={SparklesIcon}>News & Topics</SectionTitle>
        <div className="space-y-4 max-w-7xl mx-auto mt-12">
          {newsItems.map((news) => (
            <NewsCard 
              key={`${news.date}-${news.title}`}
              news={news}
              layout={{
                aspectRatio: "16:9"
              }}
              options={{
                expandable: true
              }}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

