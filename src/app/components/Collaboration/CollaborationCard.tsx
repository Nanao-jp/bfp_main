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
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <CollaborationCardContent item={item} onClick={openModal} />
      {isModalOpen && <CollaborationModal item={item} onClose={closeModal} />}
    </>
  );
} 