import { apiClient } from './client';
import { Strain } from '@/types';

export const strainsApi = {
  getAll: async (params?: { type?: string; effect?: string; search?: string }): Promise<Strain[]> => {
    const response = await apiClient.get('/strains', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Strain> => {
    const response = await apiClient.get(`/strains/${id}`);
    return response.data;
  },

  search: async (query: string): Promise<Strain[]> => {
    const response = await apiClient.get('/strains/search', { params: { q: query } });
    return response.data;
  },
};
