import { Talent } from '@/app/types/talent';
import SectionTitle from '@/app/components/ui/SectionTitle';

interface TalentFilmographySectionProps {
  talent: Talent;
}

export default function TalentFilmographySection({ talent }: TalentFilmographySectionProps) {
  const { filmography } = talent.details;
  const hasFilmography = Object.values(filmography).some(arr => arr && arr.length > 0);

  if (!hasFilmography) return null;

  return (
    <div className="mt-8">
      <SectionTitle variant="accent">出演作品</SectionTitle>
      <div className="space-y-6">
        {filmography.movies && filmography.movies.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">映画</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.movies.map((movie, index) => (
                <li key={index} className="text-white">{movie}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.tv && filmography.tv.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">テレビ</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.tv.map((show, index) => (
                <li key={index} className="text-white">{show}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.web && filmography.web.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Web</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.web.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.stage && filmography.stage.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">舞台</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.stage.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.cm && filmography.cm.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">CM</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.cm.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.dvd && filmography.dvd.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">DVD</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.dvd.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.magazines && filmography.magazines.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">雑誌</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.magazines.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.cd && filmography.cd.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">CD</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.cd.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.voiceAndGames && filmography.voiceAndGames.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">声優/ゲーム</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.voiceAndGames.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.internet && filmography.internet.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">インターネット</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.internet.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {filmography.others && filmography.others.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">その他</h4>
            <ul className="list-disc list-inside space-y-1">
              {filmography.others.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 