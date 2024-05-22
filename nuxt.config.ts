export default defineNuxtConfig({
    css: ["@/assets/scss/app.scss"],
    ssr:false,
    modules:[
        "@nuxtjs/i18n",
        [
        "@pinia/nuxt",
          {
            autoImports: ["defineStore", "acceptHMRUpdate"],
          },
        ],
      ],
    
      plugins:[
        {src: './plugins/useBootstrap.client.ts', mode: 'client'},

             
      ],
      i18n: {
        strategy: "prefix_except_default",
        defaultLocale: "en",
        locales: [
          {
            icon:'flag-icon-us', 
            code: "en",
            name: "English",
            short:'(US)',
          },
          {
            icon:'flag-icon-fr',
            code: "fr",
            name: "Français",
          },
          {
            icon:'flag-icon-es',
            code: "es",
            name: "Español",
          },
          {
            icon:'flag-icon-pt',
            short:'(BR)',
            code: "pt",
            name: "Português",
          },
        ],
        vueI18n: "./i18n.config.ts"
      },  
})
