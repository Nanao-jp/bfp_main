interface SectionTitleProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

export default function SectionTitle({ icon: Icon, children }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-[#9EFF00] p-2 rounded-lg">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h2 className="text-4xl font-bold">{children}</h2>
    </div>
  );
} 