export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'MILAN - Front-End Developer with 4 years of experience',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I am a 19 years old Front-End Developer with 4 years of experience ¿Do you want to work with me?',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'INDEX, FOLLOW',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'MILAN',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/css/theme.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  pwa: {
    icon: {
      fileName: 'logo.png',
    },
    meta: {
      name: 'MILAN',
      description:
        '¿A 19 years old developer with 4 years of experience? Awesome',
      ogSiteName: 'MILAN - Front-End Web Developer',
      ogTitle: 'MILAN',
      ogDesceription:
        '¿A 19 years old Developer with 4 years of experience? Awesome',
    },
    manifest: {
      name: 'MILAN',
      lang: 'en',
    },
  },
}
