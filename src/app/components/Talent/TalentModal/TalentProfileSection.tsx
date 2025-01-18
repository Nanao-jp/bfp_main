import { Talent } from '@/app/types/talent';
import Tag from '@/app/components/ui/Tag';
import SectionTitle from '@/app/components/ui/SectionTitle';
import InfoCard from '@/app/components/ui/InfoCard';

interface TalentProfileSectionProps {
  talent: Talent;
}

export default function TalentProfileSection({ talent }: TalentProfileSectionProps) {
  return (
    <div>
      <SectionTitle>プロフィール</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          label="生年月日"
          value={talent.details.profile.birthday}
        />
        <InfoCard
          label="出身地"
          value={talent.details.profile.birthplace}
        />
        <InfoCard
          label="身長"
          value={talent.details.profile.height}
        />
      </div>

      {talent.details.skills.length > 0 && (
        <div className="mt-6">
          <SectionTitle>特技</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {talent.details.skills.map((skill, index) => (
              <Tag key={index} label={skill} />
            ))}
          </div>
        </div>
      )}

      {talent.details.hobbies.length > 0 && (
        <div className="mt-6">
          <SectionTitle>趣味</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {talent.details.hobbies.map((hobby, index) => (
              <Tag key={index} label={hobby} />
            ))}
          </div>
        </div>
      )}

      {talent.details.licenses && talent.details.licenses.length > 0 && (
        <div className="mt-6">
          <SectionTitle>資格</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {talent.details.licenses.map((license, index) => (
              <Tag key={index} label={license} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 