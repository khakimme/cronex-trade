/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        navbar: "var(--header-height)",
        "tools-sreen": "calc(100vh - var(--header-height))",
      },
    },
  },
  plugins: [],
};
