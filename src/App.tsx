import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Camera, Menu, X, Instagram, Twitter, Mail, MapPin, Map, ArrowRight, ChevronDown, Plus, Calendar } from 'lucide-react';
import * as THREE from 'three';

// --- Error Boundary ---
class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-8 text-center font-serif">
          <div>
            <h1 className="text-3xl mb-4">Something went wrong.</h1>
            <button onClick={() => window.location.reload()} className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Types ---
type Page = 'home' | 'works' | 'service' | 'news' | 'contact';
type WorkCategory = 'All' | 'Cityscape' | 'Nature' | 'Portrait' | 'Commercial';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  content: string;
}

interface WorkItem {
  id: number;
  title: string;
  category: WorkCategory;
  imageColor: string;
  height: string;
  date: string;
  equipment: string;
  location: string;
  description: string;
}

interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

// --- Data ---
const NEWS_DATA: NewsItem[] = [
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

const WORKS_DATA: WorkItem[] = [
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

const SERVICE_DATA: ServiceItem[] = [
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

const FAQ_DATA: FaqItem[] = [
  { q: '納品までの期間はどのくらいですか？', a: '通常、撮影日から2週間程度いただいております。お急ぎの場合はオプションにて対応可能です。' },
  { q: '撮影場所の指定は可能ですか？', a: 'はい、可能です。東京都内であれば出張費は無料ですが、遠方の場合は別途交通費を頂戴しております。' },
  { q: '衣装やメイクの手配はできますか？', a: '提携しているスタイリスト、ヘアメイクアップアーティストをご紹介可能です（別途費用）。' },
  { q: '雨天の場合はどうなりますか？', a: '屋内の場合は決行いたします。屋外撮影の場合は、前日の天気予報で判断し、日程変更を無料で承ります。' }
];

// --- Utility Functions for Safety ---

const safeNum = (val: number, fallback = 0) => {
  if (typeof val !== 'number' || isNaN(val) || !isFinite(val)) return fallback;
  return val;
};

// --- Utility Components ---

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: { x: number; y: number; z: number; size: number; speedX: number; speedY: number }[] = [];
    
    const resizeCanvas = () => {
      if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    const createParticles = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 20 : 40;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.5,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
        });
      }
    };
    const draw = () => {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX * p.z;
        p.y += p.speedY * p.z;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 150, 150, ${0.08 * p.z})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });
    resizeCanvas(); createParticles(); draw();
    return () => { window.removeEventListener('resize', resizeCanvas); cancelAnimationFrame(animationFrameId); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 mix-blend-screen" />;
};

