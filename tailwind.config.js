/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: '#273338',   
        brandGreen: '#2B5748',
        brandMedium: '#618764',
        brandLight: '#9CB080',  
        // Tus nuevos colores profesionales de acento:
        accentOrange: '#e65a1f', // Naranja enérgico para botones de acción principal
        accentWarm: '#f2a65a',   // Dorado cálido para estados hover, textos destacados o bordes premium
      },
    },
  },
  plugins: [],
}