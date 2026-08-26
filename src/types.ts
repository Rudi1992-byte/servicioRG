export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  image: string;
  description: string;
  items: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'construccion' | 'remodelacion' | 'estructuras' | 'instalaciones' | 'mantenimiento' | 'ingenieria';
  categoryLabel: string;
  location: string;
  duration: string;
  description: string;
  scope: string[];
  beforeImage?: string;
  afterImage: string;
  processImages?: string[];
  featured?: boolean;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  projectType: 'residencial' | 'comercial' | 'industrial' | 'otro';
  estimatedSize: string;
  timeframe: string;
  description: string;
  hasBlueprints: boolean;
}
