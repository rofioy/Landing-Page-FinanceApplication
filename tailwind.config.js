/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins, sans-serif"],
      },
      colors: {
        darkBlue: ["#050C9C"],
        normalBlue: ["#3572EF"],
        mediumBlue: ["#3ABEF9"],
        lightBlue: ["#90BFFF"],
        mediumYellow: ["#F5DA2D"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
  },
  plugins: [],
};
