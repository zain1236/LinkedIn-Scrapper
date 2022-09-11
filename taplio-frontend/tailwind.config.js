/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        subscription: "url('https://app.taplio.com/bg.svg')",
      },
      screens: {
        md: "960px",
        lg: "1680px",
      },
    },
  },
  plugins: [require("daisyui")],
};
