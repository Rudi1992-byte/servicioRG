import React from 'react';
import { VALUES_DATA } from '../data/companyData';
import logoImg from '../assets/images/logo_rg_1787609997607.jpg';
import photoFachadaCelosia from '../assets/images/obra_fachada_celosia_1787766232572.jpg';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  HardHat, 
  Target,
  Eye,
  HeartHandshake
} from 'lucide-react';

const iconComponents: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  FileText,
  HardHat
};

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Company Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              <span className="w-2 h-2 bg-[#F97316] rounded-full" />
              <span>Quiénes Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-tight">
              Más que construir,<br />
              <span className="text-[#F97316]">buscamos resolver.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
              <strong>RG Construcciones y Servicios</strong> ofrece soluciones profesionales en construcción, remodelación, ingeniería y mantenimiento, atendiendo proyectos residenciales y comerciales en <strong>Mérida, Yucatán y el sureste de México</strong>.
            </p>

            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Nuestra metodología parte de <strong>analizar detenidamente cada necesidad antes de ejecutar</strong>. Proponemos alternativas técnicas viables y cuidamos cada peso del presupuesto de nuestros clientes mediante una supervisión constante en sitio.
            </p>

            <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#0F172A] text-[#F97316] shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-sm font-heading">Nuestro Compromiso</h4>
                <p className="text-[#64748B] text-xs sm:text-sm mt-0.5 leading-relaxed">
                  Entregar obras bien estructuradas, con acabados limpios y garantía, manteniendo trato directo y honesto en todo momento.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Real Project Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-slate-900">
              <img
                src={photoFachadaCelosia}
                alt="Detalle de obra real - Construcciones & Servicios RG"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[#F97316] text-xs font-bold uppercase tracking-wider">
                  Obras Reales Ejecutadas
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-heading">
                  Calidad técnica y acabados arquitectónicos en cada detalle
                </h4>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0F172A] text-white p-3 rounded-xl shadow-2xl border border-slate-700 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-0.5 border border-slate-300 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={logoImg}
                  alt="Construcciones & Servicios RG"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-white">Construcciones & Servicios RG</div>
                <div className="text-[#F97316] font-semibold text-[11px]">Mérida, Yucatán y Sureste</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Misión */}
          <div className="bg-[#F8FAFC] rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs relative overflow-hidden">
            <div className="p-2 rounded bg-white border border-[#E2E8F0] text-[#F97316] w-fit mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0F172A] font-heading mb-2">
              Nuestra Misión
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Brindar soluciones integrales de construcción, ingeniería y remodelación, desarrollando proyectos funcionales, seguros y duraderos mediante una correcta planeación, ejecución responsable y atención personalizada en Yucatán.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#0F172A] text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="p-2 rounded bg-[#F97316] text-white w-fit mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-white font-heading mb-2">
              Nuestra Visión
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Consolidarnos como una empresa de referencia en el sector de la construcción y servicios en el sureste de México, reconocida por la calidad de ejecución, la capacidad técnica y el estricto cumplimiento de nuestros compromisos.
            </p>
          </div>

        </div>

        {/* Valores Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
              Pilares de Trabajo
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
              Nuestros Valores
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES_DATA.map((val, idx) => {
              const Icon = iconComponents[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#F97316] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#0F172A] text-sm font-heading">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
