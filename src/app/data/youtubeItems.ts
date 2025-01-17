export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  isMain?: boolean;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "WK1KPTP_ZwQ",
    title: "『UNFIX』第13話「史上最大の特外(前編)」",
    description: "陸上自衛隊の対地球外生命体部隊・通称【特外隊】の日常と活躍を描く、連続特撮ドラマ第13話。",
    isMain: true
  },
  {
    id: "DjJu9SV8Zbw",
    title: "コラボCM「シティーハンターwith Uber eats」",
    description: "4月24日より1クールOA弊社より18人出演"
  },
  {
    id: "TBm473lA5Bk",
    title: "「絶絶絶絶対聖域」 ano feat. 幾田りら",
    description: "エンドロールに大注目!!弊社協力作品"
  },
  {
    id: "gWuL6dgZk1c",
    title: "B.F.P.ミリタリーアクション部！",
    description: "開設しました！"
  }
]; 