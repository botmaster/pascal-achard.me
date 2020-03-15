module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ["prettier"],
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "eslint-config-prettier",
        "eslint-config-prettier/vue"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "prettier/prettier": "warn"
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
