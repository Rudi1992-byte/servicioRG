import React from 'react';
import { PROCESS_DATA } from '../data/companyData';
import { 
  Ear, 
  Search, 
  FileSpreadsheet, 
  Hammer, 
  CheckSquare,
  ArrowRight,
  Workflow
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Ear,
  Search,
  FileSpreadsheet,
  Hammer,
  CheckSquare
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="proceso" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Nuestro Proceso Paso a Paso
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Una estructura metódica y transparente para garantizar certidumbre en tiempos, costos y calidad constructiva.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 relative">
          {PROCESS_DATA.map((item, index) => {
            const Icon = iconMap[item.icon] || Hammer;
            const isFirst = index === 0;

            return (
              <div
                key={item.number}
                className="bg-white rounded-lg p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between relative group"
              >
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                    isFirst 
                      ? 'bg-[#F97316] text-white' 
                      : 'bg-[#0F172A] text-white'
                  }`}>
                    {item.number}
                  </span>
                  <div className="p-2 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#F97316]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <span className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider block">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span className="font-semibold">Etapa {index + 1} de 5</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
