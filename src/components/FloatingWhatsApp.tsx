import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, X, ExternalLink, HardHat, FileText, Wrench } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsAppWithMessage = (text: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip / Direct Action Box */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded bg-[#F97316] flex items-center justify-center text-white font-black text-xs">
                  RG
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#0F172A]" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-heading text-white">Construcciones & Servicios RG</h4>
                <p className="text-[10px] text-emerald-400 font-medium">WhatsApp Oficial: {COMPANY_INFO.whatsappDisplay}</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Direct 1-Click Action Buttons */}
          <div className="p-4 bg-[#F8FAFC] space-y-2.5">
            <p className="text-xs text-[#334155] leading-relaxed">
              👋 ¡Hola! Haz clic en la opción de tu interés para abrir WhatsApp directamente sin tener que escribir en la página:
            </p>

            <div className="space-y-1.5 pt-1">
              <button
                type="button"
                onClick={() => openWhatsAppWithMessage('Hola Construcciones & Servicios RG, me gustaría solicitar una cotización para un proyecto.')}
                className="w-full text-left p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Cotizar por WhatsApp Ahora</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </button>

              <button
                type="button"
                onClick={() => openWhatsAppWithMessage('Hola Construcciones & Servicios RG, tengo planos y propuesta de obra que deseo enviarles para presupuesto.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 text-[#0F172A] hover:text-emerald-800 font-semibold text-xs flex items-center justify-between border border-[#E2E8F0] hover:border-emerald-300 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Enviar Planos / Propuesta</span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
              </button>

              <button
                type="button"
                onClick={() => openWhatsAppWithMessage('Hola Construcciones & Servicios RG, solicito presupuesto para construcción / remodelación.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-orange-50 text-[#0F172A] hover:text-orange-800 font-semibold text-xs flex items-center justify-between border border-[#E2E8F0] hover:border-orange-300 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <HardHat className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Cotizar Obra / Remodelación</span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
              </button>

              <button
                type="button"
                onClick={() => openWhatsAppWithMessage('Hola Construcciones & Servicios RG, requiero mantenimiento, reparación o impermeabilización.')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#0F172A] font-semibold text-xs flex items-center justify-between border border-[#E2E8F0] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Mantenimiento / Reparación</span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
              </button>
            </div>

            {/* Facebook direct channel */}
            <div className="pt-2 border-t border-[#E2E8F0]">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Enviar Mensaje por Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-emerald-600/40 transition-all cursor-pointer border border-emerald-400/40"
        aria-label="Abrir WhatsApp para cotizar"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Cotiza por WhatsApp
        </span>
      </button>
    </div>
  );
};
