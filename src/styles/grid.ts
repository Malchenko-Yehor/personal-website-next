import { devices } from "./variables";

const gridTheme = {
  gridColumns: 12,
  breakpoints: { // defaults below
    xxl: devices.pc.width,
    xl: devices.laptop.width,
    lg: devices.tablet.width,
    md: devices.tablet.height,
    sm: devices.bigPhone.width,
  },
  row: {
    padding: 6, // default 15
  },
  col: {
    padding: 6,
  },
  container: {
    maxWidth: { // defaults below
      xxl: 1300,
      xl: 1300,
      lg: 1300,
      md: 1300,
      sm: 1300,
    },
  },
};

export default gridTheme;