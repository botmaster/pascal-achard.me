// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
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
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      container: '15px',
      'container-md': '30px',
      gutter: '15px',
      'gutter-md': '15px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
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
      body: {
        background: '#f2f4f8',
        backgrounddark: '#2E3440',
      },
      'red-oneplus': '#f50514',
      polarnight: {
        'nord-0': '#2E3440',
        'nord-1': '#3B4252',
        'nord-2': '#434C5E',
        'nord-3': '#4C566A',
      },
      snowstorm: {
        'nord-4': '#D8DEE9',
        'nord-5': '#E5E9F0',
        'nord-6': '#ECEFF4',
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
  variants: {},
  plugins: [],
  mode: 'jit',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'content/**/*.md',
    ],
    safelist: [],
  },
  future: {
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
}
