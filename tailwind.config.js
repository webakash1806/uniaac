/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF204E',       // Main color
        primary: '#A0153E',    // Primary color
        dark: '#5D0E41',       // Dark color
        secondary: '#00224D',  // Secondary color
        white: '#FFFFFF',      // White
        black: '#000000',      // Black
      },
    },
  },
  plugins: [],
}
