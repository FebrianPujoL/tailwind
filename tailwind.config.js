// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,html}', // Make sure all extensions are included
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          clash: ['ClashDisplay', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }