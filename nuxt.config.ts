// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.dev },

  modules: [
    '@nuxt/image',
  ],

  image: {
    quality: 90,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    directus: {
      baseURL: 'http://localhost:8055/assets/',
    }
  }

})
