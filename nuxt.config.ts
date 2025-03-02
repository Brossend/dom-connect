import checker from "vite-plugin-checker";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "nuxt-typed-router",
    "@nuxt/image",
    "dayjs-nuxt",
    "nuxt-viewport",
  ],
  css: ["@/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/variables.scss" as *;
            @use "@/assets/styles/mixins.scss" as *;
          `,
        },
      },
    },
    plugins: [
      checker({
        typescript: true,
        eslint: {
          lintCommand: "eslint --ext .ts,.tsx,.vue",
          useFlatConfig: true,
        },
        overlay: true,
        terminal: true,
      }),
    ],
  },
  // @ts-ignore - Waiting for @nuxt/fonts type update
  fonts: {
    families: [
      {
        name: "montserrat",
        provider: "google",
        weights: [500, 600, 700],
      },
    ],
  },
});
