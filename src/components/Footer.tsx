import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 relative border-t border-slate-800">
      
      {/* Top Banner / Slogan Strip */}
      <div className="bg-[#090D16] py-5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-slate-800 text-[#F97316] border border-slate-700">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-wider block font-heading">
                {COMPANY_INFO.name}
              </span>
              <span className="text-xs text-[#94A3B8] font-medium">
                {COMPANY_INFO.slogan}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              const text = 'Hola Construcciones & Servicios RG, me gustaría solicitar un presupuesto para mi obra / proyecto.';
              window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
            }}
            className="px-5 py-2.5 rounded bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            Solicitar Presupuesto por WhatsApp
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info & Mission Brief (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" size="lg" />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Desarrollamos proyectos de construcción, remodelación, mantenimiento e ingeniería en <strong>Yucatán y el sureste de México</strong>, brindando soluciones adaptadas a las necesidades de cada cliente con máxima calidad y seguridad.
            </p>

            {/* Contact & WhatsApp Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola Construcciones & Servicios RG, me gustaría enviar una propuesta para cotización.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Enviar Mensaje Facebook</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Servicios</span>
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Nosotros</span>
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Proceso</span>
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Galería de Obras</span>
                </a>
              </li>
              <li>
                <a href="#por-que-rg" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>¿Por qué RG?</span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Fast Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Especialidades (Cotizar)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Construcción de Obra Nueva*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Construcción de Obra Nueva</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Remodelaciones y Ampliaciones*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Remodelaciones y Ampliaciones</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Estructuras Metálicas & Techumbres*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Estructuras Metálicas & Techumbres</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Instalaciones Eléctricas e Hidráulicas*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Instalaciones Eléctricas e Hidráulicas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Impermeabilización & Mantenimiento*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Impermeabilización & Mantenimiento</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar *Ingeniería, Planos & Presupuestos*.';
                    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="hover:text-[#F97316] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>Ingeniería, Planos & Presupuestos</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Coverage (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Cobertura & Horario
            </h4>
            
            <div className="space-y-3 text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <span>Mérida, Yucatán y municipios aledaños.</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <span>Horario: {COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs text-[#F97316] hover:text-white transition-colors cursor-pointer uppercase tracking-wider font-semibold"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Construcciones & Servicios RG. Todos los derechos reservados.
          </div>
          <div className="text-slate-400">
            Ingeniería que resuelve, calidad que permanece · Yucatán, México
          </div>
        </div>

      </div>
    </footer>
  );
};
