interface SectionTitleProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export default function SectionTitle({ children, variant = 'default' }: SectionTitleProps) {
  return (
    <h3 className={`text-xl font-bold mb-4 ${
      variant === 'accent' ? 'text-accent-lime' : 'text-white'
    }`}>
      {children}
    </h3>
  );
} 