import { type ArchiveWork } from "@/app/data/archiveWorks";

type ArchiveCardProps = {
  work: ArchiveWork;
};

export default function ArchiveCard({ work }: ArchiveCardProps) {
  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg">
      <div className="mb-2">
        <div className="flex items-baseline gap-2 mb-1">
          <h2 className="text-lg font-medium text-white">{work.title}</h2>
          {work.note && (
            <span className="text-sm text-gray-400">
              {work.note}
            </span>
          )}
        </div>
        <div className="text-sm text-gray-400 space-y-1">
          <div>{work.type}</div>
          {work.staff.distributor && (
            <div>配給：{work.staff.distributor}</div>
          )}
          {work.staff.director && (
            <div>監督：{work.staff.director}</div>
          )}
        </div>
      </div>
      <div className="text-sm text-gray-300 space-y-1">
        {work.staff.military && (
          <div>軍事指導：{work.staff.military.join('、')}</div>
        )}
        {work.staff.cast && (
          <div>出演：{work.staff.cast.join('、')}</div>
        )}
        {work.staff.other && (
          <div>{work.staff.other}</div>
        )}
      </div>
    </div>
  );
} 