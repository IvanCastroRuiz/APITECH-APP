/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'russo': ['"Russo One"', 'sans-serif'], 
        screens: {
          'movil': {'max': '767px'},
          'tablet': {'min': '768px', 'max': '1024px'},
          'portatil': {'min': '1025px', 'max': '1366px'},
          'escritorio': {'min': '1367px'},
        },//
      },
      maxWidth: {
        'content-desktop': '1366px',
        'content-laptop': '1024px',
        'content-tablet': '767px',
        'content-mobile': '380px',
      },
    },
  },
  plugins: [],
}
