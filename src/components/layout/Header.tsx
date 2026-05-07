import { useEffect, useState } from 'react';
import { ArrowUpRight, Camera, Menu, X } from 'lucide-react';
import { Page } from '../../types';

const navItems: Array<{ page: Page; label: string }> = [
  { page: 'works', label: 'Works' },
  { page: 'service', label: 'Services' },
  { page: 'about', label: 'About' },
];

const Header = ({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const isDarkHeader = currentPage === 'home' && !isScrolled && !isMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          isDarkHeader
            ? 'bg-transparent text-white'
            : 'border-b border-stone-200 bg-[#f7f5f0]/95 text-stone-950 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            type="button"
            onClick={() => goTo('home')}
            className="flex items-center gap-3 text-left transition-opacity hover:opacity-70"
            aria-label="R.PHOTO home"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center border ${
                isDarkHeader ? 'border-white/70' : 'border-stone-900'
              }`}
            >
              <Camera size={17} strokeWidth={1.7} />
            </span>
            <span className="text-lg font-semibold tracking-[0.28em]">
              R.PHOTO
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => goTo(item.page)}
                className={`text-xs uppercase tracking-[0.24em] transition-colors ${
                  currentPage === item.page
                    ? isDarkHeader
                      ? 'text-white'
                      : 'text-stone-950'
                    : isDarkHeader
                      ? 'text-white/70 hover:text-white'
                      : 'text-stone-500 hover:text-stone-950'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo('contact')}
              className={`inline-flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                isDarkHeader
                  ? 'border-white/70 text-white hover:bg-white hover:text-stone-950'
                  : 'border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-white'
              }`}
            >
              Inquire
              <ArrowUpRight size={14} />
            </button>
          </nav>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#f7f5f0] px-6 pt-28 text-stone-950 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-7">
          <button
            type="button"
            onClick={() => goTo('home')}
            className="border-b border-stone-300 pb-5 text-left text-3xl font-serif"
          >
            Home
          </button>
          {navItems.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => goTo(item.page)}
              className="border-b border-stone-300 pb-5 text-left text-3xl font-serif"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo('contact')}
            className="border-b border-stone-300 pb-5 text-left text-3xl font-serif"
          >
            Inquire
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
