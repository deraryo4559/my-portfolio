import { NewsItem, WorkItem, ServiceItem, FaqItem } from "../types";

// Images
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/16.jpg";
import img17 from "../images/17.jpg";
import img18 from "../images/18.jpg";
import img19 from "../images/19.jpg";
import img20 from "../images/20.jpg";
import img21 from "../images/21.jpg";
import img22 from "../images/22.jpg";
import img23 from "../images/23.jpg";
import img24 from "../images/24.jpg";
import img25 from "../images/25.jpg";
import img26 from "../images/26.jpg";
import img27 from "../images/27.jpg";
import img28 from "../images/28.jpg";
import img29 from "../images/29.jpg";
import img30 from "../images/30.jpg";
import img31 from "../images/31.jpg";
import img32 from "../images/32.jpg";
import img33 from "../images/33.jpg";
import img34 from "../images/34.jpg";
import img35 from "../images/35.jpg";
import img36 from "../images/36.jpg";

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: "2025.11.24",
    category: "Event",
    title: "個展「静寂の音」開催のお知らせ",
    content:
      "東京・青山のギャラリーにて、3年ぶりとなる個展を開催いたします。今回は「都市の静寂」をテーマに撮り下ろした新作20点を展示します。\n\n期間：2025年12月1日〜12月15日\n場所：青山Blue Gallery",
  },
  {
    id: 2,
    date: "2025.10.15",
    category: "Work",
    title: "雑誌「Life & Light」11月号 表紙撮影",
    content:
      "光の表現について特集された今月号にて、表紙写真と巻頭インタビューを担当させていただきました。全国の書店にて発売中です。",
  },
  {
    id: 3,
    date: "2025.09.01",
    category: "Info",
    title: "Webサイトリニューアル",
    content:
      "より作品の世界観をお伝えできるよう、ポートフォリオサイトを一新いたしました。",
  },
];

