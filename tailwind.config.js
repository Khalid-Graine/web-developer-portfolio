/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Prata"],
        text: ["Inter"],
      },
      colors: {
        primary: "#FBE850",
        secondary: "#848484",
        tertiary: "#2e3038",
        // primary: {
        //   500: "#FBE850;",
        //   800: "#FF1313;",
        // },
      },
    },
  },
  plugins: [],
};
