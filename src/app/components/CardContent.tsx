import { ChevronDownIcon } from "@heroicons/react/24/solid";

type CardContentProps = {
  date: string;
  title: string;
  summary: string;
  category?: string;
  isExpanded?: boolean;
  expandable?: boolean;
  className?: string;
};

export default function CardContent({
  date,
  title,
  summary,
  category,
  isExpanded,
  expandable,
  className = ""
}: CardContentProps) {
  return (
    <div className={`p-4 md:p-6 flex-grow ${className}`}>
      <div className="flex gap-4 items-start">
        <div className="min-w-0 flex-grow">
          <div className="flex gap-2 items-center mb-2">
            {category && (
              <span className="px-2 py-1 bg-[var(--accent-lime)] text-black text-xs font-bold rounded">
                {category}
              </span>
            )}
            <span className="text-[var(--accent-lime)] text-sm">{date}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2">{summary}</p>
        </div>
        {expandable && (
          <ChevronDownIcon 
            className={`w-6 h-6 text-[var(--accent-lime)] ${isExpanded ? '-rotate-180' : ''}`}
          />
        )}
      </div>
    </div>
  );
} 