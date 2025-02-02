export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--dark-surface)]">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-[var(--accent-lime)] rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-2 border-4 border-[var(--accent-lime-dark)] rounded-full animate-spin border-t-transparent animation-delay-150"></div>
        <div className="absolute inset-4 border-4 border-[var(--accent-lime)] rounded-full animate-spin border-t-transparent animation-delay-300"></div>
      </div>
    </div>
  );
} 