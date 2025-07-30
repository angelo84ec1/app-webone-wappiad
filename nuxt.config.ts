// https://nuxt.com/docs/api/configuration/nuxt-config
import lottie from "lottie-web";
import { defineNuxtModule } from "nuxt";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      }),
    ],
  },

  ssr: false,
  
  // 🔧 CONFIGURACIÓN DE PUERTO PARA WAPPIAD
  nitro: {
    port: 3001,
    host: '0.0.0.0'
  },

  app: {
    head: {
      title: "WAPPIAD S.A.S. Web - App - Inteligencia Artifical - Digital - Data - Entrenamiento de Agentes IA - Programadores Full Stack de Inteligencia Artificial - Desarrollo de Apps - Programadores de Inteligencia Artificial - Expertos de IA - Expertos AI",
      htmlAttrs: {
        lang: "es",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Desarrollo de web a la medida - Desarrollo de Apps - Entrenamiento de Agentes IA - Programadores Full Stack - Desarrollo Sistemas SAAS - Arquitectos de Cloud.",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "keywords",
          content:
            "Desarrollo web - Desarrollo apps- Dntrenamiento de agentes con inteligencia artificial - Bots en whatsapp - Sistema de agendamiento de citas con agentes de IA en whatsapp",
        }, // Palabras clave añadidas
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://www.paypal.com/sdk/js?client-id=test&currency=USD",
          // type: "text/javascript",
          async: true,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.STRAPI_URL || "http://localhost:1337",
      MAILTO: process.env.MAILTO || "websecuador.net@gmail.com",
      pagomedioToken: process.env.PAGOMEDIO_TOKEN,
      GOOGLE_MAPS_API: "AIzaSyAMQ-DzRcCKRrOWJWjPkPSTUHqwyQkyVH8",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/global.css",
    "~/assets/css/main.css",
    "~/assets/scss/_swiper.scss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    "~/plugins/toastification.client.ts",
    // "~/plugins/pinia-persist.client.ts",
    // "@/plugins/vue-google-map.client.ts",
  ],

  components: true,

  // 🚨 MÓDULOS - SE REMOVIÓ "nuxt-proxy" TEMPORAL
  modules: [
    "@pinia/nuxt", 
    "@sidebase/nuxt-pdf", 
    // "nuxt-proxy", // ❌ COMENTADO TEMPORALMENTE
    "@nuxtjs/i18n"
  ],

  // 🔧 CONFIGURACIÓN DE PROXY (si la necesitas más adelante)
  // proxy: {
  //   '/api/': {
  //     target: 'http://localhost:8080', // Tu servidor API
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api/': '/api/'
  //     }
  //   }
  // },

  swiper: {},

  build: {
    transpile: ["defu"],
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  carousel: {
    prefix: "MyPrefix",
  },

  router: {
    options: {
      sensitive: false,
      linkActiveClass: "drawer__link--active",
    },
  },
});