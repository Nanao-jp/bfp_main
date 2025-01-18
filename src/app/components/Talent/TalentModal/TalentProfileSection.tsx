import { Talent } from '@/app/types/talent';

interface TalentProfileSectionProps {
  talent: Talent;
}

export default function TalentProfileSection({ talent }: TalentProfileSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">プロフィール</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-surface-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-400">生年月日</p>
          <p className="text-white">{talent.details.profile.birthday}</p>
        </div>
        <div className="bg-dark-surface-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-400">出身地</p>
          <p className="text-white">{talent.details.profile.birthplace}</p>
        </div>
        <div className="bg-dark-surface-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-400">身長</p>
          <p className="text-white">{talent.details.profile.height}</p>
        </div>
      </div>

      {talent.details.skills.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-white mb-4">特技</h3>
          <div className="flex flex-wrap gap-2">
            {talent.details.skills.map((skill, index) => (
              <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {talent.details.hobbies.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-white mb-4">趣味</h3>
          <div className="flex flex-wrap gap-2">
            {talent.details.hobbies.map((hobby, index) => (
              <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white cursor-default">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      )}

      {talent.details.licenses && talent.details.licenses.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-white mb-4">資格</h3>
          <div className="flex flex-wrap gap-2">
            {talent.details.licenses.map((license, index) => (
              <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white cursor-default">
                {license}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 