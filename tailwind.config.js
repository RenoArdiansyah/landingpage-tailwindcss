/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