// --- Three.js Aurora Implementation (Realism Focus) ---
const AuroraBackground = ({ scrollProgress }: { scrollProgress: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const uniformsRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);

  // Sync scroll progress with shader uniform
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uScroll.value = safeNum(scrollProgress);
    }
  }, [scrollProgress]);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Init Three.js ---
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    
    // Orthographic Camera for full-screen shader effect (simplifies UV mapping for background)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Shader for Realistic Aurora ---
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform float uScroll;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // 2D Simplex Noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Aurora function
      float aurora(vec2 uv, float time) {
        // Stretch noise on X to create vertical rays
        vec2 coord = uv;
        coord.x *= 0.3; // Broad horizontal variation
        
        // Add vertical wavy motion
        float n = snoise(vec2(coord.x * 20.0 + time * 0.1, coord.y * 0.5 - time * 0.05));
        
        // Add detail streaks (High frequency X, Low Y)
        float streaks = snoise(vec2(coord.x * 50.0 + time * 0.2, coord.y * 0.2));
        
        // Combine
        float combined = n * 0.6 + streaks * 0.4;
        
        // Sharpen to create rays
        float rays = smoothstep(0.0, 0.6, combined);
        
        // Vertical fade (bottom and top)
        float verticalFade = smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.6, uv.y);
        
        return rays * verticalFade;
      }

      void main() {
        vec2 uv = vUv;
        
        // Correct aspect ratio for noise to look consistent
        uv.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.2;
        
        // Layer 1
        float a1 = aurora(vec2(uv.x, uv.y + snoise(vec2(uv.x * 0.5, time*0.1))*0.2), time);
        // Layer 2 (Offset)
        float a2 = aurora(vec2(uv.x + 5.0, uv.y * 0.9 + 0.1), time * 0.8 + 10.0);
        
        float intensity = max(a1, a2);

        // Colors
        // Bright Green (Bottom) -> Deep Purple (Top)
        vec3 colBottom = vec3(0.1, 1.0, 0.5); // Neon Green
        vec3 colTop = vec3(0.5, 0.0, 1.0);    // Deep Purple
        
        // Vertical Color Gradient
        // Mix based on Y position mostly, but influenced by intensity for that "glow"
        vec3 baseColor = mix(colBottom, colTop, uv.y * 1.2 - 0.2);
        
        // Scroll Effect: Shift to Red
        vec3 colRed = vec3(1.0, 0.1, 0.1);
        float scrollMix = clamp(uScroll * 1.5, 0.0, 1.0);
        
        vec3 finalColor = mix(baseColor, colRed, scrollMix * 0.8); // Don't go fully red, keep some structure
        
        // Add white core to brightest parts
        finalColor += vec3(0.2) * smoothstep(0.5, 1.0, intensity);

        gl_FragColor = vec4(finalColor, intensity * 0.8);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
    };
    uniformsRef.current = uniforms;

    const geometry = new THREE.PlaneGeometry(2, 2); 
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Stars (Separate System)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 400;
    const posArray = new Float32Array(starCount * 3);
    for(let i=0; i<starCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 4; // Spread across view
        // Push stars back
        if (i % 3 === 2) posArray[i] = -1.0; 
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starMat = new THREE.PointsMaterial({ size: 0.005, color: 0xffffff, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 bg-black pointer-events-none" />;
};


const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);
  return (
    <>
      <div ref={cursorRef} className="fixed w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-exclusion" />
      <div ref={dotRef} className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
    </>
  );
};

// --- UI Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  return (
    <div 
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">{title}</h2>
    <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">{subtitle}</p>
  </div>
);

const TiltCard = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`transition-transform duration-300 ease-out transform-gpu ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

const Accordion = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left hover:text-white transition-colors group">
        <span className={`text-lg font-light ${isOpen ? 'text-white' : 'text-zinc-400'}`}>{q}</span>
        <Plus size={20} className={`text-zinc-600 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 text-sm leading-relaxed pr-8 pl-4 border-l border-zinc-800 ml-1">{a}</p>
      </div>
    </div>
  );
};

// --- Page Components ---

