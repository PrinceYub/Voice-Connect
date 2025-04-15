module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    // Add any other file patterns where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#003087",
        'customBlue': '#1DA1F2',
      }
    },
  },
  plugins: [],
} 