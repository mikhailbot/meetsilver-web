module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MeetSilver | Scheduling meetings, done simply!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scheduling meetings, done simply!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2ECC71' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [ 'axios', 'moment', 'lodash' ],
    babel: {
      plugins: [
        ['component', [{
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-default'
        }]]
      ]
    }
  },
  /*
  ** Global css
  */
  css: [
    { src: 'assets/main.scss', lang: 'scss' },
    'pikaday/css/pikaday.css'
  ],
  /*
  ** Environment Variables
  */
  env: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Plugins
  */
  plugins: [ '~plugins/axios', '~plugins/element-ui', '~plugins/lodash' ]
}
