interface InfoCardProps {
  label: string;
  value: string;
}

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="bg-dark-surface-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="text-gray-400">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
} 