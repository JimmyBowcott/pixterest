/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "pixterest-red": "#e60023",
      "bg-btn-p-hov": "#b60000",
      "bg-btn-s-d": "#e9e9e9",
      "bg-btn-s-hov": "#e2e2e2",
      "btn-slider": "#e1e1e1",
      "pixterest-green": "#43c22d",
      "pixterest-purple": "#c738f2",
      "pixterest-orange": "#eb7a23",
      "pixterest-blue": "#388ceb",
      "pale-yellow": "#fffd92",
      "pale-blue": "#dafff6",
      "pale-red": "#ffe2eb",
      "dark-teal": "#006b6c",
      "pink-red": "#c31952",
      "new-red": "#c32f00",
      "almost-black": "#232323",
      "grey": "#d3d3d3",
      },
    },
  },
  plugins: [],
}

