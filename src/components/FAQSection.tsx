import React, { useState } from 'react';
import { FAQS_DATA } from '../data/companyData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
            <span className="w-2 h-2 bg-[#F97316] rounded-full" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Resolvemos tus Dudas
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg">
            Conoce cómo gestionamos cada proyecto y garantizamos certidumbre en tu obra.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#0F172A] hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-heading">{faq.question}</span>
                  <div className={`p-1.5 rounded bg-slate-100 border border-slate-200 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50 text-[#F97316] border-orange-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-[#64748B] text-sm leading-relaxed border-t border-[#F1F5F9] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
