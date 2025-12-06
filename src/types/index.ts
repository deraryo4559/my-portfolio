export type Page = 'home' | 'works' | 'service' | 'news' | 'contact';
export type WorkCategory = 'All' | 'Cityscape' | 'Nature' | 'Portrait' | 'Commercial';

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  content: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: WorkCategory;
  imageColor: string;
  height: string;
  date: string;
  equipment: string;
  location: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

