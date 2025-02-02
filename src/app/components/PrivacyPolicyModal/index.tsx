'use client';

import { useState } from 'react';

export default function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-gray-400 hover:text-white transition-colors"
      >
        プライバシーポリシー
      </button>

      {/* SEO用の非表示コンテンツ */}
      <div className="hidden">
        <h2>プライバシーポリシー</h2>
        <div itemScope itemType="http://schema.org/Article">
          <meta itemProp="name" content="プライバシーポリシー" />
          <meta itemProp="description" content="ビッグファイタープロジェクトのプライバシーポリシーについて説明しています。個人情報の取り扱い、Cookieの使用、Google Analyticsの利用などについて記載しています。" />
          <div itemProp="articleBody">
            {/* プライバシーポリシーの内容（クローラー用） */}
            <section>
              <h3>個人情報の取り扱いについて</h3>
              <p>当社は、お客様の個人情報を適切に取り扱い、保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。</p>
            </section>
            {/* 以下、各セクションの内容 */}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
        >
          <div
            className="bg-[#1E1E1E] max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-xl p-6 space-y-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 id="privacy-policy-title" className="text-2xl font-bold">プライバシーポリシー</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-[#2D2D2D] rounded-full transition-colors"
                aria-label="閉じる"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 text-gray-300">
              <section>
                <h3 className="text-lg font-bold text-white mb-2">1. 個人情報の取り扱いについて</h3>
                <p>当社は、お客様の個人情報を適切に取り扱い、保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">2. 収集する情報</h3>
                <p>当サイトでは、以下の情報を収集する場合があります：</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>お問い合わせフォームから提供される情報（お名前、メールアドレスなど）</li>
                  <li>Google Analyticsによる閲覧情報（アクセス解析）</li>
                  <li>Cookieによる設定情報</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">3. 情報の利用目的</h3>
                <p>収集した情報は、以下の目的で利用します：</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>お問い合わせへの回答</li>
                  <li>サービスの改善</li>
                  <li>ウェブサイトの利用状況の分析</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">4. Google Analyticsの使用について</h3>
                <p>当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">5. プライバシーポリシーの変更</h3>
                <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイト上でお知らせします。</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">6. お問い合わせ</h3>
                <p>プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：</p>
                <p className="mt-2">
                  株式会社ビッグファイタープロジェクト<br />
                  〒171-0014 東京都豊島区池袋3-36-3 MICCビル1F<br />
                  TEL：03-6912-5467
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 