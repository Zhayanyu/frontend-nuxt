import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    name: 'Eduardo',
    isAdmin: true,
    isMobile: false,
    isDark: false,
    statusBarHeight: 45.0,
    noTop:false,
    showFooter:true,
  }),

  actions: {
    setIsMobile(isMobile: any) {
      this.isMobile = isMobile;
    },
    setStatusBarHeight(height: any) {
      this.statusBarHeight = height;
    },
    setLayout(data: any) {
      this.statusBarHeight = data['statusBarHeight'];
      this.isDark = false;
    },
  },
});
