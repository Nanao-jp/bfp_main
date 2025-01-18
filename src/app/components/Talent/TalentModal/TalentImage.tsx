import Image from 'next/image';
import { Talent } from '@/app/types/talent';
import { useState } from 'react';

interface TalentImageProps {
  talent: Talent;
}

export default function TalentImage({ talent }: TalentImageProps) {
  const [isError, setIsError] = useState(false);

  return (
    <div 
      className="relative aspect-square w-full"
      role="img"
      aria-label={`${talent.name}の写真`}
    >
      <Image
        src={isError ? '/images/placeholder.png' : talent.image}
        alt={`${talent.name}のプロフィール写真`}
        fill
        className="object-cover rounded-lg"
        priority
        onError={() => setIsError(true)}
        sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 40vw"
      />
    </div>
  );
} 