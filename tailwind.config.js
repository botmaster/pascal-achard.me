// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['rubik_lightregular', 'sans-serif'],
        body: ['rubikregular', 'sans-serif'],
        'rubik-black': ['rubik_blackregular', 'sans-serif'],
        'rubik-bold': ['rubikbold', 'sans-serif'],
        'rubik-medium': ['rubik_mediumregular', 'sans-serif'],
        'rubik-regular': ['rubikregular', 'sans-serif'],
        'rubik-light': ['rubik_lightregular', 'sans-serif'],
      },

      spacing: {
        container: '15px',
        'container-md': '30px',
        gutter: '15px',
        'gutter-md': '15px',
      },
      colors: {
        'red-oneplus': '#f50514',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#151414',
        },
        polarnight: {
          'nord-0': '#2e3440',
          'nord-1': '#3b4252',
          'nord-2': '#434c5e',
          'nord-3': '#4c566a',
        },
        snowstorm: {
          'nord-4': '#d8dee9',
          'nord-5': '#e5e9f0',
          'nord-6': '#eceff4',
        },
        frost: {
          'nord-7': '#8FBCBB',
          'nord-8': '#88C0D0',
          'nord-9': '#81A1C1',
          'nord-10': '#5E81AC',
        },
        aurora: {
          'nord-11': '#BF616A',
          'nord-12': '#D08770',
          'nord-13': '#EBCB8B',
          'nord-14': '#A3BE8C',
          'nord-15': '#B48EAD',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    safelist: ['ml-6'],
  },
  future: {
    purgeLayersByDefault: true,
  },
}
