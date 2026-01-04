import { defineStore } from 'pinia'

export const useAppStore = defineStore('config', {
  state: () => ({
    appName: (import.meta.env.VITE_APP_NAME as string) || 'App',
    appSkin: (import.meta.env.VITE_SKIN as string) || '',
  }),
  actions: {
    setIsMobile(isMobile: any) {
      // implementation
    },
    setStatusBarHeight(height: any) {
      // implementation
    },
  },
});
