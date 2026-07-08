/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: '#273338',   // color oscuro de fondo 
        brandGreen: '#2B5748',  // verde principal
        brandMedium: '#618764', // verde medio
        brandLight: '#9CB080',  // verde claro
      },
    },
  },
  plugins: [],
}