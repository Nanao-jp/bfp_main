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
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">TALENTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent) => (
            <div key={talent.id} className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] w-full">
                {/* 画像が用意できるまでの代替表示 */}
                <div className="absolute inset-0 bg-[var(--dark-surface-2)] flex items-center justify-center">
                  <span className="text-gray-400">{talent.name}の写真</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-[var(--accent-lime)] text-black rounded-full px-3 py-1 text-sm font-semibold mb-2">
                  {talent.category}
                </span>
                <h2 className="text-xl font-bold text-white mb-2">{talent.name}</h2>
                <p className="text-gray-400">{talent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 