export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Klasik' | 'Mevsimlik' | 'Özel Reçete';
  tag: string;
  ingredients: string[];
  isFeatured: boolean;
  image: string;
  tastingNotes?: string;
  accentColor?: string;
}

export interface HistoryMilestone {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface ArtisanValue {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ContactDetails {
  brandName: string;
  address: string;
  district: string;
  city: string;
  workingHours: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
}
