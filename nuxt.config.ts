// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";
import PrimevueTheme from "./utils/primevue-theme";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@primevue/nuxt-module"],
  runtimeConfig:{
    public:{
      apiUrl: process.env.NUXT_API_URL
    }
  },
  primevue: {
    autoImport: true,
    options: {
      unstyled: false,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".my-app-dark",
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
