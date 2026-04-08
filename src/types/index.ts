// ─── Strain ───────────────────────────────────────────────
export interface Strain {
  id: string;
  name: string;
  type: 'Indica' | 'Sativa' | 'Hybrid';
  thc: number;
  cbd: number;
  effects: string[];
  flavors: string[];
  description: string;
  imageUrl?: string;
  rating?: number;
}

// ─── Dispensary ───────────────────────────────────────────
export interface Dispensary {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  website?: string;
  hours: Record<string, string>;
  rating: number;
  reviewCount: number;
  distance?: number;
  lat: number;
  lng: number;
  isOpen?: boolean;
}

// ─── User ─────────────────────────────────────────────────
export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  preferences: UserPreferences;
  createdAt: string;
}

export interface UserPreferences {
  favoriteStrains: string[];
  favoriteDispensaries: string[];
  defaultLocation?: { lat: number; lng: number };
}

// ─── Journal ──────────────────────────────────────────────
export interface JournalEntry {
  id: string;
  userId: string;
  strainId?: string;
  strainName?: string;
  method: 'flower' | 'vape' | 'edible' | 'concentrate' | 'tincture' | 'topical';
  dose?: string;
  effects: {
    relaxation: number;    // 0-10
    focus: number;
    creativity: number;
    energy: number;
    happiness: number;
    sleepiness: number;
  };
  mood?: string;
  notes?: string;
  createdAt: string;
}

// ─── Navigation ───────────────────────────────────────────
export type RootTabParamList = {
  Explore: undefined;
  Dispensaries: undefined;
  Journal: undefined;
  Profile: undefined;
};
