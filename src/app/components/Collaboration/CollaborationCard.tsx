'use client';

import { useState } from "react";
import { CollaborationCardProps } from "./types";
import CollaborationCardContent from "./CollaborationCardContent";
import CollaborationModal from "./CollaborationModal";

export default function CollaborationCard({ item }: CollaborationCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-width)';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  if (typeof window !== 'undefined' && !document.documentElement.style.getPropertyValue('--scrollbar-width')) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }

  return (
    <>
      <CollaborationCardContent item={item} onClick={openModal} />
      {isModalOpen && <CollaborationModal item={item} onClose={closeModal} />}
    </>
  );
} 