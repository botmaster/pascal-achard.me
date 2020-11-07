// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                display: ["rubik_lightregular", "sans-serif"],
                body: ["rubikregular", "sans-serif"],
                "rubik-black": ["rubik_blackregular", "sans-serif"],
                "rubik-bold": ["rubikbold", "sans-serif"],
                "rubik-medium": ["rubik_mediumregular", "sans-serif"],
                "rubik-regular": ["rubikregular", "sans-serif"],
                "rubik-light": ["rubik_lightregular", "sans-serif"]
            },

            spacing: {
                container: "15px",
                "container-md": "30px",
                gutter: "15px",
                "gutter-md": "15px"
            },
            colors: {
                "red-oneplus": "#f50514"
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js"
        ]
    },
    future: {
        purgeLayersByDefault: true
    }
};
