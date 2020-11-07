export default {
    target: "static",
    /*
     ** Headers of the page
     */
    head: {
        // this htmlAttrs you need
        htmlAttrs: {
            lang: "fr-fr"
        },
        bodyAttrs: {
            /* id: 'js-scroll' */
        },
        title:
            "Pascal achard - SENIOR FRONTEND DEVELOPER - FULL STACK (NODE.JS/VUE.JS)",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            },
            {
                name: "google-site-verification",
                content: "_ylnpIhPAnWMoDDWYnai5HYIKcjxnkqFS8yeNf75z-0"
            },
            {
                property: "og:image",
                content: "https://www.pascal-achard.me/social-fb.jpg"
            },
            {
                property: "twitter:image",
                content: "https://www.pascal-achard.me/social-fb.jpg"
            },
            {
                name: "msapplication-TileColor",
                content: "#da532c"
            },
            {
                name: "theme-color",
                content: "#ffffff"
            }
        ],
        link: [
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            },
            {
                rel: "manifest",
                href: "/site.webmanifest"
            },
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5"
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color:
            "#333333" /*,
        height: '35px',
        duration: 3000,
        throttle: 0,
        continuous: true */
    },
    /*
     ** Global CSS
     */
    css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /**
     * Nuxt.js buld modules
     */
    buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/robots",
        "@nuxtjs/sitemap"
    ],
    generate: {
        fallback: true
    },
    robots: {
        UserAgent: "*",
        Disallow: ["/Grid", "/Typo"]
    },
    sitemap: {
        hostname: "https://www.pascal-achard.me/",
        exclude: ["/Grid", "/Typo"]
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
        analyze: false,
        extractCSS: true,
        /*
         ** You can extend webpack config here
         */
        extend() {}
    }
};
