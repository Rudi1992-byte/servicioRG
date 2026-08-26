import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { 
  Building2, 
  Hammer, 
  Layers, 
  Zap, 
  Wrench, 
  Compass, 
  CheckCircle, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Hammer,
  Layers,
  Zap,
  Wrench,
  Compass
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === activeTab);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(prev => prev === id ? null : id);
  };

  return (
    <section id="servicios" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Soluciones Integrales para Tu Obra
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Ejecución profesional con mano de obra calificada, supervisión en sitio y materiales garantizados.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F172A] text-white shadow-sm border border-[#0F172A]'
                  : 'bg-white text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] border border-[#E2E8F0]'
              }`}
            >
              Todos los Servicios ({SERVICES_DATA.length})
            </button>
            {SERVICES_DATA.map((service) => {
              const Icon = iconMap[service.iconName] || Building2;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === service.id
                      ? 'bg-[#0F172A] text-white shadow-sm border border-[#0F172A]'
                      : 'bg-white text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] border border-[#E2E8F0]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Building2;
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent" />
                  
                  {/* Service Icon Floating */}
                  <div className="absolute top-3 left-3 p-2 rounded bg-[#0F172A]/90 text-[#F97316] backdrop-blur-xs border border-slate-700 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-wider block">
                      {service.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist of subservices */}
                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] flex items-center justify-between">
                      <span>Alcances</span>
                      <span className="text-[#64748B] font-normal">({service.items.length} conceptos)</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-[#334155]">
                      {(isExpanded ? service.items : service.items.slice(0, 4)).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand/Collapse Button if more than 4 items */}
                    {service.items.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(service.id)}
                        className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] flex items-center gap-1 pt-1 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Ver menos' : `Ver todos (${service.items.length})`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <button
                      onClick={() => {
                        const text = `Hola Construcciones & Servicios RG, me gustaría cotizar el servicio de *${service.title}*.`;
                        window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                    >
                      <span>Cotizar {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
