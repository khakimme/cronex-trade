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
        homePage: "calc(100vh - 38px)",
        table: "calc(100% - 24px)",
        depthChart: "calc(100% - 1.5rem)",
      },
      colors: {
        "ct-blue": "#4e95f5",
        "ct-grayish": "#313337",
        "ct-grayish-dark": "#18191b",
        "ct-grayish-light": "#c7ccd9",
        "ct-header": "#202124",
        "ct-grayish-30": "#2d2f33",
        "ct-grayish-20": "#313337",
        "ct-grayish-10": "#9599a3",
        "ct-green": "#00a159",
        "ct-sell-color": "#df4249",
        "ct-label-white": "#c7ccd9",
        "ct-red": "#cd0124",

        "dark-grayish-blue-71": "#42474a",
        "dark-grayish-blue-75": "#3a3c40",
        "dark-grayish-blue-56": "#686d70",

        "grayish-blue-89": "#18191b",
        "grayish-blue-87": "#1c1d20",
        "grayish-blue-86": "#202124",
        "grayish-blue-81": "#2b2d31",
        "grayish-blue-80": "#2d2f33",
        "grayish-blue-78": "#313337",
        "grayish-blue-72": "#404247",
        "grayish-blue-71": "#424449",
        "grayish-blue-68": "#4a4c51",
        "grayish-blue-57": "#63666d",
        "grayish-blue-50": "#767980",
        "grayish-blue-43": "#858991",
        "grayish-blue-36": "#9599a3",
        "grayish-blue-15": "#c7ccd9",
        "tv-row-shade": "rgba(43,45,49,.5)",

        buy: "#00a159",
        sell: "#df4249",
      },
    },
    screens: {
      lg: { max: "992px" },

      md: { max: "768px" },

      sm: { max: "576px" },
    },
  },
  plugins: [],
};
