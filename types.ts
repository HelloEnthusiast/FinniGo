
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'arrival' | 'academic' | 'lifestyle' | 'legal';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
