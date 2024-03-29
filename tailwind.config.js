/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      filter: {
        grayscale: "grayscale(100%)",
      },
      before: {
        content: "''",
      },
      colors: {
        primary: "#d6e815", // yellow
        secondary: "#3F3F3F", // Medium gray
        tertiary: "#A8A8A8", // Dark gray
        "black-100": "#3F3F3F", // Original dark color

        "black-300": "#000000",
        "black-200": "#848484", // Lighter gray
        "white-100": "#FFFFFF", // White color
        ivory: "#FFFFE0",

        "gradient-black": {
          DEFAULT: "linear-gradient(to right, #434343, #000000)", // Gradient black
        },

        // primary: "#F6F6F6", // Pale hue
        // secondary: "#ECECEC", // Pale hue
        // tertiary: "#F2F2F2", // Pale hue
        // "black-100": "#3F3F3F", // Dark color
        // "black-200": "#F8F8F8", // Pale hue
        // "white-100": "#FFFFFF", // White color
      },
      boxShadow: {
        card: "0px 35px 320px -15px #211e35",
      },
    },
  },
  plugins: [],
};
