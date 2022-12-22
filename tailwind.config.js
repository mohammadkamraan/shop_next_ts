/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/data/**/*.{js,ts,jsx,tsx}"],
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
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.25)" },
          "50%": { transform: "scale(1.5)" },
          "75%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out infinite",
        scaleTow: "scale 0.6s ease-in-out infinite 0.2s",
        scaleThree: "scale 0.7s ease-in-out infinite 0.3s ",
      },
    },
  },
  plugins: [],
};
