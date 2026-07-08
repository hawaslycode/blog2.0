/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Esto le dice que busque en TODO src (incluyendo components)
  ],
  theme: {
    extend: {
      colors: {
        brandDark: '#273338',   // Tu color oscuro de fondo (Imagen 4)
        brandGreen: '#2B5748',  // Tu verde principal
        brandMedium: '#618764', // Tu verde medio
        brandLight: '#9CB080',  // Tu verde claro
      },
    },
  },
  plugins: [],
}