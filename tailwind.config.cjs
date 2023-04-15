/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      screens: { "3xl": "1920px" },
      colors: {
        orange: "#FF8500",
        primary: "#162B3A",
        secondary: "#FFF4E9",
        light: "#676D73",
        darker: "#7F868B",
        "dark-400": "#626D78",
        "dark-500": "#2D4359",
      },
      borderRadius: { "4xl": "32px" },
    },
    container: {
      center: !0,
      padding: "15px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1320px",
        "3xl": "1320px",
      },
    },
  },
  plugins: [],
};
