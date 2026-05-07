import { ArrowRight, Clock, Instagram, Mail, MapPin } from 'lucide-react';
import { ABOUT_IMAGE } from '../../data';
import { Page } from '../../types';

const About = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="min-h-screen bg-[#f7f5f0] px-5 pb-24 pt-32 md:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
            About
          </p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            R.PHOTO
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
            川崎・横浜を拠点に活動するフォトグラファー。人物、風景、店舗、イベント、空撮など、用途に合わせた写真を制作しています。
          </p>
        </div>

        <div>
          <div className="overflow-hidden bg-stone-200">
            <img
              src={ABOUT_IMAGE}
              alt="撮影現場の雰囲気を伝える写真"
              className="h-auto w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <section className="mt-10 grid gap-8 border-b border-stone-200 pb-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
                Approach
              </p>
              <p className="text-sm leading-8 text-stone-700">
                写真を見る人に、場所の空気や人物の自然な表情が伝わることを大切にしています。派手な演出よりも、光、距離感、構図を整え、用途に合わせた写真を残します。
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
                対応ジャンル
              </p>
              <p className="text-sm leading-8 text-stone-700">
                プロフィール、宣材、店舗、イベント、地域プロモーション、空撮まで対応。個人・法人どちらの撮影もご相談いただけます。
              </p>
            </div>
          </section>

          <section className="grid gap-4 border-b border-stone-200 py-10 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                Base
              </p>
              <p className="inline-flex items-center gap-2 text-sm">
                <MapPin size={15} />
                Kawasaki / Yokohama
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                Contact
              </p>
              <a
                href="mailto:onodera00.biz@gmail.com"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">
                Social
              </p>
              <a
                href="https://www.instagram.com/d_ryo_photo?igsh=eGltZTJxZzIxNG9r&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Instagram size={15} />
                Instagram
              </a>
            </div>
          </section>

          <section className="mt-10 bg-white p-8 md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
              Message
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              ニーズに合わせた撮影プランを組み立てます。
            </h2>
            <p className="mt-5 text-sm leading-8 text-stone-600">
              Webサイト、SNS、プロフィール、記録用など、写真の使い道によって撮るべき内容は変わります。まずは目的や雰囲気を聞かせてください。
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-stone-500">
              <Clock size={15} />
              お問い合わせには通常2〜3日以内に返信します。
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="mt-7 inline-flex items-center gap-2 border border-stone-950 px-5 py-3 text-sm uppercase tracking-[0.2em] transition-colors hover:bg-stone-950 hover:text-white"
            >
              撮影を相談する
              <ArrowRight size={16} />
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default About;
