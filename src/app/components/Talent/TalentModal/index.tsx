import { Talent } from '@/app/types/talent';
import TalentImage from './TalentImage';
import TalentSocialLinks from './TalentSocialLinks';
import TalentProfileSection from './TalentProfileSection';
import TalentMilitarySection from './TalentMilitarySection';
import TalentFilmographySection from './TalentFilmographySection';
import { useEffect, useRef } from 'react';

interface TalentModalProps {
  talent: Talent;
  onClose: () => void;
}

export default function TalentModal({ talent, onClose }: TalentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-dark-surface-2 rounded-xl max-w-5xl w-full h-[90vh] overflow-hidden
          animate-modalFade relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-dark-surface-3 text-white p-2 rounded-full hover:bg-accent-lime hover:text-black transition-all duration-300 z-10"
          aria-label="モーダルを閉じる"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* 画像エリア（モバイル：40%、デスクトップ：40%） */}
          <div className="w-full lg:w-[40%] p-8 flex items-start">
            <div className="w-[40%] lg:w-full mx-auto">
              <TalentImage talent={talent} />
            </div>
          </div>

          {/* 情報エリア（モバイル：60%、デスクトップ：60%） */}
          <div className="w-full lg:w-[60%] p-8 overflow-y-auto scrollbar-thin scrollbar-track-dark-surface-3 scrollbar-thumb-accent-lime scrollbar-thumb-rounded hover:scrollbar-thumb-accent-lime-dark">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 id="modal-title" className="text-3xl font-bold text-white">{talent.name}</h2>
              <TalentSocialLinks talent={talent} />
            </div>

            <TalentProfileSection talent={talent} />
            <TalentMilitarySection talent={talent} />
            <TalentFilmographySection talent={talent} />
          </div>
        </div>
      </div>
    </div>
  );
} 