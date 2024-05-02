import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Horse Valley Resort',
  webDir: 'dist',
  'plugins': {
    "Camera": {
      "SplashScreen": {
        "launchShowDuration": 1500
      },
      "ios": {
        "permissions": {
          "photo-library": {
            "description": "Allow access to photo library"
          }
        }
      }
    }
  }
};

export default config;
