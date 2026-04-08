import { create } from 'zustand';
import { Strain } from '@/types';

interface StrainState {
  strains: Strain[];
  favorites: string[];
  searchQuery: string;
  filterType: 'All' | 'Indica' | 'Sativa' | 'Hybrid';
  isLoading: boolean;
  error: string | null;

  setStrains: (strains: Strain[]) => void;
  toggleFavorite: (strainId: string) => void;
  setSearchQuery: (query: string) => void;
  setFilterType: (type: StrainState['filterType']) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStrainStore = create<StrainState>((set) => ({
  strains: [],
  favorites: [],
  searchQuery: '',
  filterType: 'All',
  isLoading: false,
  error: null,

  setStrains: (strains) => set({ strains }),
  toggleFavorite: (strainId) =>
    set((state) => ({
      favorites: state.favorites.includes(strainId)
        ? state.favorites.filter((id) => id !== strainId)
        : [...state.favorites, strainId],
    })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilterType: (filterType) => set({ filterType }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
