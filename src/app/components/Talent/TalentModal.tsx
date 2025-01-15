import Image from 'next/image';
import { Talent } from '@/app/types/talent';

interface TalentModalProps {
  talent: Talent;
  onClose: () => void;
}

export default function TalentModal({ talent, onClose }: TalentModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-[#1E1E1E] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto
        scrollbar-thin scrollbar-track-[#2D2D2D] scrollbar-thumb-[var(--accent-lime)] 
        scrollbar-thumb-rounded hover:scrollbar-thumb-[var(--accent-lime-dark)]
        animate-modalSlideIn relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#2D2D2D] text-white p-2 rounded-full hover:bg-[var(--accent-lime)] hover:text-black transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-square w-full max-w-xl mx-auto">
          <Image
            src={talent.image}
            alt={talent.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-white">{talent.name}</h2>
            <div className="flex items-center gap-4">
              {talent.social.twitter && (
                <a
                  href={talent.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2D2D2D] p-2 rounded-full hover:bg-[var(--accent-lime)] text-gray-400 hover:text-black transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {talent.social.facebook && (
                <a
                  href={talent.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2D2D2D] p-2 rounded-full hover:bg-[var(--accent-lime)] text-gray-400 hover:text-black transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
              )}
              {talent.social.website && (
                <a
                  href={talent.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2D2D2D] p-2 rounded-full hover:bg-[var(--accent-lime)] text-gray-400 hover:text-black transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" />
                  </svg>
                </a>
              )}
              {talent.pdf && (
                <a
                  href={talent.pdf}
                  download
                  className="flex items-center gap-2 bg-[#2D2D2D] px-4 py-2 rounded-full hover:bg-[var(--accent-lime)] text-gray-400 hover:text-black transition-all duration-300 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDFでダウンロード
                </a>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">プロフィール</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#2D2D2D] p-4 rounded-lg">
                  <p className="text-gray-400">生年月日</p>
                  <p className="text-white">{talent.details.profile.birthday}</p>
                </div>
                <div className="bg-[#2D2D2D] p-4 rounded-lg">
                  <p className="text-gray-400">出身地</p>
                  <p className="text-white">{talent.details.profile.birthplace}</p>
                </div>
                <div className="bg-[#2D2D2D] p-4 rounded-lg">
                  <p className="text-gray-400">身長</p>
                  <p className="text-white">{talent.details.profile.height}</p>
                </div>
              </div>
            </div>

            {talent.details.skills.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">特技</h3>
                <div className="flex flex-wrap gap-2">
                  {talent.details.skills.map((skill, index) => (
                    <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {talent.details.hobbies.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">趣味</h3>
                <div className="flex flex-wrap gap-2">
                  {talent.details.hobbies.map((hobby, index) => (
                    <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {talent.details.licenses && talent.details.licenses.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">資格</h3>
                <div className="flex flex-wrap gap-2">
                  {talent.details.licenses.map((license, index) => (
                    <span key={index} className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white">
                      {license}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {talent.details.military && (
              <div>
                <h3 className="text-xl font-bold text-[var(--accent-lime)] mb-4">自衛隊経歴</h3>
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
            )}

            <div>
              <h3 className="text-xl font-bold text-[var(--accent-lime)] mb-4">出演作品</h3>
              <div className="space-y-6">
                {talent.details.filmography.movies && talent.details.filmography.movies.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">映画</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.movies.map((movie, index) => (
                        <li key={index} className="text-white">{movie}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.dvd && talent.details.filmography.dvd.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">DVD</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.dvd.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.magazines && talent.details.filmography.magazines.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">雑誌</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.magazines.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.cd && talent.details.filmography.cd.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">CD</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.cd.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.voiceAndGames && talent.details.filmography.voiceAndGames.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">声優/ゲーム</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.voiceAndGames.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.tv && talent.details.filmography.tv.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">テレビ</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.tv.map((show, index) => (
                        <li key={index} className="text-white">{show}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.stage && talent.details.filmography.stage.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">舞台</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.stage.map((stage, index) => (
                        <li key={index} className="text-white">{stage}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.internet && talent.details.filmography.internet.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">インターネット</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.internet.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.cm && talent.details.filmography.cm.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">CM</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.cm.map((cm, index) => (
                        <li key={index} className="text-white">{cm}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.others && talent.details.filmography.others.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">その他</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.others.map((item, index) => (
                        <li key={index} className="text-white">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {talent.details.filmography.web && talent.details.filmography.web.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">WEB</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {talent.details.filmography.web.map((web, index) => (
                        <li key={index} className="text-white">{web}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 