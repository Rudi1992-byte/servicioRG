import { ServiceItem, Project, ValueItem, ProcessStep, WhyUsItem, FAQItem } from '../types';
import photoResidenciaNoche from '../assets/images/obra_residencia_noche_1787766288965.jpg';
import photoCocinaIntegral from '../assets/images/obra_cocina_integral_1787766188156.jpg';
import photoFachadaAzulHerreria from '../assets/images/obra_fachada_azul_herrer_1787766305121.jpg';
import photoTerrazaAzul from '../assets/images/obra_terraza_azul_1787766170303.jpg';
import photoBanoModerno from '../assets/images/obra_bano_moderno_1787766252723.jpg';
import photoFachadaCelosia from '../assets/images/obra_fachada_celosia_1787766232572.jpg';
import photoEstudioInterior from '../assets/images/obra_estudio_interior_1787766205590.jpg';
import photoRecamaraClima from '../assets/images/obra_recamara_clima_1787766270602.jpg';

export const COMPANY_INFO = {
  name: 'Construcciones & Servicios RG',
  shortName: 'RG Construcciones y Servicios',
  slogan: 'Ingeniería que resuelve, calidad que permanece.',
  subSlogan: 'Construcción | Ingeniería | Mantenimiento | Soluciones Integrales',
  heroBannerTitle: 'CONSTRUIMOS TUS IDEAS, CREAMOS REALIDADES',
  heroBannerSubtitle: 'Soluciones integrales en construcción, remodelación y servicios profesionales con calidad, compromiso y seguridad en Yucatán y el sureste de México.',
  phone: '+52 997 120 9810',
  formattedPhone: '+52 997 120 9810',
  whatsapp: '529971209810',
  whatsappDisplay: '+52 997 120 9810',
  whatsappMessage: 'Hola Construcciones & Servicios RG, me gustaría solicitar información, enviar mi propuesta y cotizar un proyecto.',
  email: 'contacto@rgconstrucciones.com',
  location: 'Mérida, Yucatán, México',
  coverage: 'Mérida, Yucatán, Campeche, Quintana Roo y Sureste de México',
  facebookUrl: 'https://www.facebook.com/share/1JEWA3zbwj/',
  workingHours: 'Lunes a Sábado: 8:00 AM - 6:00 PM',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'construccion',
    title: 'Construcción de Viviendas',
    tagline: 'Obras nuevas residenciales, ampliaciones y cimentaciones',
    iconName: 'Building2',
    image: photoResidenciaNoche,
    description: 'Ejecución de proyectos residenciales y comerciales desde cimentación, albañilería estructural, colados y acabados hasta la entrega final llave en mano.',
    items: [
      'Construcción de obra nueva residencial y comercial',
      'Cimentaciones reforzadas y losas de concreto',
      'Albañilería general y muros perimetrales',
      'Acabados en pasta lisa, chukum y pintura',
      'Pisos de porcelanato y cerámicos de gran formato'
    ],
    featured: true
  },
  {
    id: 'remodelacion',
    title: 'Remodelaciones y Ampliaciones',
    tagline: 'Modernización y transformación de espacios interiores y exteriores',
    iconName: 'Hammer',
    image: photoCocinaIntegral,
    description: 'Transformación integral de cocinas, baños, recámaras y fachadas para maximizar funcionalidad, iluminación, confort y plusvalía.',
    items: [
      'Remodelación integral de cocinas y barras de cuarzo',
      'Modernización de baños con canceles de cristal',
      'Adecuación de locales y oficinas comerciales',
      'Ampliación de recámaras y plantas altas',
      'Rehabilitación de terrazas y roof gardens'
    ],
    featured: true
  },
  {
    id: 'estructuras',
    title: 'Herrería y Cancelaría Moderna',
    tagline: 'Portones, barandales de cristal y estructuras metálicas',
    iconName: 'Layers',
    image: photoFachadaAzulHerreria,
    description: 'Diseño, fabricación y montaje de cancelería de aluminio, barandales con cristal templado, portones de herrería contemporánea y techumbres.',
    items: [
      'Portones y rejas de herrería contemporánea',
      'Barandales de cristal templado y acero inoxidable',
      'Cancelería de aluminio en líneas europeas',
      'Techumbres metálicas y cobertizos',
      'Protecciones y accesos de seguridad'
    ],
    featured: true
  },
  {
    id: 'instalaciones',
    title: 'Instalaciones Técnicas y Clima',
    tagline: 'Sistemas eléctricos, hidráulicos, sanitarios y aire acondicionado',
    iconName: 'Zap',
    image: photoRecamaraClima,
    description: 'Instalaciones confiables bajo normativa: cableado y centros de carga balanceados, iluminación LED empotrada, red hidrosanitaria y climatización.',
    items: [
      'Instalaciones eléctricas y tableros de distribución',
      'Iluminación arquitectónica LED y spots empotrados',
      'Preparación e instalación de minisplits',
      'Redes hidráulicas y sistemas presurizados',
      'Instalaciones sanitarias y desagües pluviales'
    ],
    featured: false
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y Reparaciones',
    tagline: 'Impermeabilización, pintura y mantenimiento preventivo',
    iconName: 'Wrench',
    image: photoBanoModerno,
    description: 'Soluciones profesionales para proteger y conservar tu inmueble: sellado de losas, corrección de filtraciones, pintura y reparaciones generales.',
    items: [
      'Impermeabilización garantizada de azoteas',
      'Sellado de grietas y eliminación de goteras',
      'Pintura vinílica, esmaltes y recubrimientos',
      'Mantenimiento de plomería y grifería',
      'Rehabilitación integral de inmuebles'
    ],
    featured: false
  },
  {
    id: 'ingenieria',
    title: 'Asesoría y Gestión de Proyectos',
    tagline: 'Planos, presupuestos detallados y supervisión calificada',
    iconName: 'Compass',
    image: photoTerrazaAzul,
    description: 'Planificación técnica rigurosa antes de iniciar obra: elaboración de presupuestos por partidas, planos arquitectónicos y supervisión continua en sitio.',
    items: [
      'Presupuestos desglosados y transparentes',
      'Levantamientos y asesoría técnica en sitio',
      'Planos arquitectónicos y de instalaciones',
      'Supervisión continua de avance y calidad',
      'Optimización de tiempos y costos de obra'
    ],
    featured: true
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    title: 'Compromiso',
    description: 'Asumimos cada proyecto como propio, trabajando con responsabilidad para cumplir con calidad y tiempos pactados.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Calidad',
    description: 'Cuidamos minuciosamente los materiales, las técnicas constructivas, los acabados y cada detalle de ejecución.',
    icon: 'Award'
  },
  {
    title: 'Transparencia',
    description: 'Presupuestos claros y desglosados sin cobros ocultos ni costos sorpresa durante la obra.',
    icon: 'FileText'
  },
  {
    title: 'Seguridad y Confianza',
    description: 'Supervisión calificada en sitio garantizando obras firmes, duraderas y respaldadas profesionalmente.',
    icon: 'HardHat'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 'Fase 1',
    number: '01',
    title: 'Contacto & Asesoría',
    description: 'Escuchamos tu idea, requerimientos y evaluamos las necesidades específicas de tu proyecto.',
    icon: 'Ear'
  },
  {
    step: 'Fase 2',
    number: '02',
    title: 'Visita & Evaluación Técnica',
    description: 'Revisamos dimensiones, condiciones en sitio y alternativas constructivas óptimas.',
    icon: 'Search'
  },
  {
    step: 'Fase 3',
    number: '03',
    title: 'Presupuesto Transparente',
    description: 'Te entregamos una propuesta desglosada por partidas con materiales, alcances y tiempos.',
    icon: 'FileSpreadsheet'
  },
  {
    step: 'Fase 4',
    number: '04',
    title: 'Ejecución & Supervisión',
    description: 'Desarrollamos la obra con personal calificado, control de calidad y reportes continuos de avance.',
    icon: 'Hammer'
  },
  {
    step: 'Fase 5',
    number: '05',
    title: 'Entrega a Satisfacción',
    description: 'Revisión final detallada de acabados para garantizar tu total satisfacción y garantía.',
    icon: 'CheckSquare'
  }
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    title: 'Atención personalizada',
    description: 'Trato directo y soluciones a la medida de tu espacio, presupuesto y visión arquitectónica.',
    icon: 'UserCheck'
  },
  {
    title: 'Soluciones técnicas bien planeadas',
    description: 'Analizamos la ingeniería adecuada desde el cimiento para que tu obra sea resistente y duradera.',
    icon: 'Cpu'
  },
  {
    title: 'Presupuestos claros sin sorpresas',
    description: 'Definimos conceptos, materiales y costos detallados para tu total tranquilidad.',
    icon: 'Receipt'
  },
  {
    title: 'Supervisión y calidad en acabados',
    description: 'Cuidamos cada unión, nivelación, pasta y colocación de piso con altos estándares de mano de obra.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Comunicación constante',
    description: 'Te mantenemos informado en todo momento sobre los avances de tu obra.',
    icon: 'MessagesSquare'
  },
  {
    title: 'Garantía en cada trabajo',
    description: 'Respaldamos la calidad de nuestros trabajos con compromiso profesional de largo plazo.',
    icon: 'Handshake'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'residencia-fachada-celosia',
    title: 'Residencia de 2 Niveles con Celosía e Iluminación',
    category: 'construccion',
    categoryLabel: 'Construcción Residencial',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Construcción y acabados integrales de residencia contemporánea de dos niveles. Cuenta con muro decorativo de celosía prefabricada con iluminación rasante cálida, cochera techada, muro con revestimiento de piedra y cancelería moderna.',
    scope: [
      'Estructura de concreto armado y muros de mampostería',
      'Muro arquitectónico de celosía con iluminación LED de piso',
      'Fachada con detalles de piedra y pintura de alta durabilidad',
      'Cochera techada y portón de acceso',
      'Instalación eléctrica exterior con spots y luminarias'
    ],
    afterImage: photoResidenciaNoche,
    featured: true
  },
  {
    id: 'cocina-integral-cuarzo',
    title: 'Cocina Integral de Lujo con Isla de Cuarzo y Mármol',
    category: 'remodelacion',
    categoryLabel: 'Remodelación de Interiores',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Remodelación integral de cocina residencial: fabricación e instalación de barra isla con cubierta de cuarzo blanco marmoleado, carpintería moderna en tono nogal oscuro con jaladeras de acero, iluminación suspendida y preparación completa para electrodomésticos.',
    scope: [
      'Cubierta de cuarzo blanco con veta tipo mármol calacatta',
      'Muebles de cocina superior e inferior en acabado mate',
      'Tarja bajo cubierta con monomando cuello de ganso negro mate',
      'Instalación de luminarias colgantes esféricas cálidas',
      'Revestimiento marmoleado en antepecho y barra desayunadora'
    ],
    afterImage: photoCocinaIntegral,
    featured: true
  },
  {
    id: 'fachada-azul-balcon-herreria',
    title: 'Fachada Contemporánea con Balcón de Cristal y Herrería',
    category: 'construccion',
    categoryLabel: 'Construcción & Herrería',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Obra civil y acabados de fachada exterior de 2 plantas en tono azul pizarra. Integra terraza superior con barandal de cristal templado y herrajes de acero inoxidable, portón de herrería horizontal moderna y luminarias de muro en fachada.',
    scope: [
      'Acabados exteriores lisos y pintura vinílica exterior',
      'Terraza superior con cancelería y barandal de cristal templado',
      'Portón y puerta peatonal de herrería con perfiles horizontales',
      'Luminarias decorativas de muro en ambos niveles',
      'Cancelería de aluminio y pisos cerámicos'
    ],
    afterImage: photoFachadaAzulHerreria,
    featured: true
  },
  {
    id: 'terraza-roof-garden',
    title: 'Terraza Roof Garden en Planta Alta',
    category: 'construccion',
    categoryLabel: 'Ampliación & Terrazas',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Ampliación y adecuación de terraza en azotea: pretiles perimetrales con acabado azul vibrante, cancelería corrediza de tres hojas en aluminio con cristal tintex, piso cerámico antiderrapante formato 60x60 e iluminación exterior perimetral.',
    scope: [
      'Levantamiento de pretiles y aplanado fino exterior',
      'Cancelería de aluminio con cristal de control solar',
      'Colocación de piso cerámico antiderrapante para exterior',
      'Luminarias decorativas de muro resistentes a intemperie',
      'Impermeabilización previa y pendientes pluviales'
    ],
    afterImage: photoTerrazaAzul,
    featured: true
  },
  {
    id: 'bano-cristal-templado',
    title: 'Remodelación de Baño con Cancel de Cristal Templado',
    category: 'remodelacion',
    categoryLabel: 'Remodelación de Baños',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Modernización integral de cuarto de baño con cancel corredizo de cristal templado, regadera monomando cuadrada en negro mate, mueble flotante con lavabo cerámico, espejo con iluminación y recubrimientos cerámicos en muros y piso.',
    scope: [
      'Cancel de baño corredizo en cristal templado',
      'Regadera tipo lluvia y monomando en acabado negro mate',
      'Mueble de baño flotante con lavabo cerámico integrado',
      'Espejo decorativo con marco dorado e iluminación',
      'Azulejo cerámico en zona húmeda y piso tipo piedra'
    ],
    afterImage: photoBanoModerno,
    featured: true
  },
  {
    id: 'acceso-portico-celosia',
    title: 'Pórtico de Acceso con Celosía Arquitectónica Iluminada',
    category: 'construccion',
    categoryLabel: 'Fachadas & Acabados',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Diseño y construcción de pórtico de entrada principal con muro de celosía decorativa de concreto, iluminación rasante desde piso con reflectores LED cálidos, portón peatonal moderno y pasillo de acceso en concreto pulido.',
    scope: [
      'Muro de celosía arquitectónica de concreto aparente',
      'Iluminación escenográfica con spots empotrados en piso',
      'Pórtico enmarcado con luminaria plafón LED',
      'Puerta de seguridad contemporánea',
      'Pasillo de concreto estampado y jardinería'
    ],
    afterImage: photoFachadaCelosia,
    featured: false
  },
  {
    id: 'estudio-departamento-porcelanato',
    title: 'Estudio / Departamento con Piso de Porcelanato Brillante',
    category: 'remodelacion',
    categoryLabel: 'Interiores & Pisos',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Acondicionamiento y remodelación interior de estudio: suministro y colocación de piso de porcelanato marmoleado de alto brillo, cocineta integral, muro de acento color verde olivo con puerta de madera, carpintería a medida y luminarias LED.',
    scope: [
      'Piso de porcelanato marmoleado pulido de gran formato',
      'Muro de acento con pintura vinílica y puerta de madera',
      'Muebles de cocineta superior e inferior con tarja',
      'Iluminación empotrada en plafón y ventilador de techo',
      'Instalaciones eléctricas y contactos adicionales'
    ],
    afterImage: photoEstudioInterior,
    featured: true
  },
  {
    id: 'recamara-climatizada-acabados',
    title: 'Recámara Residencial Climatizada con Acabados Finos',
    category: 'instalaciones',
    categoryLabel: 'Acabados & Climatización',
    location: 'Mérida, Yucatán',
    duration: 'Proyecto Concluido',
    description: 'Terminación y habilitación de recámara principal: acabados lisos en muros con pintura azul niebla, puertas de madera contemporáneas, instalación de equipo de aire acondicionado minisplit, zoclo perimetral y piso de porcelanato.',
    scope: [
      'Acabados en pasta lisa y pintura lavable en muros y plafón',
      'Instalación eléctrica y tubería oculta para minisplit',
      'Puertas de madera interiores con cerraduras modernas',
      'Piso de porcelanato con zoclo remetido',
      'Iluminación LED empotrada de bajo consumo'
    ],
    afterImage: photoRecamaraClima,
    featured: false
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: '¿Cómo solicito una cotización para mi proyecto?',
    answer: 'Puedes solicitar tu cotización directamente enviándonos un mensaje por WhatsApp al +52 997 120 9810 o a través de los botones del sitio. Nos comunicaremos contigo para conocer las dimensiones, ideas o necesidades de tu obra.'
  },
  {
    question: '¿Realizan visitas técnicas en sitio para evaluar la obra?',
    answer: 'Sí. Para proyectos en Mérida, zona metropolitana y municipios de Yucatán realizamos visitas técnicas en sitio para tomar medidas exactas, evaluar condiciones y preparar una propuesta sin sorpresas.'
  },
  {
    question: '¿Qué incluye la propuesta o presupuesto?',
    answer: 'Nuestros presupuestos son detallados por partidas: demoliciones, cimentación, albañilería, acabados, instalaciones y cancelería, especificando materiales de calidad y tiempos estimados de entrega.'
  },
  {
    question: '¿Trabajan en todo Yucatán y el sureste?',
    answer: 'Sí, cubrimos Mérida, Progreso, Kanasín, Valladolid, Tizimín y municipios de Yucatán, con disponibilidad para proyectos específicos en Campeche y Quintana Roo.'
  },
  {
    question: '¿Qué garantía ofrecen en sus trabajos?',
    answer: 'Garantizamos la calidad de la mano de obra y el correcto proceso constructivo. Entregamos cada obra con revisión minuciosa y respaldo post-entrega.'
  }
];
