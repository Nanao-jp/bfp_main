import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="relative group"
    >
      <div className="flex items-center">
        <div className="relative">
          <span className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            B.F.P.
          </span>
          {/* ホバーライン */}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9EFF00] transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
    </Link>
  );
} 