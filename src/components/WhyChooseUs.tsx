import React from 'react';
import { WHY_US_DATA, COMPANY_INFO } from '../data/companyData';
import { 
  UserCheck, 
  Cpu, 
  Receipt, 
  ShieldCheck, 
  MessagesSquare, 
  Handshake, 
  Check, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Cpu,
  Receipt,
  ShieldCheck,
  MessagesSquare,
  Handshake
};

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="por-que-rg" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Nuestra Propuesta de Valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            ¿Por qué trabajar con RG?
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Entendemos que contratar una obra, remodelación o servicio representa una inversión importante de tu patrimonio. Por ello cuidamos cada peso y cada detalle técnico.
          </p>
        </div>

        {/* 6 Grid Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_DATA.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded bg-[#0F172A] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#F97316] bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded uppercase tracking-wider">
                      <Check className="w-3 h-3 text-[#F97316]" />
                      Garantía RG
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#94A3B8]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Solución técnica garantizada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 bg-[#0F172A] rounded-xl p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              ¿Listo para dar el siguiente paso en tu proyecto?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Permítenos evaluar tus requerimientos sin costo y entregarte una propuesta técnica transparente.
            </p>
          </div>

          <button
            onClick={() => {
              const text = 'Hola Construcciones & Servicios RG, me gustaría solicitar un presupuesto para mi proyecto.';
              window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
            }}
            className="shrink-0 px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-md transition-all cursor-pointer"
          >
            Solicitar Presupuesto por WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
