/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        caveat: "Caveat",
        patrick: "Patrick Hand",
        vazir: "Vazir",
      },
      width: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
