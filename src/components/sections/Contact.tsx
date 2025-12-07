import { useState, useRef } from 'react';
import { Mail, Map, Instagram, Twitter, Check } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Construct URLSearchParams for Google Forms submission
    const params = new URLSearchParams();
    params.append('entry.92562121', formData.get('entry.92562121') as string); // Name
    params.append('entry.22789510', formData.get('entry.22789510') as string); // Email
    params.append('entry.1257514426', formData.get('entry.1257514426') as string); // Phone
    params.append('entry.1862121208', formData.get('entry.1862121208') as string); // Response Method
    params.append('entry.1607160016', formData.get('entry.1607160016') as string); // Company
    params.append('entry.1236488825', formData.get('entry.1236488825') as string); // Message

    try {
      await fetch(form.action, {
        method: 'POST',
        body: params,
        mode: 'no-cors', // Required for cross-origin form submissions to Google Forms
      });
      // The form is submitted, the 'submitted' state will show the success message
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(false); // Revert if there's an error
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
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
                <span>onodera00.biz@gmail.com</span>
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
          <div className="bg-zinc-900/20 p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
            {submitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/90 text-center p-8 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-500">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Message Sent</h3>
                <p className="text-zinc-400">お問い合わせありがとうございます。<br />内容を確認の上、ご連絡させていただきます。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-zinc-500 hover:text-white underline underline-offset-4"
                >
                  新しいメッセージを送る
                </button>
              </div>
            ) : null}

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfyXDmsjYkZDrut-Nylux9K1LZ7wYPuUzuz61kRpGnKyCWEgQ/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className={`space-y-10 transition-opacity duration-500 ${submitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              {/* 氏名: entry.92562121 */}
              <div className="relative group">
                <input
                  type="text"
                  name="entry.92562121"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">
                  Name <span className="text-red-500">*</span>
                </label>
              </div>

              {/* メールアドレス: entry.22789510 */}
              <div className="relative group">
                <input
                  type="email"
                  name="entry.22789510"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">
                  Email <span className="text-red-500">*</span>
                </label>
              </div>

              {/* 電話番号: entry.1257514426 */}
              <div className="relative group">
                <input
                  type="tel"
                  name="entry.1257514426"
                  id="phone"
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="phone" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">
                  Phone <span className="text-red-500">*</span>
                </label>
              </div>

              {/* ご希望の返信方法: entry.1862121208 */}
              <div className="relative group pt-4">
                <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-4">
                  Response Method <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group/radio">
                    <input
                      type="radio"
                      name="entry.1862121208"
                      value="メール"
                      required
                      className="peer hidden"
                    />
                    <div className="w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-white peer-checked:bg-white transition-all relative"></div>
                    <span className="text-zinc-400 text-sm group-hover/radio:text-white transition-colors">Email</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group/radio">
                    <input
                      type="radio"
                      name="entry.1862121208"
                      value="電話"
                      className="peer hidden"
                    />
                    <div className="w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-white peer-checked:bg-white transition-all relative"></div>
                    <span className="text-zinc-400 text-sm group-hover/radio:text-white transition-colors">Phone</span>
                  </label>
                </div>
              </div>

              {/* 会社・組織名: entry.1607160016 */}
              <div className="relative group">
                <input
                  type="text"
                  name="entry.1607160016"
                  id="company"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="company" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">
                  Company / Organization
                </label>
              </div>

              {/* お問合せ内容: entry.1236488825 */}
              <div className="relative group">
                <textarea
                  name="entry.1236488825"
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">
                  Message <span className="text-red-500">*</span>
                </label>
              </div>

              <button className="w-full bg-white text-black py-4 font-medium tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-[1.01] duration-300">
                SEND MESSAGE
              </button>
            </form>
            <iframe name="hidden_iframe" ref={iframeRef} className="hidden" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
