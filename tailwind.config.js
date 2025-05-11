/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8", // Firebase blue
        "primary-dark": "#0D47A1",
        secondary: "#34A853", // Google green
        accent: "#FBBC04", // Google yellow
        error: "#EA4335", // Google red
        dark: "#202124", // Dark background
        light: "#F8F9FA", // Light background
      },
      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}