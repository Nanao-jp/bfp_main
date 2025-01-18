import Image from 'next/image';
import { Talent } from '@/app/types/talent';

interface TalentImageProps {
  talent: Talent;
}

export default function TalentImage({ talent }: TalentImageProps) {
  return (
    <div className="relative aspect-square w-full">
      <Image
        src={talent.image}
        alt={talent.name}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
} 