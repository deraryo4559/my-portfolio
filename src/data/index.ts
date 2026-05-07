import { FaqItem, FlowItem, ServiceItem, WorkItem } from '../types';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const portfolioImage = (id: number) => asset(`images/portfolio/${id}.jpg`);

export const HERO_IMAGE = portfolioImage(18);
export const ABOUT_IMAGE = asset('images/portfolio/about.jpg');
export const CONTACT_IMAGE = portfolioImage(24);

export const WORKS_DATA: WorkItem[] = [
  {
    id: 18,
    title: 'Fuji in Blue Haze',
    category: 'Landscape',
    image: portfolioImage(18),
    featured: true,
    featuredSize: 'large',
    orientation: 'wide',
    date: '2025',
    location: 'Yamanashi',
    description:
      '富士山と街、塔のシルエットを重ねた風景写真。曇天の青い空気と、春の淡い色を活かして撮影しています。',
  },
  {
    id: 1,
    title: 'Portrait in Window Light',
    category: 'Portrait',
    image: portfolioImage(1),
    featured: true,
    orientation: 'landscape',
    date: '2025',
    location: 'Tokyo',
    description:
      '強い光と影を活かしたポートレート。自然な表情と、印象に残る視線を大切にした一枚です。',
  },
  {
    id: 21,
    title: 'Bridge Over Blue Water',
    category: 'Landscape',
    image: portfolioImage(21),
    featured: true,
    orientation: 'landscape',
    date: '2025',
    location: 'Setouchi',
    description:
      '海と橋のスケールを広く切り取った風景写真。観光、地域プロモーション、Webキービジュアルを想定した構図です。',
  },
  {
    id: 28,
    title: 'Winter Night Gathering',
    category: 'Event',
    image: portfolioImage(28),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Tokyo',
    description:
      '夜の街でのグループ撮影。イベントや記念日の空気感を、明るさと温度が伝わる形で残します。',
  },
  {
    id: 35,
    title: 'Framed Interior',
    category: 'Commercial',
    image: portfolioImage(35),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Tokyo',
    description:
      '店舗や空間の雰囲気を伝えるための一枚。内装、飲食店、ブランド紹介の素材として使いやすい写真です。',
  },
  {
    id: 23,
    title: 'Morning Route',
    category: 'Aerial',
    image: portfolioImage(23),
    featured: true,
    orientation: 'portrait',
    date: '2025',
    location: 'Japan',
    description:
      '高い視点から朝の光を捉えた写真。地上とは違う角度で、場所の広がりと道の流れを見せます。',
  },
  {
    id: 12,
    title: 'Mt. Fuji and White Waves',
    category: 'Landscape',
    image: portfolioImage(12),
    featured: true,
    featuredSize: 'large',
    orientation: 'landscape',
    date: '2024',
    location: 'Shizuoka',
    description:
      '波と富士山を同時に写した風景写真。自然の動きと遠景の静けさを対比させています。',
  },
  {
    id: 31,
    title: 'Tokyo Station Portrait',
    category: 'Portrait',
    image: portfolioImage(31),
    featured: true,
    orientation: 'portrait',
    date: '2025',
    location: 'Tokyo',
    description:
      '都市の背景を活かしたポートレート。プロフィールや宣材に使いやすい、場所の個性が伝わる撮影です。',
  },
  {
    id: 30,
    title: 'Firelight Event',
    category: 'Event',
    image: portfolioImage(30),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Japan',
    description:
      '炎と人の距離感を記録したイベント写真。暗い環境でも場の熱量が伝わるように撮影しています。',
  },
  {
    id: 25,
    title: 'Glass Facade',
    category: 'Commercial',
    image: portfolioImage(25),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Tokyo',
    description:
      '建築や施設の外観撮影。反射や構造を活かして、施設の印象を整えて伝えます。',
  },
  {
    id: 36,
    title: 'Coastal Portrait',
    category: 'Portrait',
    image: portfolioImage(36),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Kanagawa',
    description:
      '海辺で撮影した自然なポートレート。人物と風景の両方を活かした撮影に向いています。',
  },
  {
    id: 14,
    title: 'Crossing Geometry',
    category: 'Aerial',
    image: portfolioImage(14),
    featured: true,
    orientation: 'landscape',
    date: '2024',
    location: 'Tokyo',
    description:
      '都市を上から見たグラフィカルな一枚。人の流れと街の形を、俯瞰の視点で整理しています。',
  },
  {
    id: 2,
    title: 'Soft Outdoor Portrait',
    category: 'Portrait',
    image: portfolioImage(2),
    orientation: 'portrait',
    date: '2024',
    location: 'Tokyo',
    description:
      'やわらかい自然光で撮影したポートレート。SNSやプロフィール用途に適した雰囲気です。',
  },
  {
    id: 4,
    title: 'Street Portrait',
    category: 'Portrait',
    image: portfolioImage(4),
    orientation: 'portrait',
    date: '2024',
    location: 'Tokyo',
    description:
      '街中でのスナップポートレート。自然体の表情とロケーションの温度を組み合わせます。',
  },
  {
    id: 33,
    title: 'Field Session',
    category: 'Portrait',
    image: portfolioImage(33),
    orientation: 'portrait',
    date: '2024',
    location: 'Japan',
    description:
      '屋外の空気感を活かした人物撮影。風景に人物をなじませた自然な見せ方です。',
  },
  {
    id: 34,
    title: 'Sunset Silhouette',
    category: 'Portrait',
    image: portfolioImage(34),
    orientation: 'portrait',
    date: '2024',
    location: 'Kanagawa',
    description:
      '夕暮れの逆光を使ったシルエット。個人作品やビジュアル制作に向いた印象的なカットです。',
  },
  {
    id: 5,
    title: 'Waterfall Spectrum',
    category: 'Landscape',
    image: portfolioImage(5),
    orientation: 'portrait',
    date: '2024',
    location: 'Japan',
    description:
      '滝と虹を捉えた風景写真。自然の色と水の動きが伝わる一枚です。',
  },
  {
    id: 7,
    title: 'Spring Color',
    category: 'Landscape',
    image: portfolioImage(7),
    orientation: 'portrait',
    date: '2024',
    location: 'Japan',
    description:
      '春の花を前景にした風景写真。季節感を伝える観光、地域素材にも使いやすい構図です。',
  },
  {
    id: 19,
    title: 'Wisteria Night',
    category: 'Landscape',
    image: portfolioImage(19),
    orientation: 'landscape',
    date: '2024',
    location: 'Japan',
    description:
      '夜の藤棚を撮影した作品。暗い背景に浮かぶ色を丁寧に残しています。',
  },
  {
    id: 20,
    title: 'Kyoto Night Street',
    category: 'Landscape',
    image: portfolioImage(20),
    orientation: 'landscape',
    date: '2024',
    location: 'Kyoto',
    description:
      '夜の街並みを撮影した風景写真。旅先の記憶や地域の空気感を伝えるカットです。',
  },
  {
    id: 16,
    title: 'Wind Farm Sunset',
    category: 'Aerial',
    image: portfolioImage(16),
    orientation: 'landscape',
    date: '2024',
    location: 'Japan',
    description:
      '夕景と風車を組み合わせたスケール感のある写真。施設、自然、産業の印象づくりに適しています。',
  },
  {
    id: 17,
    title: 'Night Signage',
    category: 'Commercial',
    image: portfolioImage(17),
    orientation: 'landscape',
    date: '2024',
    location: 'Tokyo',
    description:
      '夜の看板と街の質感を切り取った写真。店舗紹介や街のイメージカットに向いています。',
  },
  {
    id: 24,
    title: 'Sea View Frame',
    category: 'Commercial',
    image: portfolioImage(24),
    orientation: 'portrait',
    date: '2024',
    location: 'Kanagawa',
    description:
      '窓や建築のフレーム越しに海を見せた写真。宿泊施設、店舗、観光素材に使いやすい一枚です。',
  },
  {
    id: 29,
    title: 'Travel Moment',
    category: 'Event',
    image: portfolioImage(29),
    orientation: 'landscape',
    date: '2024',
    location: 'Japan',
    description:
      '旅先での体験や場の雰囲気を残した写真。イベント記録や観光コンテンツにも展開できます。',
  },
];

