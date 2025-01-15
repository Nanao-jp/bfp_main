export type ArchiveWork = {
  title: string;
  type: string;
  note?: string;
  staff: {
    military?: string[];
    cast?: string[];
    other?: string;
    director?: string;
    distributor?: string;
  };
};

export const archiveWorks: ArchiveWork[] = [
  {
    title: "PUBG MOBILE",
    type: "TVCM",
    staff: {
      other: "ガンアクションアドバイス"
    }
  },
  {
    title: "都庁爆破！",
    type: "TBS新春ドラマスペシャル",
    staff: {
      other: "自衛隊監修・自衛隊特殊作戦群役＆警察SIT役出演"
    }
  },
  {
    title: "決戦！鳥羽伏見の戦い　日本の未来を決めた７日間",
    type: "NHK BSプレミアム",
    note: "明治維新150年スペシャル",
    staff: {
      other: "軍事所作協力・兵士役出演"
    }
  },
  {
    title: "DESTINY 鎌倉ものがたり",
    type: "映画",
    staff: {
      director: "山崎貴",
      distributor: "東宝",
      other: "出演"
    }
  },
  {
    title: "鋼の錬金術師",
    type: "映画",
    staff: {
      director: "曽根文彦",
      distributor: "ワーナー・ブラザーズ映画",
      other: "軍事指導・出演"
    }
  },
  {
    title: "ラストレシピ 麒麟の舌の記憶",
    type: "映画",
    staff: {
      director: "滝田洋二郎",
      distributor: "東宝",
      other: "軍事指導・出演"
    }
  },
  {
    title: "亜人",
    type: "映画",
    staff: {
      director: "本広克行",
      distributor: "東宝",
      other: "特殊部隊指導・警察監修・出演"
    }
  },
  {
    title: "散歩する侵略者",
    type: "映画",
    staff: {
      director: "黒沢清",
      distributor: "松竹",
      other: "軍事指導・出演"
    }
  },
  {
    title: "関ヶ原",
    type: "映画",
    staff: {
      director: "原田眞人",
      distributor: "東宝・アスミック・エース",
      other: "軍事指導・出演"
    }
  },
  {
    title: "白兵奇襲隊コンバットキャッツ",
    type: "映画",
    staff: {
      director: "石川二郎",
      other: "監督・撮影・照明・編集：石川二郎、車両協力"
    }
  },
  {
    title: "忍びの国",
    type: "映画",
    staff: {
      director: "中村義洋",
      distributor: "東宝",
      other: "出演"
    }
  },
  {
    title: "TOKYOなりきりCOLLECTION",
    type: "イベント",
    staff: {
      other: "イベントレポート掲載"
    }
  },
  {
    title: "ウルトラマンX",
    type: "テレビ東京",
    note: "第15話「戦士の背中」",
    staff: {
      cast: ["蛇澤圭佑"],
      other: "軍事指導"
    }
  },
  {
    title: "新テニスの王子様　オン・ザ・レイディオ",
    type: "文化放送",
    staff: {
      cast: ["末吉司弥"]
    }
  },
  {
    title: "ハッピー・リタイアメント",
    type: "テレビ朝日",
    staff: {
      other: "軍事指導"
    }
  },
  {
    title: "THE NEXT GENERATION パトレイバー首都決戦ディレクターズカット",
    type: "映画",
    staff: {
      distributor: "松竹",
      other: "制作：東北新社、軍事指導",
      cast: ["西泰平", "佐佐木萌英"]
    }
  },
  {
    title: "検事・沢木正夫3 共犯者",
    type: "テレビ東京・水曜ミステリー",
    staff: {
      cast: ["長谷部浩幸"]
    }
  },
  {
    title: "聖なる嘘つきたちの夜",
    type: "舞台",
    staff: {
      other: "脚本：西島巧輔、演出：小堀裕之(２丁拳銃)",
      cast: ["朋"]
    }
  },
  {
    title: "ドリームレスキュー・言うことナース～エピソード０なのですぅ～",
    type: "舞台",
    staff: {
      cast: ["久保亜沙香"]
    }
  },
  {
    title: "第5回タイ-ジャパン アニメ＆ミュージック・フェスティバル",
    type: "イベント",
    note: "アニメーションと音楽を通して日タイの友好を図る",
    staff: {
      other: "米倉千尋さんをキャスティング"
    }
  },
  {
    title: "松本零士 大解剖",
    type: "書籍",
    note: "三栄書房より3月31日発売",
    staff: {
      other: "P121～P122　弊社主催、舞台「キャプテンハーロック～次元航海～」取材記事掲載"
    }
  },
  {
    title: "Strike And Tactical マガジンNo.74",
    type: "雑誌",
    note: "SATマガジン出版より2016年5月号",
    staff: {
      other: "P68～P69　「ミリタリー人物探訪：第一回　元自衛官による芸能プロダクション」にビッグファイタープロジェクト代表、越の取材記事掲載"
    }
  },
  {
    title: "バンクーバーの朝日",
    type: "映画",
    staff: {
      military: ["越 康広", "長谷部 浩幸"],
      cast: ["伊藤 俊勲", "林 陽介"]
    }
  },
  {
    title: "遠い約束　星になったこどもたち",
    type: "TBS ドラマ特別企画",
    note: "終戦69年",
    staff: {
      military: ["越 康広", "長谷部 浩幸"],
      cast: ["金子 昌弘", "伊藤 俊勲", "林 陽介"]
    }
  },
  {
    title: "アバケン第5弾～芸能人の本性を暴け！！～極限状態の衝撃ドッキリ！",
    type: "フジテレビ カスベ！",
    staff: {
      cast: ["長谷部 浩幸"]
    }
  },
  {
    title: "永遠の0",
    type: "テレビ東京開局50周年特別企画 スペシャルドラマ",
    staff: {
      military: ["越 康広", "長谷部 浩幸"],
      cast: ["伊藤 俊勲", "林 陽介"]
    }
  },
  {
    title: "命ある限り戦え、そして生き抜くんだ",
    type: "フジテレビ金曜プレステージ・終戦記念スペシャルドラマ",
    staff: {
      military: ["長谷部 浩幸"],
      cast: ["越 康広", "長谷部 浩幸", "金子 昌弘", "林 陽介"]
    }
  },
  {
    title: "零戰 ZERO ～搭乗員たちが見つめた太平洋戦争～",
    type: "NHK BSプレミアム ドラマ",
    note: "ATP賞グランプリ受賞作品",
    staff: {
      military: ["越 康広", "長谷部 浩幸"],
      cast: ["越 康広", "長谷部 浩幸"]
    }
  },
  {
    title: "海賊とよばれた男",
    type: "映画",
    staff: {
      director: "山崎貴",
      distributor: "東宝",
      other: "出演・衣装応援"
    }
  },
  {
    title: "キャプテンハーロック～次元航海～",
    type: "舞台",
    note: "弊社主催",
    staff: {}
  },
  {
    title: "DEATH NOTE",
    type: "映画",
    staff: {
      director: "佐藤信介",
      distributor: "ワーナー・ブラザーズ映画",
      other: "特殊部隊指導・出演"
    }
  },
  {
    title: "シン・ゴジラ",
    type: "映画",
    staff: {
      director: "樋口真嗣",
      distributor: "東宝",
      other: "軍事指導・出演"
    }
  },
  {
    title: "HIGH&LOW",
    type: "映画",
    staff: {
      director: "久保茂昭",
      distributor: "松竹",
      other: "出演"
    }
  },
  {
    title: "日本で一番悪い奴ら",
    type: "映画",
    staff: {
      director: "白石和彌",
      distributor: "東映",
      other: "出演"
    }
  },
  {
    title: "P&Gレノア Pepe Summer",
    type: "CM",
    staff: {
      cast: ["中村尚輝"]
    }
  },
  {
    title: "ガチ★星",
    type: "テレビ西日本（TNC)",
    staff: {
      cast: ["西泰平"]
    }
  },
  {
    title: "有吉反省会",
    type: "日本テレビ",
    staff: {
      cast: ["FICE"]
    }
  },
  {
    title: "きんぴか",
    type: "WOWOW連続ドラマW",
    staff: {
      other: "劇用車パジェロ協力"
    }
  },
  {
    title: "空人",
    type: "映画",
    note: "新宿ケイズシネマ",
    staff: {
      other: "弊社より1名キャスティング"
    }
  },
  {
    title: "母と暮らせば",
    type: "映画",
    staff: {
      director: "山田洋次",
      distributor: "松竹",
      other: "軍事指導"
    }
  },
  {
    title: "牙狼＜GARO＞10週年記念作品劇場版「媚空ービクウー」",
    type: "映画",
    staff: {
      cast: ["中村尚輝"],
      other: "ウサミ役"
    }
  },
  {
    title: "図書館戦争THE LAST MISSION",
    type: "映画",
    staff: {
      director: "佐藤信介",
      distributor: "東宝",
      other: "軍事指導"
    }
  },
  {
    title: "進撃の巨人 エンドオブザワールド",
    type: "映画",
    staff: {
      director: "樋口真嗣",
      distributor: "東宝",
      other: "軍事指導"
    }
  },
  {
    title: "S -最後の警官-RECOVERY OF OUR FUTURE",
    type: "映画",
    staff: {
      cast: ["中村尚輝"]
    }
  },
  {
    title: "進撃の巨人 反撃の狼煙",
    type: "dTV",
    staff: {
      cast: ["中村尚輝", "越康広", "長谷部浩幸", "金子昌弘"],
      other: "軍事指導"
    }
  },
  {
    title: "日本のいちばん長い日",
    type: "映画",
    staff: {
      director: "原田眞人",
      distributor: "松竹",
      cast: ["越康広", "長谷部浩幸", "金子昌弘"],
      other: "軍事指導"
    }
  },
  {
    title: "進撃の巨人 ATTACK ON TITAN",
    type: "映画",
    staff: {
      director: "樋口真嗣",
      distributor: "東宝",
      cast: ["中村尚輝"],
      other: "軍事指導"
    }
  },
  {
    title: "玉音放送を作った男たち",
    type: "NHK BSプレミアム",
    staff: {
      cast: ["長谷部浩幸", "金子昌弘"],
      other: "軍事指導"
    }
  },
  {
    title: "東京無国籍少女",
    type: "映画",
    staff: {
      director: "押井 守",
      distributor: "東映",
      other: "軍事指導"
    }
  },
  {
    title: "野火",
    type: "映画",
    note: "第71回ヴェネチア国際映画祭コンペティション部門出品",
    staff: {
      director: "塚本晋也",
      distributor: "海獣シアター",
      other: "軍事所作指導、監修：金子昌弘"
    }
  },
  {
    title: "リアル鬼ごっこ",
    type: "映画",
    staff: {
      director: "園子温",
      distributor: "松竹、アスミック・エース",
      cast: ["櫻衣はる", "長谷部有咲", "佐々木萌英"]
    }
  },
  {
    title: "ストレイヤーズ・クロニクル",
    type: "映画",
    staff: {
      director: "瀬々敬久",
      distributor: "ワーナー・ブラザース映画"
    }
  },
  {
    title: "おかあさんの木",
    type: "映画",
    staff: {
      director: "磯村一路",
      distributor: "東映",
      other: "軍事指導＆出演"
    }
  },
  {
    title: "予告犯",
    type: "映画",
    staff: {
      director: "中村義洋",
      distributor: "東宝",
      cast: ["長谷部浩幸"]
    }
  },
  {
    title: "THE NEXT GENERATION パトレイバー　首都決戦",
    type: "映画",
    note: "鬼才：押井守が描く、リアル・ロボットアクション",
    staff: {
      other: "軍事アドバイザー＆出演"
    }
  },
  {
    title: "天皇の料理番",
    type: "TBSドラマ",
    note: "明治から昭和の激動の時代を生きたある男の、史実に基づく究極の人間愛のドラマ",
    staff: {
      other: "軍事指導＆出演"
    }
  },
  {
    title: "ジョーカー・ゲーム",
    type: "映画",
    staff: {
      cast: ["越 康広", "長谷部 浩幸"],
      other: "軍事指導"
    }
  }
]; 