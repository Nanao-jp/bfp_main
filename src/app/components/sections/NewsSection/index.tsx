import { SparklesIcon } from "@heroicons/react/24/solid";
import NewsCard from "../../NewsCard";
import SectionTitle from "../../SectionTitle";
import Container from "../../ui/Container";
import { newsItems } from "../../../data/newsItems";

export default function NewsSection() {
  return (
    <section id="news">
      <Container>
        <SectionTitle icon={SparklesIcon}>News & Topics</SectionTitle>
        <div className="space-y-4 max-w-7xl mx-auto">
          {newsItems.map((news, i) => (
            <NewsCard 
              key={i} 
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
    </section>
  );
} 