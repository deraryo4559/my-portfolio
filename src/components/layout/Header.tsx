import { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { Page } from '../../types';

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
            <span>R.PHOTO</span>
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

export default Header;

