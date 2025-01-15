'use client';

import { useState } from "react";
import Link from "next/link";
import { collaborationItems } from "../data/collaborations";
import CollaborationCard from "./Collaboration/CollaborationCard";
import SectionTitle from "./SectionTitle";
import { FilmIcon } from "@heroicons/react/24/solid";

const ITEMS_PER_PAGE = 6;

export default function CollaborationsSection() {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  return (
    <section className="py-16 bg-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={FilmIcon}>B.F.P. Collaborations</SectionTitle>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {collaborationItems.slice(0, visibleItems).map((item, index) => (
            <CollaborationCard
              key={index}
              item={item}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/works"
            className="group inline-flex items-center px-6 py-3 border-2 border-[var(--accent-lime)] text-base font-medium rounded-md text-black bg-[var(--accent-lime)] hover:bg-[var(--accent-lime-dark)] hover:border-[var(--accent-lime-dark)] transition-all duration-300"
          >
            もっと見る
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 