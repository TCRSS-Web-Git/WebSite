// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cookiecdn.com/cwc.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cookiecdn.com/configs/r9JnMST1m9sdxjX6sSxwBavD',
          type: 'text/javascript',
          id: 'cookieWow',
          'data-cwcid': 'r9JnMST1m9sdxjX6sSxwBavD'
        }
      ]
    },
  },

  devtools: {enabled: true},
  modules: [
    "@nuxt/ui",
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    process.env.BUGSNAG_API_KEY ? 'nuxt-bugsnag' : null,
  ].filter(Boolean),
  bugsnag: {
    publishRelease: true,
    config: {
      apiKey: process.env.BUGSNAG_API_KEY as string,
      enabledReleaseStages: ['staging', 'production'],
      releaseStage: process.env.APP_ENV,
    },
  },

  plugins: ['~/plugins/swiper.client.js'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vite: {
    server: {
      hmr: {
        host: 'localhost',
        protocol: 'wss',
      },
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL || 'https://api.tcrss.test/api/v1',
      clientUrl: process.env.CLIENT_URL || 'https://app.tcrss.test',
    },
  },

  colorMode: {
    preference: 'light',
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-10-21',
  googleFonts: {
    download: true,
    families: {
      'IBM+Plex+Sans+Thai': [400, 600, 700],
    },
  },
  i18n: {
    baseUrl: process.env.CLIENT_URL || 'https://admin.tcrss.test',
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        files: [
          'en/common.ts',
          'en/policy.ts',
          'en/news.ts',
          'en/about-us.ts',
          'en/sustainability.ts',
          'en/contact-us',
          'en/home.ts',
          'en/careers.ts',
          'en/component.ts',
        ],
      },
      {
        code: 'th',
        iso: 'th-TH',
        name: 'ไทย',
        files: [
          'th/common.ts',
          'th/policy.ts',
          'th/news.ts',
          'th/about-us.ts',
          'th/sustainability.ts',
          'th/contact-us',
          'th/home.ts',
          'th/careers.ts',
          'th/component.ts',
        ],
      },
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    defaultLocale: 'th',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root', // recommended
    },
  },
})
