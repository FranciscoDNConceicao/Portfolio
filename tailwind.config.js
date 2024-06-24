/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary: "#262626",
          secondary: "#A6A6A6",
          third: "#8C8C8C",
          fourth: "#404040",
          fifth: "#0D0D0D"
      }
    },
  },
  plugins: [],
}

