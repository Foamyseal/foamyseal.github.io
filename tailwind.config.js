module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xl: '0 10px 15px -3px rgba(147,112,219, 0.2), 0 4px 6px -2px rgba(147,112,219, 0.2)',
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
