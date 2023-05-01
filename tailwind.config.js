/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "88": "22rem"
      },
      transitionProperty: {
        "width": 'width'
      }
    },
  },
  plugins: [],
}

