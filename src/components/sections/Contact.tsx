import { FormEvent, useState } from 'react';
import { Check, Clock, Instagram, Mail, MapPin } from 'lucide-react';
import { CONTACT_IMAGE } from '../../data';

const fieldClass =
  'w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-950 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-950';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const genre = String(formData.get('genre') ?? '');
    const dateLocation = String(formData.get('dateLocation') ?? '');
    const budget = String(formData.get('budget') ?? '');
    const message = String(formData.get('message') ?? '');

    const composedMessage = [
      `撮影ジャンル: ${genre}`,
      `希望日時・場所: ${dateLocation || '未定'}`,
      `予算感: ${budget || '未定'}`,
      '',
      message,
    ].join('\n');

    const params = new URLSearchParams();
    params.append('entry.92562121', name);
    params.append('entry.22789510', email);
    params.append('entry.1257514426', phone || '未入力');
    params.append('entry.1862121208', 'メール');
    params.append('entry.1607160016', genre);
    params.append('entry.1236488825', composedMessage);

    try {
      await fetch(form.action, {
        method: 'POST',
        body: params,
        mode: 'no-cors',
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      window.alert('送信に失敗しました。時間をおいてもう一度お試しください。');
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-5 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">
              Contact
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              お問い合わせフォーム
            </h1>
          </div>
          <p className="text-sm leading-7 text-stone-600">
            撮影内容が固まっていない段階でもご相談ください。目的や使用媒体に合わせて、ニーズに合う撮影プランをご提案します。
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSfyXDmsjYkZDrut-Nylux9K1LZ7wYPuUzuz61kRpGnKyCWEgQ/formResponse"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-10"
          >
            {submitted && (
              <div className="mb-8 flex items-start gap-3 border border-stone-200 bg-[#f7f5f0] p-4 text-sm text-stone-700">
                <Check size={18} className="mt-0.5" />
                <p>
                  送信しました。内容を確認のうえ、通常2から3日以内にご連絡します。
                </p>
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Name
                </span>
                <input className={fieldClass} name="name" type="text" required />
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Email
                </span>
                <input className={fieldClass} name="email" type="email" required />
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Phone
                </span>
                <input className={fieldClass} name="phone" type="tel" />
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Genre
                </span>
                <select className={fieldClass} name="genre" required defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="Portrait（人物・プロフィール）">
                    Portrait（人物・プロフィール）
                  </option>
                  <option value="Commercial（店舗・商品・ブランド）">
                    Commercial（店舗・商品・ブランド）
                  </option>
                  <option value="Event（イベント・記録）">
                    Event（イベント・記録）
                  </option>
                  <option value="Aerial / Drone（空撮）">
                    Aerial / Drone（空撮）
                  </option>
                  <option value="Landscape / Print（風景・作品）">
                    Landscape / Print（風景・作品）
                  </option>
                  <option value="Other（その他）">Other（その他）</option>
                </select>
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Date / Location
                </span>
                <input
                  className={fieldClass}
                  name="dateLocation"
                  type="text"
                  placeholder="例: 6月上旬 / 川崎・横浜"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Budget
                </span>
                <input
                  className={fieldClass}
                  name="budget"
                  type="text"
                  placeholder="例: 3万円から5万円"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Message
              </span>
              <textarea
                className={`${fieldClass} min-h-44 resize-y`}
                name="message"
                required
                placeholder="撮影したい内容、使用目的、イメージなどをご記入ください。"
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full bg-stone-950 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-stone-800"
            >
              Send Message
            </button>
          </form>

          <aside className="grid gap-6">
            <div className="border border-stone-200 bg-white p-6">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-stone-500">
                How to Order
              </p>
              <ol className="grid gap-4 text-sm text-stone-700">
                <li>
                  <span className="mb-1 block font-serif text-xl text-stone-950">
                    01. フォームまたはメールで相談
                  </span>
                  撮影したい内容、用途、希望日、場所が分かる範囲でお送りください。
                </li>
                <li>
                  <span className="mb-1 block font-serif text-xl text-stone-950">
                    02. 内容確認・撮影プランの提案
                  </span>
                  必要なカット、撮影時間、料金目安、日程を一緒に整理します。
                </li>
                <li>
                  <span className="mb-1 block font-serif text-xl text-stone-950">
                    03. 撮影・レタッチ・納品
                  </span>
                  撮影後、用途に合わせて色調整を行い、オンラインで納品します。
                </li>
              </ol>
            </div>

            <div className="overflow-hidden bg-stone-200">
              <img
                src={CONTACT_IMAGE}
                alt="海を望む窓辺の写真"
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="border border-stone-200 bg-white p-6">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-stone-500">
                Direct Contact
              </p>
              <div className="grid gap-4 text-sm">
                <a
                  href="mailto:onodera00.biz@gmail.com"
                  className="inline-flex items-center gap-3 hover:underline"
                >
                  <Mail size={16} />
                  onodera00.biz@gmail.com
                </a>
                <p className="inline-flex items-center gap-3 text-stone-600">
                  <MapPin size={16} />
                  Kawasaki / Yokohama
                </p>
                <a
                  href="https://www.instagram.com/d_ryo_photo?igsh=eGltZTJxZzIxNG9r&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:underline"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <p className="inline-flex items-center gap-3 text-stone-600">
                  <Clock size={16} />
                  通常2〜3日以内にご返信します
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
