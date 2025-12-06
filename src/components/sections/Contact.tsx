import { Mail, Map, Instagram, Twitter } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

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

export default Contact;

