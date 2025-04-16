/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#303F60",
        secondary: "#CCE5FF",
        accent: "#9333EA",
        neutral: "#374151",
        success: "#36EA88",
        warning: "#FBBD23",
        error: "#FD0025",
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}