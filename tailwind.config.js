/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        exclude: "calc(100vh - 36px)",
      },
      fontFamily: {
        "bai-jamjuree": ["Bai jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
