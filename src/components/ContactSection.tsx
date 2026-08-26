import React from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building,
  FileText,
  Hammer,
  Layers,
  Zap,
  Wrench,
  Compass
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  construccion: Building,
  remodelacion: Hammer,
  estructuras: Layers,
  instalaciones: Zap,
  mantenimiento: Wrench,
  ingenieria: Compass
};

export const ContactSection: React.FC = () => {
  const openWhatsApp = (customText?: string) => {
    const text = customText || 'Hola Construcciones & Servicios RG, deseo ponerme en contacto con ustedes para cotizar un proyecto.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Contacto y Cotización Inmediata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            ¿Tienes un Proyecto o Reparación por Realizar?
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Sin formularios complicados. Envíanos tu propuesta, planos o mensaje directamente por <strong>WhatsApp</strong> o <strong>Facebook</strong> para brindarte atención inmediata y presupuesto personalizado.
          </p>
        </div>

        {/* 2-Column Direct Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: RG Identity Box & Coverage */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0F172A] text-white rounded-xl p-7 shadow-xl space-y-5 relative overflow-hidden border border-slate-800">
              <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-5 pointer-events-none">
                <Building className="w-48 h-48 text-white" />
              </div>

              <div className="space-y-1">
                <span className="text-[#F97316] text-xs font-bold uppercase tracking-wider">
                  {COMPANY_INFO.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {COMPANY_INFO.slogan}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {COMPANY_INFO.subSlogan}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3.5 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-[#F97316] shrink-0 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Cobertura Operativa</div>
                    <div className="text-slate-200 text-xs mt-0.5">{COMPANY_INFO.location}</div>
                    <div className="text-[#94A3B8] text-xs">{COMPANY_INFO.coverage}</div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-[#F97316] shrink-0 border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs uppercase tracking-wider">Horario de Atención</div>
                    <div className="text-slate-200 text-xs mt-0.5">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>

                {/* WhatsApp & Proposal Contact */}
                <div className="flex items-start gap-3 bg-slate-900/90 p-3.5 rounded-lg border border-slate-700">
                  <div className="p-2 rounded bg-emerald-950 text-emerald-400 shrink-0 border border-emerald-700">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-xs uppercase tracking-wider flex items-center justify-between">
                      <span>WhatsApp Oficial</span>
                      <span className="text-emerald-400 text-xs font-mono font-bold">{COMPANY_INFO.whatsappDisplay}</span>
                    </div>
                    <div className="text-slate-300 text-xs mt-1">
                      Envío de propuestas, planos y cotizaciones directas:
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => openWhatsApp('Hola Construcciones & Servicios RG, me gustaría enviarles una propuesta / proyecto para su revisión y cotización.')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Abrir WhatsApp</span>
                      </button>
                      <a
                        href={`tel:${COMPANY_INFO.whatsapp}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded text-xs font-bold uppercase tracking-wider transition-all border border-slate-700"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>Llamar</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels - FACEBOOK PROMINENT */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Canal Oficial de Facebook:
                </div>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Enviar Mensaje por Facebook</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Guarantee Box */}
            <div className="bg-[#F8FAFC] rounded-lg p-5 border border-[#E2E8F0] shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#F97316] shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-[#0F172A] uppercase tracking-wider">Trato Directo y Profesional</div>
                <div className="text-[#64748B] mt-0.5">Sin intermediarios, supervisión técnica calificada en cada etapa.</div>
              </div>
            </div>

          </div>

          {/* Right Column: 100% Direct Action Center (No forms, 100% 1-click WhatsApp & Facebook) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F97316] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span>Atención Inmediata</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] font-heading">
                Enviar Mensaje y Cotizar Proyecto
              </h3>
              <p className="text-[#64748B] text-sm mt-1">
                Elige tu medio preferido para comunicarte con nuestro equipo sin llenar formularios:
              </p>
            </div>

            {/* 2 Main Big Contact Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option A: WhatsApp */}
              <div className="bg-white p-5 rounded-xl border-2 border-emerald-500/30 hover:border-emerald-500 shadow-sm transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] font-heading">
                    Enviar por WhatsApp
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Respuesta rápida, cotizaciones y recepción directa de planos o fotos de obra.
                  </p>
                  <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 py-1 px-2 rounded border border-emerald-100 inline-block">
                    {COMPANY_INFO.whatsappDisplay}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openWhatsApp('Hola Construcciones & Servicios RG, me gustaría ponerme en contacto con ustedes para cotizar un proyecto.')}
                  className="w-full py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Mensaje WhatsApp</span>
                </button>
              </div>

              {/* Option B: Facebook */}
              <div className="bg-white p-5 rounded-xl border-2 border-blue-500/30 hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1877F2] flex items-center justify-center border border-blue-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] font-heading">
                    Enviar por Facebook
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Escríbenos en nuestra página oficial de Facebook con atención personalizada.
                  </p>
                  <div className="text-xs font-bold text-[#1877F2] bg-blue-50 py-1 px-2 rounded border border-blue-100 inline-block">
                    Página Oficial RG
                  </div>
                </div>

                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 text-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Enviar Mensaje Facebook</span>
                </a>
              </div>

            </div>

            {/* 1-Click WhatsApp Presets by Service */}
            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Cotizar por tipo de obra (1 clic a WhatsApp):</span>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold">Listo para enviar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES_DATA.map((srv) => {
                  const Icon = serviceIcons[srv.id] || Building;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => openWhatsApp(`Hola Construcciones & Servicios RG, me gustaría cotizar el servicio de *${srv.title}*.`)}
                      className="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-emerald-400 bg-[#F8FAFC] hover:bg-emerald-50 text-left transition-all flex items-center justify-between gap-2 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Icon className="w-4 h-4 text-[#F97316] group-hover:text-emerald-600 shrink-0" />
                        <span className="text-xs font-bold text-[#0F172A] group-hover:text-emerald-900 truncate font-heading">
                          {srv.title}
                        </span>
                      </div>
                      <MessageSquare className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-emerald-600 shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Send proposal files trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openWhatsApp('Hola Construcciones & Servicios RG, tengo planos arquitectónicos / propuesta técnica y me gustaría enviárselos para su revisión y presupuesto.')}
                  className="w-full p-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200 text-[#0F172A] hover:text-orange-950 font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#F97316]" />
                    <span>¿Tienes planos o proyecto ejecutivo? Envía tu propuesta aquí</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#F97316] uppercase">Enviar a WhatsApp →</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