export const SERVICE_DATA: ServiceItem[] = [
  {
    title: 'Portrait',
    label: 'プロフィール・宣材',
    price: '30,000円から',
    description:
      'SNS、Web、プロフィール、アーティスト写真など、目的に合わせて自然な表情を撮影します。',
    uses: ['プロフィール写真', '宣材写真', 'SNSアイコン', 'アーティスト写真'],
  },
  {
    title: 'Commercial',
    label: '店舗・商品・ブランド',
    price: '要相談',
    description:
      '店舗、商品、サービス、採用、WebサイトやSNSで使うビジュアル素材を制作します。',
    uses: ['店舗撮影', '商品撮影', 'ブランド素材', 'Web/SNS素材'],
  },
  {
    title: 'Event',
    label: 'イベント・記録',
    price: '50,000円から',
    description:
      'イベント、展示、ライブ、記念日など、当日の空気感と人の表情を記録します。',
    uses: ['イベント記録', 'ライブ撮影', '展示記録', '記念日撮影'],
  },
  {
    title: 'Aerial',
    label: '空撮・俯瞰撮影',
    price: '要相談',
    description:
      '風景、施設、観光、プロモーション向けに、地上撮影と組み合わせた空撮をご提案します。撮影場所の許可・法令確認が必要なため、事前にご相談ください。',
    uses: ['風景空撮', '施設紹介', '観光素材', 'プロモーション'],
  },
];

export const FLOW_DATA: FlowItem[] = [
  {
    step: '01',
    title: 'Contact',
    description: '撮影内容が固まっていない段階でも、お気軽にご相談ください。',
  },
  {
    step: '02',
    title: 'Estimate',
    description: '用途、場所、納品点数を確認し、撮影内容とお見積もりを整理します。',
  },
  {
    step: '03',
    title: 'Schedule',
    description: '撮影日程、集合場所、天候や許可の確認を行います。',
  },
  {
    step: '04',
    title: 'Shooting',
    description: '当日の流れに合わせて、必要なカットを丁寧に撮影します。',
  },
  {
    step: '05',
    title: 'Retouch',
    description: 'セレクト後、用途に合わせた色調整と基本レタッチを行います。',
  },
  {
    step: '06',
    title: 'Delivery',
    description: 'オンラインで納品します。納期は内容により事前にお伝えします。',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    q: '撮影内容がまだ曖昧でも相談できますか？',
    a: 'はい。使用目的や雰囲気を伺いながら、撮影内容や必要なカットをご提案します。',
  },
  {
    q: '川崎・横浜以外でも撮影できますか？',
    a: '可能です。場所により交通費や出張費が発生するため、事前にお見積もりします。',
  },
  {
    q: '納品まではどのくらいかかりますか？',
    a: '内容にもよりますが、通常は撮影後1から2週間程度を目安にしています。',
  },
  {
    q: '空撮はどこでも依頼できますか？',
    a: '空撮は法令、場所の許可、天候、安全確認が必要です。撮影可否を確認したうえでご提案します。',
  },
];
