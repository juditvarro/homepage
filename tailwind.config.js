module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "serif"],
      },
      cursor: {
        triangle: 'url("../assets/triangle-cursor.svg"), auto',
      },
    },
    colors: {
      themeDark: "#160F30",
      themeMiddle: "#301E67",
      themeLight: "#A72693",
      themeLightest: "#EAE7AF",
      currentColor: "#EAE7AF",
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".text-shadow-primary": {
          textShadow: `3px 3px ${theme("colors.themeLight")}`,
        },
        ".button-hover-shadow": {
          boxShadow: `0 0 15px 5px ${theme("colors.themeLight")}`,
        },
      });
    },
  ],
};
