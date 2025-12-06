import { NewsItem, WorkItem, ServiceItem, FaqItem } from '../types';

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: '2025.11.24',
    category: 'Event',
    title: '個展「静寂の音」開催のお知らせ',
    content: '東京・青山のギャラリーにて、3年ぶりとなる個展を開催いたします。今回は「都市の静寂」をテーマに撮り下ろした新作20点を展示します。\n\n期間：2025年12月1日〜12月15日\n場所：青山Blue Gallery'
  },
  {
    id: 2,
    date: '2025.10.15',
    category: 'Work',
    title: '雑誌「Life & Light」11月号 表紙撮影',
    content: '光の表現について特集された今月号にて、表紙写真と巻頭インタビューを担当させていただきました。全国の書店にて発売中です。'
  },
  {
    id: 3,
    date: '2025.09.01',
    category: 'Info',
    title: 'Webサイトリニューアル',
    content: 'より作品の世界観をお伝えできるよう、ポートフォリオサイトを一新いたしました。'
  }
];

export const WORKS_DATA: WorkItem[] = [
  { 
    id: 1, title: 'Urban Silence', category: 'Cityscape', imageColor: 'bg-zinc-800', height: 'h-96',
    date: '2025.04', equipment: 'Leica M11 / Summilux 35mm', location: 'Tokyo, Shinjuku',
    description: '深夜の新宿、喧騒が消えた一瞬の静寂を捉えた一枚。人工的な光と影のコントラストが都市の孤独を浮き彫りにする。'
  },
  { 
    id: 2, title: 'Morning Dew', category: 'Nature', imageColor: 'bg-stone-700', height: 'h-64',
    date: '2024.11', equipment: 'Sony α7R V / GM 24-70mm', location: 'Nagano, Karuizawa',
    description: '早朝の軽井沢。霧が晴れる瞬間の森の呼吸を表現。'
  },
  { 
    id: 3, title: 'Bridal Story', category: 'Portrait', imageColor: 'bg-slate-700', height: 'h-[500px]',
    date: '2025.02', equipment: 'Canon R5 / RF 85mm F1.2', location: 'Yokohama',
    description: '人生で最も輝く瞬間を、映画のワンシーンのように。'
  },
  { 
    id: 4, title: 'Neon Night', category: 'Cityscape', imageColor: 'bg-neutral-900', height: 'h-72',
    date: '2025.01', equipment: 'Leica M11 / Noctilux 50mm', location: 'Osaka, Dotonbori',
    description: '雨上がりの路面に反射するネオンサイン。色彩の洪水。'
  },
  { 
    id: 5, title: 'Pure White', category: 'Commercial', imageColor: 'bg-gray-600', height: 'h-80',
    date: '2024.12', equipment: 'Phase One XF', location: 'Studio A',
    description: '化粧品ブランドの広告ビジュアル。素材の質感を極限まで引き出すライティング。'
  },
  { 
    id: 6, title: 'Family Time', category: 'Portrait', imageColor: 'bg-zinc-600', height: 'h-64',
    date: '2025.05', equipment: 'Fujifilm GFX100S', location: 'Park Studio',
    description: '飾らない笑顔、自然な光の中で。'
  },
   { 
    id: 7, title: 'Forest Deep', category: 'Nature', imageColor: 'bg-emerald-900/40', height: 'h-[400px]',
    date: '2024.08', equipment: 'Sony α7R V', location: 'Yakushima',
    description: '太古の森、苔の緑が語りかける時間。'
  },
];

export const SERVICE_DATA: ServiceItem[] = [
  {
    title: 'Standard Plan',
    price: '¥30,000~',
    description: 'プロフィール写真、宣材写真、記念写真など。\n高品質なポートレートを手軽に。',
    features: ['撮影時間: 1時間', '納品枚数: 30カット', 'オンライン納品', 'レタッチ済み']
  },
  {
    title: 'Wedding / Event',
    price: '¥120,000~',
    description: '結婚式、パーティー、イベント撮影。\n物語性のあるドキュメンタリースタイルで。',
    features: ['撮影時間: 4時間〜', '納品枚数: 300カット〜', 'フォトブック作成可', '全データ補正']
  },
  {
    title: 'Commercial',
    price: 'Ask',
    description: '広告、商品、建築、ブランドビジュアル。\nディレクションから納品までトータルサポート。',
    features: ['事前打ち合わせ', 'モデル・スタジオ手配', '高度なレタッチ', '著作権譲渡可']
  }
];

export const FAQ_DATA: FaqItem[] = [
  { q: '納品までの期間はどのくらいですか？', a: '通常、撮影日から2週間程度いただいております。お急ぎの場合はオプションにて対応可能です。' },
  { q: '撮影場所の指定は可能ですか？', a: 'はい、可能です。東京都内であれば出張費は無料ですが、遠方の場合は別途交通費を頂戴しております。' },
  { q: '衣装やメイクの手配はできますか？', a: '提携しているスタイリスト、ヘアメイクアップアーティストをご紹介可能です（別途費用）。' },
  { q: '雨天の場合はどうなりますか？', a: '屋内の場合は決行いたします。屋外撮影の場合は、前日の天気予報で判断し、日程変更を無料で承ります。' }
];

