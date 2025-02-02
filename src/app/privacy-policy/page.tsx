import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'ビッグファイタープロジェクトのプライバシーポリシーについて説明しています。個人情報の取り扱い、Cookieの使用、Google Analyticsの利用などについて記載しています。',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. 個人情報の取り扱いについて</h2>
            <p>当社は、お客様の個人情報を適切に取り扱い、保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集する場合があります：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>お問い合わせフォームから提供される情報（お名前、メールアドレスなど）</li>
              <li>Google Analyticsによる閲覧情報（アクセス解析）</li>
              <li>Cookieによる設定情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>お問い合わせへの回答</li>
              <li>サービスの改善</li>
              <li>ウェブサイトの利用状況の分析</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Google Analyticsの使用について</h2>
            <p>当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. プライバシーポリシーの変更</h2>
            <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイト上でお知らせします。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. お問い合わせ</h2>
            <p>プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：</p>
            <div className="mt-4 p-4 bg-[#1E1E1E] rounded-lg">
              <p>
                株式会社ビッグファイタープロジェクト<br />
                〒171-0014 東京都豊島区池袋3-36-3 MICCビル1F<br />
                TEL：03-6912-5467
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 