'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '送信に失敗しました。');
      }

      setSubmitStatus({
        type: 'success',
        message: 'お問い合わせを受け付けました。担当者からの返信をお待ちください。'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'エラーが発生しました。時間をおいて再度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">CONTACT</h1>

        <div className="bg-[#1E1E1E] rounded-xl p-8 mb-12">
          <p className="text-xl text-white mb-8">
            ビッグファイタープロジェクトは軍事所作指導をメインとし、俳優、タレント、歌手が所属する事務所です。
          </p>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              数々の映像作品や舞台にミリタリーアドバイザー(軍事所作指導)として協力しています。
            </p>
            <p>
              未来の架空軍隊、旧陸軍・海軍、現代の特殊部隊、自衛隊等の監修を行っています。
            </p>
            <p className="text-[var(--accent-lime)]">
              リアルな動きを必要とする作品関係者の方は是非一度、お気軽にご連絡・お問い合わせ下さい。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="bg-[#1E1E1E] rounded-xl p-8 space-y-6">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-900/50 text-green-200'
                      : 'bg-red-900/50 text-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2D2D2D] border border-[#353535] rounded-lg focus:ring-2 focus:ring-[var(--accent-lime)] focus:border-[var(--accent-lime)] text-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2D2D2D] border border-[#353535] rounded-lg focus:ring-2 focus:ring-[var(--accent-lime)] focus:border-[var(--accent-lime)] text-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  お問い合わせ種別 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2D2D2D] border border-[#353535] rounded-lg focus:ring-2 focus:ring-[var(--accent-lime)] focus:border-[var(--accent-lime)] text-white"
                  disabled={isSubmitting}
                >
                  <option value="">選択してください</option>
                  <option value="talent">タレント関連</option>
                  <option value="business">ビジネス関連</option>
                  <option value="media">メディア関連</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  お問い合わせ内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2D2D2D] border border-[#353535] rounded-lg focus:ring-2 focus:ring-[var(--accent-lime)] focus:border-[var(--accent-lime)] text-white resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[var(--accent-lime)] text-black py-4 px-6 rounded-lg font-bold transition-colors duration-300 ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[var(--accent-lime-dark)]'
                  }`}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </div>
          </form>

          <div className="lg:col-span-1">
            <div className="bg-[#1E1E1E] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ先</h2>
              <div className="space-y-4 text-gray-300">
                <div className="space-y-1">
                  <p className="font-medium">株式会社ビッグファイタープロジェクト（略式名称：B.F.P.）</p>
                  <p>ビッグファイタープロジェクト合同会社</p>
                </div>
                <div className="space-y-1">
                  <p>〒171-0014</p>
                  <p>東京都豊島区池袋3-36-3　MICCビル1F</p>
                  <p>TEL：03-6912-5467</p>
                  <p>FAX：03-6912-5468</p>
                </div>
                <div className="pt-4 border-t border-[#2D2D2D]">
                  <p className="font-medium mb-3">【業務内容】</p>
                  <ul className="space-y-2 text-sm">
                    <li>芸能プロダクション</li>
                    <li>ミリタリーアクション指導</li>
                    <li>制作（映像・舞台・イベント・DVD・CD・グッズ・パンフレット、レコーディング、衣装制作）</li>
                    <li>キャスティング（俳優・声優・歌手・タレント等）</li>
                    <li>ライブハウス＆スタジオ運営,レコーディングスタジオ運営</li>
                    <li>イベントブッキング（国内外）</li>
                    <li>コーディネート（ヘアメイク・カメラマン・マジシャン・MC）</li>
                    <li>HP制作</li>
                    <li>印刷業務</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 