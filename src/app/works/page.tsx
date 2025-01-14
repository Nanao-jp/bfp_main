const works = [
  {
    id: 1,
    title: '明日への道',
    category: 'ドラマ',
    releaseDate: '2024年4月放送開始',
    description: '主演：山田太郎。人生の岐路に立つ主人公が、新たな道を切り開いていく感動作。',
    cast: ['山田太郎', '佐藤花子'],
  },
  {
    id: 2,
    title: '笑顔の魔法',
    category: 'バラエティ',
    releaseDate: '毎週金曜日放送中',
    description: 'MC：佐藤花子。視聴者に笑顔と元気を届ける人気バラエティ番組。',
    cast: ['佐藤花子'],
  },
  // 他の作品も同様に追加可能
];

export default function WorksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">関連作品</h1>
      
      <div className="space-y-6">
        {works.map((work) => (
          <div key={work.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{work.title}</h2>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mb-2">
                    {work.category}
                  </span>
                </div>
                <span className="text-gray-500">{work.releaseDate}</span>
              </div>
              
              <p className="text-gray-600 mt-4">{work.description}</p>
              
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700">出演者：</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {work.cast.map((member, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 