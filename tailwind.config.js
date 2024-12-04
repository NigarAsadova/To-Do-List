/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-light' : "url('./src/assets/imgs/bg-desktop-light.jpg')",
      },
      fontFamily : {
        josefinSerif : ['josefin-serif', 'sans-serif'],
        josefinSans : ['josefin-sans', 'sans'],
      },
      boxShadow : {
        'custom' : '10px 35px 50px -15px rgba(194,195,214,0.5)',
      }
    },
  },
  plugins: [],
};
