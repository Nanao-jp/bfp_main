export interface ExternalSite {
  title: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export const externalSites: ExternalSite[] = [
  {
    title: "Big Bang Box",
    imageUrl: "/images/BBB.jpg",
    imageAlt: "Big Bang Boxのロゴと施設の外観",
    href: "#"
  },
  {
    title: "MAWS",
    imageUrl: "/images/MAWS.jpg",
    imageAlt: "MAWSのブランドロゴとサービスイメージ",
    href: "#"
  },
  {
    title: "YouTube",
    imageUrl: "/images/youtube.jpg",
    imageAlt: "BFP公式YouTubeチャンネルのサムネイル",
    href: "#"
  }
]; 