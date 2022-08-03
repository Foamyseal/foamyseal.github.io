module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    boxShadow: {
      xl: '0 10px 15px -3px rgba(159, 127, 255, 0.15), 0 4px 6px -2px rgba(159, 127, 255, 0.15)',
    },
    extend: { fontFamily: {
      'poppins': ['Poppins']
    } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
