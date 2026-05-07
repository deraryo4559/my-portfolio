import { Instagram, Mail } from 'lucide-react';
import { Page } from '../../types';

const Footer = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <footer className="relative z-10 border-t border-stone-200 bg-[#f7f5f0] px-5 py-12 text-stone-950 md:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="mb-5 text-left text-xl font-semibold tracking-[0.28em] transition-opacity hover:opacity-70"
        >
          R.PHOTO
        </button>
        <p className="max-w-md text-sm leading-7 text-stone-600">
          川崎・横浜を拠点に、人物・風景・店舗・イベント・空撮まで対応。
          用途に合わせて、写真の見せ方から一緒に整理します。
        </p>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">
          Pages
        </p>
        <div className="grid gap-3 text-sm">
          <button type="button" onClick={() => onNavigate('works')} className="text-left hover:underline">
            Works
          </button>
          <button type="button" onClick={() => onNavigate('service')} className="text-left hover:underline">
            Services
          </button>
          <button type="button" onClick={() => onNavigate('about')} className="text-left hover:underline">
            About
          </button>
          <button type="button" onClick={() => onNavigate('contact')} className="text-left hover:underline">
            Contact
          </button>
        </div>
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">
          Contact
        </p>
        <div className="grid gap-3 text-sm">
          <a
            href="mailto:onodera00.biz@gmail.com"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Mail size={15} />
            onodera00.biz@gmail.com
          </a>
          <a
            href="https://www.instagram.com/d_ryo_photo?igsh=eGltZTJxZzIxNG9r&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Instagram size={15} />
            Instagram
          </a>
          <span className="text-stone-500">通常2〜3日以内に返信します</span>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
      <span>© 2026 R.PHOTO. All Rights Reserved.</span>
      <span>Photographer based in Kawasaki / Yokohama, Japan.</span>
    </div>
  </footer>
);

export default Footer;
