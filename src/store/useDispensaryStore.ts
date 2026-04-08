import { create } from 'zustand';
import { Dispensary } from '@/types';

interface DispensaryState {
  dispensaries: Dispensary[];
  selectedDispensary: Dispensary | null;
  userLocation: { lat: number; lng: number } | null;
  isLoading: boolean;
  error: string | null;

  setDispensaries: (dispensaries: Dispensary[]) => void;
  setSelectedDispensary: (dispensary: Dispensary | null) => void;
  setUserLocation: (location: { lat: number; lng: number } | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDispensaryStore = create<DispensaryState>((set) => ({
  dispensaries: [],
  selectedDispensary: null,
  userLocation: null,
  isLoading: false,
  error: null,

  setDispensaries: (dispensaries) => set({ dispensaries }),
  setSelectedDispensary: (selectedDispensary) => set({ selectedDispensary }),
  setUserLocation: (userLocation) => set({ userLocation }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
