module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00EEEB",
        light: "#BBFCFB",
        lighter: "#FAFCFF",
        gray: "#F2F5FA",
        grayLight: "#6B778C",
        grayDark: "#1A1A1A",
        gray150: "#2E2E2E",
        blue: "#0045CD",
        blueLight: "#F2F6FF",
        darkBlue: "#172B4D",
        paragraph: "#606060",
      },
    },
  },
  plugins: [],
};
