/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        lato: ["Lato", "sans"],
      },
      colors: {
        neutrals: {
          200: "#EDEFFC",
          300: "#D7DBF5",
          400: "#FAFBFF",
          600: "#7981B2",
          900: "#141938"
        },
        blueBerry: "#4F4FFF",
        greenAqua: "#7DF0BA"
      },
    },
  },
  plugins: [],
}
