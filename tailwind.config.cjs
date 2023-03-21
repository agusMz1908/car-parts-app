/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "oca-green": "#0cd782",
        "oca-blue": "#006ed2",
      },
    },
  },
  plugins: [],
};
