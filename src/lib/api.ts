import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { env } from '@/env/client';
import type { paths } from '@/types/openapi';

// Create openapi-fetch client with default config using validated env vars
// Note: Only NEXT_PUBLIC_ variables are available on the client
const fetchClient = createFetchClient<paths>({
  baseUrl: env.NEXT_PUBLIC_API_URL,
});

// Add authentication middleware
fetchClient.use({
  onRequest({ request }) {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
    return request;
  },
  onResponse({ response }) {
    // Handle common errors
    if (response.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return response;
  },
});

// Create openapi-react-query client
export const $api = createClient(fetchClient);

// Export the fetch client for direct use if needed
export const api = fetchClient;
