import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Yoga Application',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      clientId: 'YOUR-WEB-CLIENT-ID.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
