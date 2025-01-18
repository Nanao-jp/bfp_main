interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="bg-[#2D2D2D] px-3 py-1 rounded-full text-white cursor-default">
      {label}
    </span>
  );
} 