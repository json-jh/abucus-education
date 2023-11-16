// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  css: ['~/assets/css/main.scss'],
  ssr: false,

  content: {
    documentDriven: {
      layoutFallbacks: ['default']
    }
  }
})
