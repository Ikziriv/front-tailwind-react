const plugin = require("tailwindcss/plugin");
module.exports = {
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
    },
    screens: {
      "galaxy-s5": { min: "360px", max: "640px" },
      "pixel-2": { min: "411px", max: "731px" },
      "pixel-2xl": { min: "411px", max: "823px" },
      "iphone-5se": { min: "320px", max: "568px" },
      "iphone-6": { min: "375px", max: "667px" },
      "iphone-6-plus": { min: "414px", max: "736px" },
      "iphone-x": { min: "375px", max: "812px" },
      "ipad-d": { min: "768px", max: "1024px" },
      "ipad-pro": { min: "1024px", max: "1366px" },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".rotate-0": {
          transform: "rotate(0deg)",
        },
        ".rotate-90": {
          transform: "rotate(90deg)",
        },
        ".rotate-180": {
          transform: "rotate(180deg)",
        },
        ".rotate-270": {
          transform: "rotate(270deg)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
