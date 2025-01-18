'use client';

import { useState } from 'react';
import { talents } from '../data/talents';
import TalentCard from '../components/Talent/TalentCard';
import TalentModal from '../components/Talent/TalentModal/index';
import { Talent } from '../types/talent';
import Container from '../components/ui/Container';
import { styles } from '../styles/constants';

export default function TalentsPage() {
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [activeTab, setActiveTab] = useState<'BFP' | 'partner'>('BFP');

  const filteredTalents = talents.filter(talent => talent.affiliation === activeTab);

  return (
    <div className={`${styles.layout.section.default}`}>
      <Container>
        {/* タブ */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'BFP'
                ? 'bg-accent-lime text-black'
                : 'bg-dark-surface-2 text-white hover:bg-accent-lime hover:text-black'
            }`}
            onClick={() => setActiveTab('BFP')}
          >
            B.F.P.所属
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'partner'
                ? 'bg-accent-lime text-black'
                : 'bg-dark-surface-2 text-white hover:bg-accent-lime hover:text-black'
            }`}
            onClick={() => setActiveTab('partner')}
          >
            業務提携
          </button>
        </div>

        {/* タレントカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTalents.map((talent) => (
            <TalentCard
              key={talent.id}
              talent={talent}
              onClick={() => setSelectedTalent(talent)}
            />
          ))}
        </div>

        {/* モーダル */}
        {selectedTalent && (
          <TalentModal
            talent={selectedTalent}
            onClose={() => setSelectedTalent(null)}
          />
        )}
      </Container>
    </div>
  );
} 