/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        navbar: "38px",
        home: "calc(100vh - 38px)",
        table: "calc(100% - 35px)",
        tbody: "calc(100% - 25px)",
      },
    },
  },
  plugins: [],
};
