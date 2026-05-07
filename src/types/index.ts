export type Page =
  | 'home'
  | 'works'
  | 'service'
  | 'about'
  | 'contact'
  | 'news'
  | 'photographer'
  | 'ai-photographer';

export type WorkCategory =
  | 'All'
  | 'Portrait'
  | 'Landscape'
  | 'Aerial'
  | 'Commercial'
  | 'Event';

export interface WorkItem {
  id: number;
  title: string;
  category: Exclude<WorkCategory, 'All'>;
  image: string;
  featured?: boolean;
  featuredSize?: 'large';
  orientation: 'landscape' | 'portrait' | 'square' | 'wide';
  date: string;
  location: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  label: string;
  price: string;
  description: string;
  uses: string[];
}

export interface FlowItem {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
