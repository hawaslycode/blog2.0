/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#9CB080',    // Verde claro / Oliva suave
          medium: '#618764',   // Verde medio / Musgo
          dark: '#2B5748',     // Verde bosque / Oscuro profundo
          deep: '#273338',     // Gris oscuro verdoso / Fondo o texto principal
        }
      }
    },
  },
  plugins: [],
}