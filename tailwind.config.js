/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      filter: {
        grayscale: "grayscale(100%)",
      },
      colors: {
        primary: "#d6e815", // yellow
        secondary: "#3F3F3F", // Medium gray
        tertiary: "#A8A8A8", // Dark gray
        "black-100": "#3F3F3F", // Original dark color
        
        "black-300": "#000000" ,
        "black-200": "#848484", // Lighter gray
        "white-100": "#FFFFFF", // White color
        
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
      // screens: {
      //   xs: "450px",
        
      // },
      // backgroundSize: {
      //   "bg-fixed",
      //   "bg-cover",
      // },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/disaster.jpg')",
        "hero-pattern-medium": "url('/src/assets/disaster_md.jpg')",
        "hero-pattern-mobile": "url('/src/assets/disaster_md.jpg')",
      },
      animation: {
        'conveyor-belt': 'conveyor-belt 20s linear infinite',
      },
      keyframes: {
        'conveyor-belt': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      // spacing: {
      //   maxHeight:100,
      // }
      
    },
  },
  plugins: [],
};