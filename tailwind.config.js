/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saudi: {
          green: "#0f766e",
          teal: "#115e59",
          gold: "#c9a227",
          dark: "#0f172a",
          text: "#334155",
          light: "#f0fdfa",
        },
      },
    },
  },
  plugins: [],
};
