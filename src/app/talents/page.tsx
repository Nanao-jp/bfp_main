import Image from 'next/image';

const talents = [
  {
    id: 1,
    name: '山田 太郎',
    category: '俳優',
    image: '/images/talent1.jpg',
    description: '数々のドラマや映画に出演。演技力と表現力に定評がある実力派俳優。',
  },
  {
    id: 2,
    name: '佐藤 花子',
    category: 'タレント',
    image: '/images/talent2.jpg',
    description: 'バラエティ番組を中心に活躍中。明るい性格で視聴者から高い支持を得ている。',
  },
  // 他のタレントも同様に追加可能
];

export default function TalentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">所属タレント</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {talents.map((talent) => (
          <div key={talent.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              {/* 画像が用意できるまでの代替表示 */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">{talent.name}の写真</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                {talent.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{talent.name}</h2>
              <p className="text-gray-600">{talent.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 