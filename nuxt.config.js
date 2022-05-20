const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://js.stripe.com/v3/' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['uikit/dist/css/uikit.min.css', 'uikit/dist/css/uikit.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/uikit.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo', '@nuxt/http'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${strapiBaseUri}/graphql`,
      },
    },
  },
  env: {
    strapiBaseUri,
    stripePublishable:
      process.env.STRIPE_PUBLISHABLE ||
      'pk_test_51KyyanBRw7pg1F5GFqruQ8GGkynHzcy5hWeLnZCs3OXlS35TrnkE3PaWEIVsUjdktK5aGkz565XPoUAM0jEommMK00cO6enrpT',
  },
  http: {
    baseURL: `${strapiBaseUri}/api`,
    browserBaseURL: `${strapiBaseUri}/api`,
  },
}
