module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayColor: "#202020",
        grayColor2: "#B8B6B6",
        grayColor3: "#909090",
        grayColor4: "#707070",
        yellowColor: "#FFEB00",
        yellowColor2: "#FFE900",
        offwhite: "#EBEBEB",
      },
      maxWidth: {
        "3/5": "60%",
      },
      fontFamily: {
        sans: ["strasua", "Source Sans Pro", "sans-serif"],
        serif: [
          "PT Serif",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      spacing: {
        "2p": "2%",
        "5p": "5%",
        "30vmax": "30vmax",
        "47vmax": "47vmax",
      },
      screens: {
        "2xs": "375px",
        "1xs": "449px",
        sm: "621px",
        lg: "800px",
        xl: "1100px",
        "0xl": "1179px",
        "1xl": "1297px",
        "2xl": "1366px",
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
