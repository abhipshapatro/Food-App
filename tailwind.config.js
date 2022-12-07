/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBlue : '#1B2430',
        lightYellow : '#FFF323',
        lightGray : '#B2B1B9',
        bgGray : '#9BA4B4',
      },
      fontFamily: {
        'lora': ['Lora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
