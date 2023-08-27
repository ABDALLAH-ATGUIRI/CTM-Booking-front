// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  elementPlus: {},
  $production: {
    routeRules: {
      "/**": { isr: true }
    }
  },
  $development: {},
  tailwindcss: {},
  devtools: { enabled: true }
});
