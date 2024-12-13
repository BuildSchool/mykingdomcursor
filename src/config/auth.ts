import { env } from './env';

export const authConfig = {
  google: {
    clientId: env.google.clientId,
    clientSecret: env.google.clientSecret,
    redirectUrl: `${env.app.url}/auth/callback`
  }
} as const;