export const WORKS_DATA: WorkItem[] = [
  {
    id: 1,
    title: "Ethereal Dawn",
    category: "Nature",
    image: img1,
    height: "h-96",
    date: "2025.04",
    equipment: "LUMIX S5",
    location: "Nagano, Japan",
    description:
      "雲海の上、世界が目覚める瞬間。黄金色の光が霧を染め上げ、静寂と躍動が交差する。ドローンによる高度150mからの視点は、地上では決して見ることのできない地球の鼓動を捉えている。光の階調（グラデーション）を最大限に残すため、早朝のマジックアワーに撮影。",
  },
  {
    id: 2,
    title: "秋風とマスク越しの瞳",
    category: "Portrait",
    image: img2,
    height: "h-64",
    date: "2024.11",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "秋色に染まった木々を背景に、ふと振り返った女性を捉えています。白いマスクをしていても、その澄んだ瞳からは穏やかな表情が伝わってきます。柔らかな自然光が髪や肩を包み込み、特定の時代の空気感と、季節の移ろいを感じさせる静かなポートレートです。",
  },
  {
    id: 3,
    title: "Silent Portrait",
    category: "Portrait",
    image: img3,
    height: "h-[500px]",
    date: "2025.02",
    equipment: "LUMIX S5",
    location: "Kyoto",
    description:
      "被写体の内面にある静けさを引き出す。余計な演出を排し、自然光のみで撮影。瞳の奥にある物語を想像させるような、普遍的な強さを持つポートレート。背景のボケ味（Bokhe）が、被写体の存在感をより一層際立たせている。",
  },
  {
    id: 4,
    title: "Neon Reflections",
    category: "Cityscape",
    image: img4,
    height: "h-72",
    date: "2025.01",
    equipment: "LUMIX S5",
    location: "Tokyo, Shibuya",
    description:
      "雨上がりの夜、ネオンサインが路面に反射する瞬間を捉えた。水たまりが鏡となり、現実と虚像が交差する。都市の喧騒が、一瞬の静けさに包まれる。",
  },
  {
    id: 5,
    title: "Urban Geometry",
    category: "Cityscape",
    image: img5,
    height: "h-80",
    date: "2024.12",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "建築物の幾何学的な美しさを、ドローンによる俯瞰視点で表現。直線と曲線が織りなす都市のリズムを、光と影のコントラストで強調している。",
  },
  {
    id: 6,
    title: "Spring Blossoms",
    category: "Nature",
    image: img6,
    height: "h-64",
    date: "2025.05",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "桜の季節、満開の花びらが舞い散る瞬間。柔らかなピンクと青空のコントラストが、春の喜びを表現している。",
  },
  {
    id: 7,
    title: "春色の共演",
    category: "Nature",
    image: img7,
    height: "h-[400px]",
    date: "2024.08",
    equipment: "LUMIX S5",
    location: "Shizuoka",
    description:
      "鮮やかなピンク色の河津桜（または早咲きの桜）と、手前の黄色い菜の花が織りなす春の風景です。前ボケに使われた黄色の花が写真に奥行きを与え、青空とのコントラストも相まって、視界いっぱいに春の喜びが広がるような、明るく華やかな一枚です。",
  },
  {
    id: 8,
    title: "岩場の特等席",
    category: "Nature",
    image: img8,
    height: "h-80",
    date: "2024.10",
    equipment: "LUMIX S5",
    location: "Seaside",
    description:
      "海辺と思われる岩場で、気持ちよさそうに体を伸ばしている猫の写真です。背景のボケた青色が海や空の広がりを連想させ、ザラついた岩の質感と猫の毛並みの柔らかさの対比が面白い一枚。猫のリラックスした様子から、穏やかな午後の時間の流れを感じます。",
  },
  {
    id: 9,
    title: "海辺の指定席",
    category: "Nature",
    image: img9,
    height: "h-64",
    date: "2024.09",
    equipment: "LUMIX S5",
    location: "Seaside",
    description:
      "海辺の岩場でくつろぐ猫たちです。手前の猫の凛とした横顔にピントを合わせつつ、背景にボケたもう1匹を配置することで、彼らの関係性やその場の空間の広がりを感じさせます。日向ぼっこの暖かさと潮風の香り、そして猫たちの自由な時間が流れる癒やしの一枚です。",
  },
  {
    id: 10,
    title: "都市の幾何学",
    category: "Cityscape",
    image: img10,
    height: "h-96",
    date: "2025.03",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "高層ビル群が織りなす幾何学的なパターン。ドローンによる真上からの視点で、都市の構造美を捉えている。",
  },
  {
    id: 11,
    title: "Sunset Over City",
    category: "Cityscape",
    image: img11,
    height: "h-[500px]",
    date: "2024.07",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "夕暮れ時の都市を、ドローンで撮影。オレンジ色の光がビルを染め上げ、一日の終わりを告げる美しい瞬間。",
  },
  {
    id: 12,
    title: "Mountain Vista",
    category: "Nature",
    image: img12,
    height: "h-72",
    date: "2024.06",
    equipment: "LUMIX S5",
    location: "Nagano",
    description:
      "山々が連なる壮大な風景。雲が山の稜線を撫でるように流れ、自然の雄大さを表現している。",
  },
  {
    id: 13,
    title: "Portrait in Light",
    category: "Portrait",
    image: img13,
    height: "h-80",
    date: "2025.01",
    equipment: "LUMIX S5",
    location: "Studio",
    description:
      "窓からの自然光を活かしたポートレート。柔らかな光が被写体の表情を優しく包み込んでいる。",
  },
  {
    id: 14,
    title: "Urban Night",
    category: "Cityscape",
    image: img14,
    height: "h-64",
    date: "2024.12",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "夜の都市を、ドローンで撮影。ネオンサインが織りなす光のパターンが、都市の生命力を表現している。",
  },
  {
    id: 15,
    title: "Forest Path",
    category: "Nature",
    image: img15,
    height: "h-[400px]",
    date: "2024.05",
    equipment: "LUMIX S5",
    location: "Yamanashi",
    description:
      "森の中の小道を、低いアングルから撮影。木漏れ日が道を照らし、神秘的な雰囲気を醸し出している。",
  },
  {
    id: 16,
    title: "Commercial Product",
    category: "Commercial",
    image: img16,
    height: "h-96",
    date: "2024.11",
    equipment: "LUMIX S5",
    location: "Studio",
    description:
      "商品撮影。ライティングと構図で、製品の質感と美しさを最大限に引き出している。",
  },
  {
    id: 17,
    title: "Aerial View",
    category: "Cityscape",
    image: img17,
    height: "h-72",
    date: "2025.02",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "ドローンによる空撮。都市の構造と自然が織りなす、独特のパターンを捉えている。",
  },
  {
    id: 18,
    title: "Nature Portrait",
    category: "Portrait",
    image: img18,
    height: "h-80",
    date: "2024.10",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description:
      "自然の中でのポートレート。背景の自然と被写体が調和し、自然な美しさを表現している。",
  },
  {
    id: 19,
    title: "City Lights",
    category: "Cityscape",
    image: img19,
    height: "h-64",
    date: "2024.09",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "夜の都市の光。ドローンによる俯瞰視点で、都市のエネルギーを捉えている。",
  },
  {
    id: 20,
    title: "Mountain Landscape",
    category: "Nature",
    image: img20,
    height: "h-[500px]",
    date: "2024.08",
    equipment: "LUMIX S5",
    location: "Nagano",
    description:
      "山の風景を、ドローンで撮影。雲海と山々が織りなす、壮大な自然の美しさ。",
  },
  {
    id: 21,
    title: "Portrait Session",
    category: "Portrait",
    image: img21,
    height: "h-96",
    date: "2025.03",
    equipment: "LUMIX S5",
    location: "Studio",
    description:
      "スタジオでのポートレート撮影。ライティングとポージングで、被写体の魅力を引き出している。",
  },
  {
    id: 22,
    title: "Urban Architecture",
    category: "Cityscape",
    image: img22,
    height: "h-72",
    date: "2024.07",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description: "建築物の美しさを、ドローンによる独特のアングルで捉えている。",
  },
  {
    id: 23,
    title: "Nature Detail",
    category: "Nature",
    image: img23,
    height: "h-80",
    date: "2024.06",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description:
      "自然の細部を捉えた一枚。光と影が織りなす、繊細な美しさを表現している。",
  },
  {
    id: 24,
    title: "Commercial Work",
    category: "Commercial",
    image: img24,
    height: "h-64",
    date: "2024.05",
    equipment: "LUMIX S5",
    location: "Studio",
    description: "商業撮影。製品の特徴を最大限に活かすライティングと構図。",
  },
  {
    id: 25,
    title: "Aerial Nature",
    category: "Nature",
    image: img25,
    height: "h-[400px]",
    date: "2025.01",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description:
      "ドローンによる自然の空撮。地上からは見えない、自然のパターンを捉えている。",
  },
  {
    id: 26,
    title: "City Portrait",
    category: "Portrait",
    image: img26,
    height: "h-96",
    date: "2024.12",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "都市を背景にしたポートレート。都市のエネルギーと被写体の個性が調和している。",
  },
  {
    id: 27,
    title: "Urban Pattern",
    category: "Cityscape",
    image: img27,
    height: "h-72",
    date: "2024.11",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "都市のパターンを、ドローンによる俯瞰視点で捉えている。幾何学的な美しさが際立つ。",
  },
  {
    id: 28,
    title: "Nature Light",
    category: "Nature",
    image: img28,
    height: "h-80",
    date: "2024.10",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description:
      "自然光を活かした風景写真。時間と共に変化する光の美しさを捉えている。",
  },
  {
    id: 29,
    title: "Portrait Light",
    category: "Portrait",
    image: img29,
    height: "h-64",
    date: "2024.09",
    equipment: "LUMIX S5",
    location: "Studio",
    description:
      "光を活かしたポートレート。被写体の表情を、優しい光で包み込んでいる。",
  },
  {
    id: 30,
    title: "Commercial Product 2",
    category: "Commercial",
    image: img30,
    height: "h-[500px]",
    date: "2024.08",
    equipment: "LUMIX S5",
    location: "Studio",
    description: "商品撮影。製品の質感と機能性を、視覚的に表現している。",
  },
  {
    id: 31,
    title: "Aerial City",
    category: "Cityscape",
    image: img31,
    height: "h-96",
    date: "2025.02",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "ドローンによる都市の空撮。都市の規模と構造を、一望できる視点で捉えている。",
  },
  {
    id: 32,
    title: "Nature Scene",
    category: "Nature",
    image: img32,
    height: "h-72",
    date: "2024.07",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description:
      "自然の風景を、ドローンで撮影。地上からは見えない、自然の広がりを表現している。",
  },
  {
    id: 33,
    title: "Portrait Natural",
    category: "Portrait",
    image: img33,
    height: "h-80",
    date: "2024.06",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description: "自然の中でのポートレート。自然な表情と環境が調和した一枚。",
  },
  {
    id: 34,
    title: "Urban Detail",
    category: "Cityscape",
    image: img34,
    height: "h-64",
    date: "2024.05",
    equipment: "LUMIX S5",
    location: "Tokyo",
    description:
      "都市の細部を捉えた一枚。日常の中にある、美しい瞬間を切り取っている。",
  },
  {
    id: 35,
    title: "Commercial Brand",
    category: "Commercial",
    image: img35,
    height: "h-[400px]",
    date: "2025.01",
    equipment: "LUMIX S5",
    location: "Studio",
    description:
      "ブランドビジュアルの撮影。ブランドの世界観を、視覚的に表現している。",
  },
  {
    id: 36,
    title: "Final Work",
    category: "Nature",
    image: img36,
    height: "h-96",
    date: "2024.04",
    equipment: "LUMIX S5",
    location: "Outdoor",
    description: "自然の美しさを、ドローンによる独特の視点で捉えた最終作品。",
  },
];

