import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="relative group"
    >
      <div className="flex items-center">
        <div className="relative">
          <span className="text-4xl font-black tracking-widest text-white">
            B.F.P.
          </span>
          {/* ホバーライン */}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-lime)] transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
    </Link>
  );
} 