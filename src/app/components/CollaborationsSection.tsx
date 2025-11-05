'use client';

import { useState } from "react";
import Link from "next/link";
import CollaborationCard from "./Collaboration/CollaborationCard";
import GlobalModal from "./Collaboration/GlobalModal";
import SectionTitle from "./SectionTitle";
import { FilmIcon } from "@heroicons/react/24/solid";
import { CollaborationItem } from "./Collaboration/types";
import Container from "./ui/Container";
import { styles } from "../styles/constants";

interface CollaborationsSectionProps {
  items: CollaborationItem[];
}

export default function CollaborationsSection({ items }: CollaborationsSectionProps) {
  const [selectedItem, setSelectedItem] = useState<CollaborationItem | null>(null);

  return (
    <section className={`${styles.layout.section.default} bg-dark-surface`}>
      <Container>
        <SectionTitle icon={FilmIcon}>B.F.P. Collaborations</SectionTitle>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CollaborationCard
              key={item.link}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/works"
            className="group inline-flex items-center px-6 py-3 border-2 border-accent-lime text-base font-medium rounded-md text-black bg-accent-lime hover:bg-accent-lime-dark hover:border-accent-lime-dark transition-all duration-300"
          >
            もっと見る
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Container>

      {selectedItem && (
        <GlobalModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
} 