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
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'MILAN - Front-End Developer with 5 years of experience',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I am a 20 years old Front-End Developer with 5 years of experience ¿Do you want to work with me?',
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
      {
        property: 'og:title',
        content: 'MILAN - Front-End Developer with 5 years of experience',
      },
      {
        property: 'og:description',
        content:
          'I am a 20 years old Front-End Developer with 5 years of experience ¿Do you want to work with me?',
      },
      {
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FDSC_0448(1).JPG?alt=media&token=734eeac2-8e14-461e-b96a-93ea4b48a75c',
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
        '¿A 20 years old developer with 5 years of experience? Awesome',
      ogSiteName: 'MILAN - Front-End Web Developer',
      ogTitle: 'MILAN',
      ogDesceription:
        '¿A 20 years old Developer with 5 years of experience? Awesome',
    },
    manifest: {
      name: 'MILAN',
      lang: 'en',
    },
  },
}
