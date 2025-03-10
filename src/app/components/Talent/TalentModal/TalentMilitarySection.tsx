import { Talent } from '@/app/types/talent';
import SectionTitle from '@/app/components/ui/SectionTitle';

interface TalentMilitarySectionProps {
  talent: Talent;
}

export default function TalentMilitarySection({ talent }: TalentMilitarySectionProps) {
  if (!talent.details.military) return null;

  return (
    <div className="mt-8">
      <SectionTitle variant="accent">自衛隊経歴</SectionTitle>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">在籍期間</p>
          <p className="text-white">{talent.details.military.period}</p>
        </div>
        <div>
          <p className="text-gray-400">所属</p>
          <p className="text-white whitespace-pre-line">{talent.details.military.organization}</p>
        </div>
        <div>
          <p className="text-gray-400">職歴</p>
          <ul className="list-disc list-inside space-y-1">
            {talent.details.military.careers.map((career, index) => (
              <li key={index} className="text-white">{career}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-gray-400">最終階級</p>
          <p className="text-white">{talent.details.military.rank}</p>
        </div>
      </div>
    </div>
  );
} 