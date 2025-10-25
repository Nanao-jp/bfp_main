# BFP - Big Fighter Project Web

芸能プロダクション「BFP（ビッグファイタープロジェクト）」の公式サイトリポジトリです。Next.js 15（App Router）+ React 19 を採用し、Tailwind CSS によるモダンなUI、SEO最適化、サイトマップ/robots、自動OGPなどを備えています。

- 本番サイト: https://www.bfp54.com
- リポジトリ: https://github.com/Nanao-jp/bfp_main

## 技術スタック
- Next.js 15 / React 19
- TypeScript
- Tailwind CSS（`tailwind-scrollbar` プラグイン）
- Nodemailer（問い合わせメール送信）

## 主要スクリプト
```bash
# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build

# 本番起動（ビルド済）
npm start

# Lint
npm run lint
```

## ディレクトリ構成（抜粋）
```bash
src/
  app/
    page.tsx                # トップページ（Hero / News / YouTube / コラボ / 外部サイト）
    layout.tsx              # App Router ルートレイアウト（メタ/OGP/JsonLd/GA）
    error.tsx, not-found.tsx, loading.tsx
    globals.css             # 全体スタイル
    styles/constants.ts     # スタイル定数

    # 固定ページ
    talents/page.tsx        # タレント一覧
    works/page.tsx          # 実績・協力（最新）
    works/archive/page.tsx  # アーカイブ実績
    contact/page.tsx        # お問い合わせ
    privacy-policy/page.tsx # プライバシーポリシー

    # SEO
    sitemap.ts              # サイトマップ
    robots.ts               # robots.txt

    # API
    api/contact/route.ts    # 問い合わせ送信（Nodemailer）

    # UI/コンポーネント
    components/
      sections/{HeroSection,NewsSection,YouTubeSection,ExternalSitesSection}
      Collaboration/*, Archive/*, Talent/*, ui/*, CookieConsent/*, GoogleAnalytics.tsx, JsonLd.tsx

    # データ（静的コンテンツ）
    data/
      newsItems.ts
      youtubeItems.ts
      collaborations.ts
      externalSites.ts
      talents.ts
      archiveWorks.ts

  pages/404.tsx             # 404（App Router移行済のため最小限）

public/
  images/*, videos/*, talent/*, OGP.webp
```

## ページ / 機能
- トップ（`/`）: ヒーロー、最新ニュース、YouTube、コラボ、外部サイトリンク
- タレント（`/talents`）: タレントカード→モーダル詳細
- 実績（`/works`）: 協力作品などの一覧（フィルタ UI）
- 実績アーカイブ（`/works/archive`）: 旧作・雑誌等の一覧
- お問い合わせ（`/contact`）: バリデーション + API 経由でメール送信
- プライバシーポリシー（`/privacy-policy`）
- SEO: `sitemap.ts` / `robots.ts` / `JsonLd.tsx` / `metadata`（`layout.tsx`）

## セキュリティ / ヘッダー
- `middleware.ts` にて以下を付与
  - Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
  - 本番時に HTTPS へリダイレクト
- `next.config.js` で画像最適化・CSP・Permissions-Policy・Cache-Control を設定

## 画像・スタイル
- 画像: `public/` 配下。`next.config.js` の `images.remotePatterns` で https リモートを許可
- スタイル: Tailwind（カスタムカラー/アニメーション/トランジション）。`tailwind-scrollbar` を使用

## 分析（Google Analytics）
- `src/app/components/GoogleAnalytics.tsx` は現在「無効化中」。有効化する場合は `NEXT_PUBLIC_GA_ID` を設定し、コメントアウトを解除
- Cookie 同意: `CookieConsent` と `cookieManager.ts` で GA クッキーの付与/削除を制御

## 環境変数
問い合わせ（Nodemailer）で使用します。`.env.local` に設定してください。

```bash
# SMTP
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM="BFP <no-reply@bfp54.com>"
ADMIN_EMAIL=admin@bfp54.com

# （任意）GA4 を使う場合
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- 管理者宛メール: `ADMIN_EMAIL` に送信
- 送信元: `SMTP_FROM` を使用
- `api/contact/route.ts` で `transporter.verify()` により接続検証を実施

## セットアップ
```bash
# 推奨: Node.js 20 LTS 以上
npm ci        # 依存関係インストール
npm run dev   # http://localhost:3000 で起動
```

## デプロイ
- Vercel 推奨（Next.js 公式）
- ビルド: `npm run build`
- 実行: `npm start`
- 本番で必要な環境変数を Vercel の Project Settings に設定

## コンテンツ更新手順（静的データ）
- ニュース: `src/app/data/newsItems.ts`
```ts
export const newsItems = [
  {
    date: "2025.08.18",
    title: "タイトル",
    summary: "概要",
    content: `HTML可`,
    imageUrl: "/images/example.jpg",
  },
];
```
- YouTube: `src/app/data/youtubeItems.ts`（`id` は YouTube の動画ID）
- コラボ: `src/app/data/collaborations.ts`
- 外部サイト: `src/app/data/externalSites.ts`
- タレント: `src/app/data/talents.ts`（モーダル内プロフィール/経歴/出演を配列で管理）
- 実績アーカイブ: `src/app/data/archiveWorks.ts`

変更を保存するとフロントに即時反映されます（SSG/ISR を使っていない静的データ読込）。

## よくあるトラブル
- メール送信が失敗する
  - 環境変数（`SMTP_*`, `ADMIN_EMAIL`, `SMTP_FROM`）を再確認
  - SMTP が SSL:465 で到達可能か確認、アプリパスワード/SMTP認証の有効化
- 画像が表示されない
  - パスが `public/` 基準か（例: `/images/...`）
  - 外部画像は `next.config.js` の `images.remotePatterns` が許可しているか

## 貢献（Contributing）
1. フォーク → ブランチ作成（例: `feat/xxx`）
2. 変更 → コミット
3. PR を作成

小さな修正（文言、スタイル微調整）も歓迎です。

## ライセンス
- 本リポジトリのライセンスは未設定です（All rights reserved 相当）。
- 二次配布/再利用を行う場合は事前にご連絡ください。
