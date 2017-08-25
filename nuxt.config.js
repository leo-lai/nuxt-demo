// const apiConfig = require('./app.config')

module.exports = {
  // https://github.com/isaacs/node-lru-cache#options
  cache: {
    max: 20,
    maxAge: 600000
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#20a0ff' },
  /*
  ** Headers of the page
   * https://github.com/declandewet/vue-meta#recognized-metainfo-properties
  */
  head: {
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'zh'
    },
    title: '贵州优视一号生物科技有限公司',
    titleTemplate: '%s|贵州优视一号生物科技有限公司',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'fragment', content: '!' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { hid: 'keywords', name: 'keywords', content: '贵州优视一号生物科技有限公司,优视一号,U视一号,U视一号官网,U视一号商城,舒眼喷雾,U视喷喷,保护眼睛,缓解眼睛干涩,缓解视疲劳,缓解眼睛酸胀,系列护眼产品,改善视力模糊,保护视力健康,改善眼睛充血,首款舒眼喷雾,咨询电话400-180-6900' },
      { hid: 'description', name: 'description', content: '贵州优视一号生物科技有限公司,优视一号,U视一号,U视一号官网,U视一号商城,舒眼喷雾,U视喷喷,保护眼睛,缓解眼睛干涩,缓解视疲劳,缓解眼睛酸胀,系列护眼产品,改善视力模糊,保护视力健康,改善眼睛充血,首款舒眼喷雾,咨询电话400-180-6900' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.ushiyihao.com/favicon.png' }
    ],
    script: [
      // { type: 'text/javascript', src: 'https://static.ushiyihao.com/feature.min.js'},
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  /*
  ** Customize css
  */
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  /*
  ** plugins
  */
  plugins: [
    {src: '~/plugins/element-ui.js', ssr: true},
    {src: '~/plugins/utils.js', ssr: false}
    // {src: '~/plugins/baidu-seo.js', ssr: false}
  ],
  /*
  ** https://github.com/nuxt-community/axios-module
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL,
    credentials: false,
    proxyHeaders: false
  },
  */
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    vendor: ['babel-polyfill', 'axios', 'element-ui', 'vue-scrollto'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
