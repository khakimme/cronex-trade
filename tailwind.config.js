/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: "0.625rem",
      },
      height: {
        navbar: "38px",
        home: "calc(100vh - 38px)",
        table: "calc(100% - 35px)",
      },
      colors: {
        "ct-blue": "#4e95f5",
        "ct-grayish": "#313337",
        "ct-green": "#00a159",
        "ct-red": "#cd0124",
      },
    },
  },
  plugins: [],
};
