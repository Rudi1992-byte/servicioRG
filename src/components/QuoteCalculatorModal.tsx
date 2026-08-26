import React from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { 
  X, 
  MessageSquare, 
  Phone,
  Building,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find(s => s.id === initialServiceId);

  const openWhatsAppWithTopic = (topicName: string) => {
    const text = `Hola Construcciones & Servicios RG, me gustaría solicitar una cotización para: *${topicName}*.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  const openGeneralWhatsApp = () => {
    const text = 'Hola Construcciones & Servicios RG, solicito información y cotización para un proyecto de obra / remodelación.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-xl w-full shadow-2xl border border-[#E2E8F0] overflow-hidden relative my-auto">
        
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-6 sm:p-7 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F97316] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            <span>Cotización Inmediata por WhatsApp</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            {currentService ? `Cotizar ${currentService.title}` : 'Cotizar tu Proyecto'}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Sin formularios largos: te atendemos directamente por WhatsApp o Facebook en minutos.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main WhatsApp Direct Action */}
          <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Cotización Rápida 1 a 1 por WhatsApp</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Haz clic abajo para abrir una conversación directa con nuestro equipo técnico. Puedes enviarnos fotos, planos o medidas para tu presupuesto.
            </p>

            <button
              onClick={() => {
                if (currentService) {
                  openWhatsAppWithTopic(currentService.title);
                } else {
                  openGeneralWhatsApp();
                }
              }}
              className="w-full py-3.5 px-5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Cotizar {currentService ? currentService.title : 'Ahora'} por WhatsApp</span>
            </button>
            <div className="text-center text-[11px] text-emerald-700 font-medium">
              Número Oficial: {COMPANY_INFO.whatsappDisplay}
            </div>
          </div>

          {/* Quick Select By Specialty */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              O selecciona tu especialidad de interés:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => openWhatsAppWithTopic(srv.title)}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold flex items-center justify-between gap-2 transition-all cursor-pointer ${
                    srv.id === initialServiceId
                      ? 'border-[#F97316] bg-orange-50 text-[#0F172A] ring-1 ring-[#F97316]'
                      : 'border-[#E2E8F0] hover:border-slate-400 bg-[#F8FAFC] text-[#334155] hover:bg-white'
                  }`}
                >
                  <span className="truncate">{srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Alternative Channels: Facebook & Phone */}
          <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Otros Canales Directos
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Mensaje por Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="py-3 px-4 rounded bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>Llamar Directo</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] pt-2">
              <Clock className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
