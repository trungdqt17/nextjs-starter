import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'tags',
      target: 'src/server/services',
      schemas: 'src/types/models',
      client: 'react-query',
      override: {
        mutator: {
          path: 'src/lib/fetch-instance.ts',
          name: 'fetchInstance',
        },
        query: {
          useQuery: true,
          useMutation: true,
          shouldSplitQueryKey: true,
          shouldExportQueryKey: true,
          signal: true, // Enable AbortController support
        },
      },
      clean: true,
    },
    input: {
      target: process.env.OPENAPI_SCHEMA || '',
    },
    hooks: {
      afterAllFilesWrite: 'yarn format',
    },
  },
});
