import { apiClient } from './client';
import { Dispensary } from '@/types';

export const dispensariesApi = {
  getNearby: async (lat: number, lng: number, radius = 25): Promise<Dispensary[]> => {
    const response = await apiClient.get('/dispensaries/nearby', {
      params: { lat, lng, radius },
    });
    return response.data;
  },

  getById: async (id: string): Promise<Dispensary> => {
    const response = await apiClient.get(`/dispensaries/${id}`);
    return response.data;
  },
};