const Home = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrolled = -top;
      const viewportHeight = window.innerHeight;
      const totalScrollable = height - viewportHeight;
      
      if (totalScrollable <= 1) {
        setScrollProgress(0);
        return;
      }
      
      let progress = scrolled / totalScrollable;
      progress = safeNum(progress);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <AuroraBackground scrollProgress={scrollProgress} />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
           <div className="animate-fade-in-up mix-blend-difference">
             <p className="text-zinc-400 tracking-[0.6em] text-xs md:text-sm mb-8 uppercase">Photographer Portfolio</p>
             <h1 className="text-5xl md:text-8xl font-serif font-medium text-white mb-8 leading-tight drop-shadow-2xl">
              Capture<br />the Silence
            </h1>
            <div className="mt-12 animate-bounce text-zinc-500 text-[10px] tracking-widest uppercase flex flex-col items-center gap-2">
              Scroll
              <ChevronDown size={16} />
            </div>
           </div>
        </section>

        {/* Concepts - 縦並びで自然に読ませる */}
        <section className="w-full max-w-4xl mx-auto px-6 py-32 space-y-40">
          
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
            <div className="w-full md:w-1/2 text-right md:text-left">
               <span className="text-emerald-400/80 text-xs tracking-widest uppercase mb-4 block">01. Vision</span>
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">静寂が、<br/>音を奏でる。</h2>
               <p className="text-zinc-300 leading-loose font-light">
                 都市の喧騒がふと止む瞬間。森の霧が晴れる刹那。<br/>
                 目に見えない「気配」を写し撮ることで、<br/>
                 静止画の中に永遠の物語を閉じ込めます。
               </p>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-emerald-900/20 to-black border border-white/10 rounded-sm backdrop-blur-sm" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-fade-in-up">
            <div className="w-full md:w-1/2 text-left md:text-right">
               <span className="text-purple-400/80 text-xs tracking-widest uppercase mb-4 block">02. Light & Shadow</span>
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">光を編み、<br/>影を描く。</h2>
               <p className="text-zinc-300 leading-loose font-light">
                 写真は光の芸術ですが、その深みを作るのは常に影です。<br/>
                 オーロラのように揺らめく感情のグラデーションを、<br/>
                 繊細なライティングと構図で表現します。
               </p>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-gradient-to-bl from-purple-900/20 to-black border border-white/10 rounded-sm backdrop-blur-sm" />
          </div>

          <div className="flex flex-col items-center text-center py-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-widest">
              物語を、<br/>始めよう。
            </h2>
            <button onClick={() => onNavigate('works')} className="group relative overflow-hidden bg-white text-black px-12 py-4 text-sm tracking-[0.2em] transition-all duration-500 hover:scale-105">
              <span className="relative z-10">VIEW ALL WORKS</span>
              <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
          </div>

        </section>
      </div>
    </div>
  );
};

