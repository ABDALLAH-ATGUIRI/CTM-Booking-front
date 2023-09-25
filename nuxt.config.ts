// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  elementPlus: {},
  $production: {
    routeRules: {
      "/**": { isr: true }
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  $development: {},
  tailwindcss: {},
  devtools: { enabled: true }
});
