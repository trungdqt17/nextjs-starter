import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {},

  /*
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * Vercel Edge Functions) or client-side so we need to destruct manually.
   *
   * For Next.js >= 13.4.4, you only need to destructure client variables:
   */
  experimental__runtimeEnv: process.env,

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
  // emptyStringAsUndefined: true,
});
