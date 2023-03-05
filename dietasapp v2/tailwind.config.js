/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        azul: '#2679AD',
        grisClaro: '#68737A',
        menta: '#65E0CE',
        coral: '#E4AAA0',
        ladrillo: '#AD3232',
        grisOscuro: '#2C2C2C',
      }
    },
  },
  plugins: [],
}