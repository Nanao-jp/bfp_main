import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";
import NewsCard from "../../NewsCard";
import SectionTitle from "../../SectionTitle";
import Container from "../../ui/Container";
import { newsItems } from "../../../data/newsItems";

interface NewsSectionProps {
  limit?: number;
  showMoreLink?: boolean;
}

export default function NewsSection({ limit, showMoreLink = true }: NewsSectionProps) {
  const displayedNews = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <section id="news">
      <Container>
        <SectionTitle icon={SparklesIcon}>News & Topics</SectionTitle>
        <div className="space-y-4 max-w-7xl mx-auto">
          {displayedNews.map((news) => (
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
        {showMoreLink && limit && newsItems.length > limit && (
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="group inline-flex items-center px-6 py-3 border-2 border-accent-lime text-base font-medium rounded-md text-black bg-accent-lime hover:bg-accent-lime-dark hover:border-accent-lime-dark transition-all duration-300"
            >
              もっと見る
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
} 