/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#1A76D2',
          gray: '#757575',
          lightGray: '#D5D5D5',
          aliceBlue: '#FFFFFF',
          green: '#388E3C',
        },
        screens: {
          lgMax: { max: '1023px' },
          mdMax: { max: '767px' },
          smMax: { max: '639px' },
        },
        margin: {
          sm: '8px',
          md: '16px',
          lg: '30px',
          xl: '48px',
         }
      },
    },
  },
  plugins: [],
}