import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutGrid, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'zh-CN', label: '简体中文', flag: 'CN' },
  { code: 'zh-TW', label: '繁體中文', flag: 'TW' },
  { code: 'en', label: 'English', flag: 'EN' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation(['nav', 'common']);
  const location = useLocation();
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: '/', label: t('nav:home') },
    { path: '/about', label: t('nav:about') },
    { path: '/products', label: t('nav:products') },
    { path: '/solutions', label: t('nav:solutions') },
    { path: '/contact', label: t('nav:contact') },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInDesktop = desktopLangRef.current?.contains(target);
      const clickedInMobile = mobileLangRef.current?.contains(target);
      if (!clickedInDesktop && !clickedInMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">{t('common:brand')}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 cursor-pointer relative ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
              </Link>
            ))}

            <div ref={desktopLangRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer px-2 py-1"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.flag}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2 ${
                        i18n.language === lang.code
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <span className="w-5 text-center text-xs font-medium">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
            >
              {t('common:consultNow')}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <div ref={mobileLangRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 text-slate-300 hover:text-cyan-400 cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm cursor-pointer transition-colors flex items-center gap-2 ${
                        i18n.language === lang.code
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <span className="w-5 text-center text-xs font-medium">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2 text-slate-300 hover:text-cyan-400 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20 bg-slate-900/95">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 cursor-pointer ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-slate-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 cursor-pointer text-center mt-2"
              >
                {t('common:consultNow')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
