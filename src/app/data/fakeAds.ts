export interface FakeAd {
  id: string;
  advertiser: string;
  headline: string;
  bodyText: string;
  callToAction: string;
  imageUrl: string;
  clickUrl: string;
}

export const fakeDisplayAds: FakeAd[] = [
  {
    id: 'ad1',
    advertiser: 'North Georgia Ford',
    headline: 'All-New 2026 F-150',
    bodyText: 'Experience the toughness and capability of America\'s best-selling truck. 0% APR for 60 months on select models.',
    callToAction: 'Visit Us Today',
    imageUrl: 'https://images.unsplash.com/photo-1769142538767-7854448ad8fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMGRlYWxlcnNoaXB8ZW58MXx8fHwxNzc0MzAxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/northgeorgiaford'
  },
  {
    id: 'ad2',
    advertiser: 'The Steak House Gainesville',
    headline: 'Fresh Seafood Friday',
    bodyText: 'Join us every Friday for fresh Gulf seafood specials. Hand-cut steaks and local ingredients. Make your reservation today!',
    callToAction: 'Reserve Now',
    imageUrl: 'https://images.unsplash.com/photo-1766812782166-e243111f703d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc3NDI5MTEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/steakhouse'
  },
  {
    id: 'ad3',
    advertiser: 'Lake Lanier Realty',
    headline: 'Waterfront Living Awaits',
    bodyText: 'Discover your dream home on beautiful Lake Lanier. Over 50 lakefront properties available. Schedule a tour today!',
    callToAction: 'View Properties',
    imageUrl: 'https://images.unsplash.com/photo-1688143242905-2c7de6c33cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaG9tZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDMwMTkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/lakelanierrealty'
  },
  {
    id: 'ad4',
    advertiser: 'Smith & Associates Law',
    headline: 'Experienced Injury Attorneys',
    bodyText: 'Over 30 years serving Northeast Georgia. No fee unless we win. Free consultation for accident victims.',
    callToAction: 'Call Now',
    imageUrl: 'https://images.unsplash.com/photo-1635845080335-dcfe06a0fcf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBhdHRvcm5leXxlbnwxfHx8fDE3NzQzMDE5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/smithlaw'
  },
  {
    id: 'ad5',
    advertiser: 'Northeast Georgia Medical Center',
    headline: 'Advanced Heart Care Close to Home',
    bodyText: 'Board-certified cardiologists using the latest technology. Comprehensive cardiac services in Gainesville and Braselton.',
    callToAction: 'Learn More',
    imageUrl: 'https://images.unsplash.com/photo-1676288507025-e0f001be9926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0MjY1OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/nghs'
  },
  {
    id: 'ad6',
    advertiser: 'Home Depot Gainesville',
    headline: 'Spring Home Projects Start Here',
    bodyText: 'Get everything you need for your spring projects. Expert advice, quality products, and pro services available.',
    callToAction: 'Shop Now',
    imageUrl: 'https://images.unsplash.com/photo-1599619585749-a6cfd38d358a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW1wcm92ZW1lbnQlMjB0b29sc3xlbnwxfHx8fDE3NzQzMDE5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    clickUrl: 'https://example.com/homedepot'
  }
];

// Rotate through ads
let currentAdIndex = 0;
export const getNextAd = (): FakeAd => {
  const ad = fakeDisplayAds[currentAdIndex];
  currentAdIndex = (currentAdIndex + 1) % fakeDisplayAds.length;
  return ad;
};

export const getRandomAd = (): FakeAd => {
  return fakeDisplayAds[Math.floor(Math.random() * fakeDisplayAds.length)];
};
