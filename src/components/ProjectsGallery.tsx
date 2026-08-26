import React, { useState } from 'react';
import { PROJECTS_DATA, COMPANY_INFO } from '../data/companyData';
import { Project } from '../types';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  X,
  Layers,
  Eye,
  MessageSquare,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Trabajos (8)' },
    { id: 'construccion', label: 'Construcción & Fachadas' },
    { id: 'remodelacion', label: 'Cocinas & Interiores' },
    { id: 'instalaciones', label: 'Acabados & Climatización' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleWhatsAppConsult = (project: Project) => {
    const text = `Hola Construcciones & Servicios RG, vi su proyecto de *${project.title}* en su galería y me gustaría cotizar un trabajo similar para mi propiedad.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="proyectos" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Galería de Trabajos Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Nuestros Trabajos y Obras Ejecutadas
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Fotografías de obras reales entregadas en Yucatán: construcción residencial, cocinas integrales de lujo, remodelación de baños, celosías iluminadas y acabados finos.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F172A] text-white shadow-sm border border-[#0F172A]'
                    : 'bg-white text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] border border-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#CBD5E1] transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setActiveProjectModal(project)}
            >
              {/* Photo Frame */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-[#0F172A]/85 text-[#F97316] px-2.5 py-1 rounded-md border border-slate-700 backdrop-blur-xs">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Quick Zoom Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-md bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Title Overlay in Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-sm font-bold font-heading line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="text-[#0F172A] font-bold group-hover:text-[#F97316] transition-colors flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver detalles</span>
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">
                    Obra Concluida
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-[#CBD5E1] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A]">
              ¿Tienes un proyecto en mente similar a estos trabajos?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Envíame fotos, medidas o planos de tu espacio y te entregamos tu presupuesto sin compromiso.
            </p>
          </div>

          <button
            onClick={() => {
              const text = 'Hola Construcciones & Servicios RG, me gustaría cotizar un proyecto como los de su galería.';
              window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
            }}
            className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>

      </div>

      {/* DETAILED PROJECT MODAL / LIGHTBOX */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 my-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo Frame */}
            <div className="relative bg-slate-950 max-h-[440px] flex items-center justify-center overflow-hidden">
              <img
                src={activeProjectModal.afterImage}
                alt={activeProjectModal.title}
                className="w-full max-h-[440px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Info Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-xs text-[#64748B] flex-wrap">
                <span className="flex items-center gap-1 font-semibold text-[#0F172A]">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  {activeProjectModal.location}
                </span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {activeProjectModal.duration}
                </span>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed">
                {activeProjectModal.description}
              </p>

              {/* Scope List */}
              <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                  Trabajos y especificaciones de obra:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectModal.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#64748B]">
                  ¿Quieres un trabajo con esta misma calidad?
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveProjectModal(null);
                      handleWhatsAppConsult(activeProjectModal);
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cotizar por WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