export const SERVICE_DATA: ServiceItem[] = [
  {
    title: "Standard Plan",
    price: "¥30,000~",
    description:
      "プロフィール写真、宣材写真、記念写真など。\n高品質なポートレートを手軽に。",
    features: [
      "撮影時間: 1時間",
      "納品枚数: 30カット",
      "オンライン納品",
      "レタッチ済み",
    ],
  },
  {
    title: "Wedding / Event",
    price: "¥120,000~",
    description:
      "結婚式、パーティー、イベント撮影。\n物語性のあるドキュメンタリースタイルで。",
    features: [
      "撮影時間: 4時間〜",
      "納品枚数: 300カット〜",
      "フォトブック作成可",
      "全データ補正",
    ],
  },
  {
    title: "Commercial",
    price: "Ask",
    description:
      "広告、商品、建築、ブランドビジュアル。\nディレクションから納品までトータルサポート。",
    features: [
      "事前打ち合わせ",
      "モデル・スタジオ手配",
      "高度なレタッチ",
      "著作権譲渡可",
    ],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    q: "納品までの期間はどのくらいですか？",
    a: "通常、撮影日から2週間程度いただいております。お急ぎの場合はオプションにて対応可能です。",
  },
  {
    q: "撮影場所の指定は可能ですか？",
    a: "はい、可能です。東京都内であれば出張費は無料ですが、遠方の場合は別途交通費を頂戴しております。",
  },
  {
    q: "衣装やメイクの手配はできますか？",
    a: "提携しているスタイリスト、ヘアメイクアップアーティストをご紹介可能です（別途費用）。",
  },
  {
    q: "雨天の場合はどうなりますか？",
    a: "屋内の場合は決行いたします。屋外撮影の場合は、前日の天気予報で判断し、日程変更を無料で承ります。",
  },
];
