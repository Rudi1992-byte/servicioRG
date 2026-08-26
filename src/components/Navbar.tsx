import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare, 
  ExternalLink,
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = ['inicio', 'servicios', 'nosotros', 'proceso', 'proyectos', 'por-que-rg', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { label: 'Proceso', href: '#proceso', id: 'proceso' },
    { label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { label: '¿Por qué RG?', href: '#por-que-rg', id: 'por-que-rg' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-[#080E1E] text-slate-300 text-xs transition-all duration-300 border-b border-slate-800/80 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span className="hidden sm:inline">Ubicación:</span>
              <strong className="text-white font-medium">Mérida, Yucatán y Sureste</strong>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span>Horario: <strong className="text-white font-medium">Lun - Sáb 9:00 AM - 6:00 PM</strong></span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Facebook Link */}
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors bg-slate-800/90 hover:bg-slate-700 px-2.5 py-1 rounded text-xs"
              title="Visítanos en Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hidden xs:inline">Facebook</span>
            </a>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors text-xs"
              title={`WhatsApp: ${COMPANY_INFO.whatsappDisplay}`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800' 
          : 'bg-[#0F172A] py-3.5 sm:py-4 border-b border-slate-800/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#inicio" className="transition-transform hover:opacity-95">
              <Logo variant="light" size="md" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-white border-b-2 border-[#F97316] pb-1'
                        : 'text-[#94A3B8] hover:text-white pb-1'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-opacity p-1.5 hidden sm:block"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <button
                id="navbar-quote-btn"
                onClick={() => {
                  const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar un proyecto.';
                  window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2 text-xs sm:text-sm font-bold rounded shadow-md uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Cotizar Proyecto
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-semibold uppercase tracking-wider ${
                    activeSection === link.id
                      ? 'bg-slate-800 text-[#F97316] border-l-2 border-[#F97316]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const text = 'Hola Construcciones & Servicios RG, me gustaría solicitar una cotización por WhatsApp.';
                  window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded shadow uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotizar por WhatsApp</span>
              </button>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 text-slate-300 hover:text-white font-medium rounded text-xs"
              >
                <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Enviar Mensaje por Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
