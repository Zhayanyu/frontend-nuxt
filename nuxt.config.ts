// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // ssr: false,
  devtools: { enabled: false },
  srcDir: 'app',
  css: [
    '~/assets/main.less'
  ],
  modules: [
    '@vant/nuxt',
    '@pinia/nuxt'
  ],
  app: {
    baseURL: './'
  },
  vite: {
    base: './'
  },
  experimental: {
    payloadExtraction: false
  }
})
