/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = ["class", "[data-theme='dark']"];
export const theme = {
  extend: {
    screens: {
      xs: { max: "482px" },
      sm: { min: "483px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1272px" },
      xl: { min: "1273px" },
    },
  },
};
export const plugins = [];
