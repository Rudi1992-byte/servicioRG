import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import heroBannerImg from '../assets/images/hero_banner_rg_1787609986016.jpg';
import logoImg from '../assets/images/logo_rg_1787609997607.jpg';
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Wrench, 
  HardHat, 
  PhoneCall, 
  ShieldCheck, 
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const highlights = [
    {
      icon: Home,
      title: 'Construcción de viviendas',
      desc: 'Obra nueva y proyectos residenciales'
    },
    {
      icon: Building2,
      title: 'Remodelaciones y ampliaciones',
      desc: 'Cocinas, baños, terrazas y fachadas'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento y reparaciones',
      desc: 'Pisos, pintura e impermeabilización'
    },
    {
      icon: HardHat,
      title: 'Asesoría y gestión de proyectos',
      desc: 'Supervisión en sitio y presupuestos'
    }
  ];

  const handleWhatsAppQuote = (customTopic?: string) => {
    const text = customTopic 
      ? `Hola Construcciones & Servicios RG, me interesa cotizar: *${customTopic}*.`
      : 'Hola Construcciones & Servicios RG, me gustaría solicitar una cotización para mi proyecto.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="inicio" className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* OFFICIAL HEADER BANNER CARD */}
        <div className="bg-white border-2 border-[#CBD5E1] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
              
              {/* Brand Top Identifier */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
                  <img 
                    src={logoImg} 
                    alt="Construcciones & Servicios RG" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316]">
                    Construcciones & Servicios RG
                  </div>
                  <div className="text-[11px] text-[#64748B] flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span>Mérida, Yucatán y Sureste de México</span>
                  </div>
                </div>
              </div>

              {/* Main Official Slogan Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] font-heading uppercase tracking-tight">
                  CONSTRUIMOS <span className="text-[#F97316]">TUS IDEAS</span>,<br />
                  CREAMOS <span className="text-[#0F172A]">REALIDADES</span>
                </h1>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal pt-1 max-w-xl">
                  Soluciones integrales en <strong>construcción, remodelación y servicios profesionales</strong> con calidad, compromiso y seguridad.
                </p>
              </div>

              {/* 4 Core Quick Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => handleWhatsAppQuote(h.title)}
                      className="p-3 rounded-lg bg-[#F8FAFC] hover:bg-orange-50/80 border border-[#E2E8F0] hover:border-[#F97316] transition-all flex items-center gap-2.5 text-left group cursor-pointer"
                    >
                      <div className="p-1.5 rounded bg-white text-[#F97316] shadow-2xs group-hover:bg-[#F97316] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#1E293B] group-hover:text-[#F97316] transition-colors leading-tight">
                          {h.title}
                        </div>
                        <div className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                          {h.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* CTA Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="hero-quote-btn"
                  onClick={() => handleWhatsAppQuote()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0F172A] hover:bg-slate-800 text-white font-black text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#F97316]" />
                  <span>SOLICITA TU COTIZACIÓN</span>
                  <ArrowRight className="w-4 h-4 text-[#F97316]" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola Construcciones & Servicios RG, me gustaría agendar una visita o llamada de asesoría.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs sm:text-sm rounded-lg transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </div>

              {/* Badges footer */}
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-4 sm:gap-6 text-xs text-[#64748B] flex-wrap">
                <div className="flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  <span>Presupuesto sin compromiso</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                  <span>Supervisión en sitio</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span>Atención rápida</span>
                </div>
              </div>

            </div>

            {/* Right Banner Image (5 Cols) */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[360px] relative bg-slate-900 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#CBD5E1]">
              <img
                src={heroBannerImg}
                alt="Construcciones & Servicios RG - Construimos tus ideas, creamos realidades"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0F172A]/90 backdrop-blur-md text-white border border-slate-700 shadow-xl flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#F97316]">
                    Garantía & Calidad
                  </div>
                  <div className="text-sm font-bold font-heading">
                    Mano de obra y acabados de primera
                  </div>
                </div>
                <button
                  onClick={() => handleWhatsAppQuote()}
                  className="px-3.5 py-2 rounded bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                >
                  Contactar
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
