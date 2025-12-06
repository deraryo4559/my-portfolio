import { Camera } from 'lucide-react';
import { Page } from '../../types';

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

export default Footer;

