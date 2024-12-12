// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules:[
    '@nuxt/ui',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@formkit/auto-animate/nuxt',
  ],

  supabase: {
    redirect: false
  },

  compatibilityDate: '2024-12-08',
})