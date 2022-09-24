/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "navbar-top-height": "38px",
        "tools-sreen": "calc(100vh - 38px)",
      },
    },
  },
  plugins: [],
};
