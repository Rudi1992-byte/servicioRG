import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#F97316] selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Services Section */}
        <ServicesSection onSelectServiceForQuote={handleOpenQuoteModal} />

        {/* 3. About Us, Mission, Vision & Values */}
        <AboutSection />

        {/* 4. Methodology / 5-Step Process */}
        <ProcessSection />

        {/* 5. Projects Gallery with Interactive Before/After Comparisons */}
        <ProjectsGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Why Choose RG */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 7. FAQ Section */}
        <FAQSection />

        {/* 8. Contact & Quote Direct Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Quotation Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={preselectedService}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
