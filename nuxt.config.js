export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        // this htmlAttrs you need
        htmlAttrs: {
            lang: 'fr-fr',
        },
        title: 'Pascal achard - SENIOR FRONTEND DEVELOPER',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { name: 'google-site-verification', content: '_ylnpIhPAnWMoDDWYnai5HYIKcjxnkqFS8yeNf75z-0'},
            { property: 'og:image', content: 'https://www.pascal-achard.me/social-fb.jpg'},
            { property: 'twitter:image', content: 'https://www.pascal-achard.me/social-fb.jpg'}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/scss/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-purgecss',
        '@nuxtjs/google-analytics'
    ],
    purgeCSS: {},
    googleAnalytics: {
        id: 'UA-143785757-1'
    },
    generate: {
        fallback: true
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        analyze: true,
        extractCSS: {
            spitChunks: true
        },
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js'
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