const Works = ({ onSelectWork }: { onSelectWork: (work: WorkItem) => void }) => {
  const [filter, setFilter] = useState<WorkCategory>('All');
  const filteredWorks = filter === 'All' ? WORKS_DATA : WORKS_DATA.filter(w => w.category === filter);

  return (
    <div className="py-20 px-6 container mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">Works</h2>
            <p className="text-zinc-500 text-sm tracking-[0.2em]">Selected Portfolio 2024-2025</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {['All', 'Portrait', 'Cityscape', 'Nature', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as WorkCategory)}
                className={`text-xs uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${filter === cat ? 'border-white text-white' : 'border-transparent text-zinc-600 hover:text-zinc-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredWorks.map((work, idx) => (
          <FadeIn key={work.id} delay={idx * 100} className="break-inside-avoid">
            <div onClick={() => onSelectWork(work)}>
              <TiltCard className="group cursor-pointer relative">
                <div className={`w-full ${work.height} ${work.imageColor} relative overflow-hidden rounded-sm`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-serif text-4xl opacity-20 group-hover:scale-110 transition-transform duration-700">
                    IMG
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs text-zinc-400 uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{work.category}</span>
                      <h3 className="text-xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.title}</h3>
                  </div>
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

const Service = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="py-20 px-6 container mx-auto max-w-5xl">
    <FadeIn>
      <SectionTitle title="Service" subtitle="撮影プラン・料金" />
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-6 mb-32">
      {SERVICE_DATA.map((service, idx) => (
        <FadeIn key={idx} delay={idx * 150} className="h-full">
          <div className="relative p-8 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col h-full group bg-zinc-900/30 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -z-10 group-hover:from-white/10 transition-colors" />
            <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
            <div className="text-2xl font-light text-zinc-200 mb-6">{service.price}</div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 whitespace-pre-line flex-grow">
              {service.description}
            </p>
            <ul className="space-y-3 pt-6 border-t border-zinc-800">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-zinc-500 text-xs flex items-center gap-2">
                  <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => onNavigate('contact')} className="mt-8 w-full py-3 border border-zinc-700 text-zinc-400 text-xs tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              BOOK NOW
            </button>
          </div>
        </FadeIn>
      ))}
    </div>
    
    <FadeIn delay={400}>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-serif text-white mb-8">FAQ</h3>
          <p className="text-zinc-500 text-sm mb-8">よくいただくご質問をまとめました。</p>
        </div>
        <div>
          {FAQ_DATA.map((faq, idx) => (
            <Accordion key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </FadeIn>
  </div>
);

const News = ({ onSelectNews }: { onSelectNews: (news: NewsItem) => void }) => (
  <div className="py-20 px-6 container mx-auto max-w-4xl">
    <FadeIn>
      <div className="flex items-end gap-6 mb-20 border-b border-zinc-800 pb-8">
        <h2 className="text-5xl font-serif text-white">News</h2>
        <span className="text-zinc-500 text-sm tracking-widest pb-2">/ ARCHIVE</span>
      </div>
    </FadeIn>

    <div className="space-y-0">
      {NEWS_DATA.map((news, i) => (
        <FadeIn key={news.id} delay={i * 100}>
          <div 
            onClick={() => onSelectNews(news)}
            className="group relative border-b border-zinc-800 py-10 cursor-pointer hover:bg-zinc-900/30 transition-colors duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 relative z-10 px-4">
              <div className="w-32 flex-shrink-0">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">{news.date}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] uppercase tracking-wider border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full group-hover:border-zinc-600 transition-colors">{news.category}</span>
                </div>
                <h3 className="text-2xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-300">{news.title}</h3>
                <p className="text-zinc-500 text-sm mt-4 line-clamp-2 md:w-2/3 group-hover:text-zinc-400 transition-colors">{news.content}</p>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="py-20 px-6 container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-2 gap-20">
      <FadeIn>
        <div>
          <h2 className="text-5xl font-serif text-white mb-8">Contact</h2>
          <p className="text-zinc-400 text-sm leading-loose mb-12">
            撮影のご依頼、お見積もり、その他ご質問など<br />
            お気軽にお問い合わせください。<br />
            3営業日以内に返信いたします。
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-zinc-400">
              <Mail className="text-zinc-600" />
              <span>contact@k-photo.com</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <Map className="text-zinc-600" />
              <span>Tokyo, Japan</span>
            </div>
            <div className="pt-8 flex gap-6">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="bg-zinc-900/20 p-8 md:p-12 border border-zinc-800">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text pointer-events-none">Name</label>
            </div>
            <div className="relative group">
              <input type="email" id="email" required className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer" placeholder=" " />
              <label htmlFor="email" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text pointer-events-none">Email</label>
            </div>
            <div className="relative group">
              <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text pointer-events-none">Message</label>
            </div>
            <button className="w-full bg-white text-black py-4 font-medium tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-[1.01] duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </FadeIn>
    </div>
  </div>
);

// --- Layout Components ---

const Header = ({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: Page[] = ['home', 'works', 'service', 'news', 'contact'];

  const NavLink = ({ page }: { page: Page }) => (
    <button
      onClick={() => { onNavigate(page); setIsMenuOpen(false); }}
      className={`text-sm uppercase tracking-widest hover:text-white transition-all duration-300 py-2 relative group
        ${currentPage === page ? 'text-white' : 'text-zinc-500'}
      `}
    >
      <span className="relative z-10">{page}</span>
      <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${currentPage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </button>
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => onNavigate('home')} className="text-xl font-serif font-bold text-white tracking-widest cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity z-50">
            <div className="border border-white p-1"><Camera size={16} /></div>
            <span>K.PHOTO</span>
          </div>
          <nav className="hidden md:flex gap-10">
            {navItems.map(page => <NavLink key={page} page={page} />)}
          </nav>
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navItems.map((p) => (
          <button key={p} onClick={() => { onNavigate(p); setIsMenuOpen(false); }} className="text-2xl font-serif uppercase tracking-widest text-white hover:text-zinc-400 transition-colors">
            {p}
          </button>
        ))}
      </div>
    </>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <footer className="py-12 border-t border-zinc-900 mt-20 bg-zinc-950 text-center relative z-10">
    <div className="container mx-auto px-6 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-8 opacity-50">
        <Camera size={16} className="text-zinc-500" />
        <span className="text-lg font-serif font-bold text-zinc-500 tracking-widest">K.PHOTO</span>
      </div>
      <div className="flex gap-8 mb-8 text-xs tracking-widest text-zinc-600">
        <button onClick={() => onNavigate('works')} className="hover:text-zinc-400 transition-colors">WORKS</button>
        <button onClick={() => onNavigate('service')} className="hover:text-zinc-400 transition-colors">SERVICE</button>
        <button onClick={() => onNavigate('contact')} className="hover:text-zinc-400 transition-colors">CONTACT</button>
      </div>
      <p className="text-zinc-700 text-[10px] tracking-wider">
        &copy; 2025 K.PHOTO PORTFOLIO. All Rights Reserved.
      </p>
    </div>
  </footer>
);

const WorkModal = ({ work, onClose }: { work: WorkItem | null; onClose: () => void }) => {
  if (!work) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-zinc-950/95 flex items-center justify-center p-4 md:p-12 animate-fade-in" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300"><X size={32} /></button>
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full h-full md:h-auto items-center" onClick={e => e.stopPropagation()}>
        <div className={`w-full md:w-2/3 h-[50vh] md:h-[80vh] ${work.imageColor} relative shadow-2xl overflow-hidden rounded-sm group`}>
            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-9xl">IMG</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="w-full md:w-1/3 text-white space-y-8 animate-fade-in-up">
          <div>
            <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2">{work.category}</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{work.title}</h2>
            <p className="text-zinc-400 leading-relaxed font-light">{work.description}</p>
          </div>
          <div className="border-t border-zinc-800 pt-8 space-y-4 text-sm font-mono text-zinc-500">
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Calendar size={14}/> Date</span> <span className="text-zinc-300">{work.date}</span></div>
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><Camera size={14}/> Gear</span> <span className="text-zinc-300">{work.equipment}</span></div>
             <div className="flex justify-between items-center"><span className="flex items-center gap-2"><MapPin size={14}/> Location</span> <span className="text-zinc-300">{work.location}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsModal = ({ news, onClose }: { news: NewsItem | null; onClose: () => void }) => {
  if (!news) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all animate-fade-in" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg p-8 rounded-sm relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><X /></button>
        <span className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded mb-4 inline-block">{news.category}</span>
        <div className="text-sm font-mono text-zinc-500 mb-2">{news.date}</div>
        <h3 className="text-2xl font-serif text-white mb-6">{news.title}</h3>
        <p className="text-zinc-300 text-sm leading-loose whitespace-pre-wrap">{news.content}</p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-white selection:text-black overflow-x-hidden">
        {/* Background is handled within Home component for better control, or globally if preferred */}
        {currentPage !== 'home' && <ParticleBackground />} 
        <CustomCursor />
        
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        <main className="pt-20 min-h-screen relative z-10">
          {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
          {currentPage === 'works' && <Works onSelectWork={setSelectedWork} />}
          {currentPage === 'service' && <Service onNavigate={setCurrentPage} />}
          {currentPage === 'news' && <News onSelectNews={setSelectedNews} />}
          {currentPage === 'contact' && <Contact />}
        </main>

        {currentPage !== 'home' && <Footer onNavigate={setCurrentPage} />}

        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />

        <style>{`
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
          .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
          .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
          .perspective-1000 { perspective: 1000px; }
          .transform-gpu { transform: translate3d(0,0,0); }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #09090b; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
        `}</style>
      </div>
    </ErrorBoundary>
  );
}
