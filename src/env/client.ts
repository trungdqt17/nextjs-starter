import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // Public API URL for client-side requests
    NEXT_PUBLIC_API_URL: z.url().optional(),

    // App configuration
    NEXT_PUBLIC_APP_NAME: z.string().default('Next.js Starter'),
    NEXT_PUBLIC_APP_VERSION: z.string().default('1.0.0'),
  },

  /*
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * Vercel Edge Functions) or client-side so we need to destruct manually.
   *
   * For Next.js >= 13.4.4, you only need to destructure client variables:
   */
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
  },

  /*
   * If you're using Next.js < 13.4.4, uncomment the runtimeEnv and comment out experimental__runtimeEnv:
   */
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  //   WATCHBOT_API_URL: process.env.WATCHBOT_API_URL,
  //   NODE_ENV: process.env.NODE_ENV,
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //   NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  //   NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
  // },

  /*
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
