import { Talent } from '@/app/types/talent';

interface TalentSocialLinksProps {
  talent: Talent;
}

export default function TalentSocialLinks({ talent }: TalentSocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {talent.social.twitter && (
        <a
          href={talent.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-surface-3 p-2 rounded-full hover:bg-accent-lime text-gray-400 hover:text-black transition-all duration-300"
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
          className="bg-dark-surface-3 p-2 rounded-full hover:bg-accent-lime text-gray-400 hover:text-black transition-all duration-300"
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
          className="bg-dark-surface-3 p-2 rounded-full hover:bg-accent-lime text-gray-400 hover:text-black transition-all duration-300"
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
          className="flex items-center gap-2 bg-dark-surface-3 px-4 py-2 rounded-full hover:bg-accent-lime text-gray-400 hover:text-black transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          PDFでダウンロード
        </a>
      )}
    </div>
  );
} 