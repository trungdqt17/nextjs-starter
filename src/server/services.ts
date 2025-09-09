import { $api } from '@/lib/api';
import type { UserDto } from '@/types/model';

export const userService = {
  // Get user by ID - using the actual API endpoint
  getUserById: async (id: number): Promise<UserDto | undefined> => {
    const { data, error } = await $api.useQuery('get', '/users/{id}', {
      params: {
        path: { id },
        header: { 'x-app-lang': 'en' },
      },
    });
    if (error) throw error;
    return data;
  },
};
