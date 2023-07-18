/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1280px'},
      },
      maxWidth: {
        "svp": '280px',
      },
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "#1E40AF"
        }
      }
    },
  },
  plugins: [],
}