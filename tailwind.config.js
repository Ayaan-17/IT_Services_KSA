/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saudi: {
          primary: "#0F766E", // Brand green (CTAs, highlights)
          secondary: "#115E59", // Hover / emphasis
          dark: "#0F172A", // Headings
          text: "#334155", // Body text
          muted: "#64748B", // Secondary text

          /* ✅ NEW BACKGROUND SYSTEM */
          page: "#F5FAF9", // App/page background (not white)
          section: "#E6F4F1", // Light section background
          surface: "#D4EEE9", // Cards-on-light / hero background
          deep: "#0B4F4A", // Dark sections (solutions, footer)

          border: "#CFE3DF", // Soft green border
          gold: "#C9A227", // Accent (sparingly)
        },
      },
    },
  },
  plugins: [],
};
