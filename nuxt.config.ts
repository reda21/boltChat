export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },
  app: {
    head: {
      title: 'Chat App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Modern chat application built with Nuxt 3' }
      ]
    }
  },
  devtools: { enabled: true }
})