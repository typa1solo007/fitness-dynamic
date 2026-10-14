export interface ClubZone {
  id: string;
  code: string;
  title: string;
  badge: string;
  badgeType: 'volt' | 'flame' | 'cyan';
  shortDesc: string;
  features: string[];
  equipmentOrSpecs: string[];
  imageUrl: string;
}

export interface TrainingProgram {
  id: string;
  code: string;
  title: string;
  category: 'Сила и Кардио' | 'Восстановление и Растяжка' | 'Спецпрограммы';
  description: string;
  intensity: number; // 1 to 5
  durationMin: number;
  tags: string[];
  instructor: string;
  imageUrl: string;
}

export interface PricingTariff {
  id: string;
  tierCode: string;
  name: string;
  badge?: string;
  isHit?: boolean;
  priceDisplay: string;
  periodText: string;
  subtitle: string;
  features: {
    included: boolean;
    text: string;
  }[];
}

export interface PromoOffer {
  id: string;
  iconName: 'gift' | 'creditCard' | 'dance';
  title: string;
  badge: string;
  description: string;
  benefitText: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Яндекс Карты' | '2ГИС';
  tag: string;
  text: string;
  avatarLetter: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  goal: string;
  comments?: string;
}
