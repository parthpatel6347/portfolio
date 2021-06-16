// eslint-disable-next-line import/no-anonymous-default-export
export default {
  widthDown(size) {
    const sizes = {
      xxs: "435px",
      xs: "575.98px",
      s: "630px",
      sm: "767.98px",
      md: "8px",
      l: "1070px",
      lg: "1400px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },

  heightDown(size) {
    const sizes = {
      lg: "",
      l: "800px",
      md: "",
      sm: "",
      xs: "",
    };
    return `@media(max-height:${sizes[size]})`;
  },

  large() {
    return "@media(max-width:1400px)";
  },

  medium() {
    return "@media(max-height: 800px),(max-width:1000px)";
  },

  small() {
    return "@media(max-width:630px)";
  },

  smallUp() {
    return "@media(min-width:768px)";
  },
};
