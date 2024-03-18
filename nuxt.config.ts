export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/supabase",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  runtimeConfig: {
    publick: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  app: {
    head: {
      script: [{ src: "https//js.stripe.com/v3/", defer: true }],
    },
  },
});
