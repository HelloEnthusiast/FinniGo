
import React from 'react';
import { 
  PlaneLanding, 
  Home, 
  GraduationCap, 
  Briefcase, 
  Scale, 
  Languages, 
  HeartPulse, 
  CreditCard 
} from 'lucide-react';
import { NavItem, Service } from './types';

export const COLORS = {
  primary: '#D62828', // Red (for main icon elements and highlights)
  secondary: '#000000', // Black (for text and strong accents)
  accent: '#FFFFFF', // White (background or negative space)
  darkRed: '#B22222', // Darker Red (for shadows or subtle gradients)
  lightRed: '#FF4C4C', // Lighter Red (for hover effects or highlights)
};


export const NAV_LINKS: NavItem[] = [
  // { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'About', href: '#/about' },
  // { label: 'FinniGuide AI', href: '#/ai-guide' },
  { label: 'Contact', href: '#/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'airport-pickup',
    title: 'Post-Arrival Concierge',
    description: 'Airport reception, housing keys collection, and essential survival kit delivery upon arrival.',
    icon: 'PlaneLanding',
    category: 'arrival'
  },
  {
    id: 'housing',
    title: 'Housing Assistance',
    description: 'Expert guidance through HOAS, PSOAS, and private market rentals to secure your home in Finland.',
    icon: 'Home',
    category: 'arrival'
  },
  {
    id: 'academic',
    title: 'Academic Navigation',
    description: 'Course registration, credit transfers, and semester planning support tailored to Finnish polytechnics.',
    icon: 'GraduationCap',
    category: 'academic'
  },
  {
    id: 'jobs',
    title: 'Career & Networking',
    description: 'Finnish-style CV building, LinkedIn optimization, and connections for part-time jobs and internships.',
    icon: 'Briefcase',
    category: 'lifestyle'
  },
  {
    id: 'legal',
    title: 'Legal & Permits',
    description: 'Support for residence permit renewals, Kela applications, and DVV registration (Finnish ID).',
    icon: 'Scale',
    category: 'legal'
  },
  {
    id: 'banking',
    title: 'Financial Setup',
    description: 'Step-by-step guidance for opening Finnish bank accounts and setting up MobilePay/Online Banking.',
    icon: 'CreditCard',
    category: 'lifestyle'
  },
  {
    id: 'health',
    title: 'YTHS & Healthcare',
    description: 'Navigating the Finnish Student Health Service and public healthcare system during your stay.',
    icon: 'HeartPulse',
    category: 'lifestyle'
  },
  {
    id: 'culture',
    title: 'Finnish Immersion',
    description: 'Weekly Finnish language cafes and cultural integration workshops to help you thrive socially.',
    icon: 'Languages',
    category: 'lifestyle'
  }
];

export const getIcon = (name: string, size = 24) => {
  switch (name) {
    case 'PlaneLanding': return <PlaneLanding size={size} />;
    case 'Home': return <Home size={size} />;
    case 'GraduationCap': return <GraduationCap size={size} />;
    case 'Briefcase': return <Briefcase size={size} />;
    case 'Scale': return <Scale size={size} />;
    case 'Languages': return <Languages size={size} />;
    case 'HeartPulse': return <HeartPulse size={size} />;
    case 'CreditCard': return <CreditCard size={size} />;
    default: return <GraduationCap size={size} />;
  }
};
