import { DefaultTheme } from "styled-components";

function remToPx(rem: string): number {
  const BASE_FONT_SIZE = 10;
  const remValue = parseFloat(rem);
  return remValue * BASE_FONT_SIZE;
}

const theme: DefaultTheme = {
  font: {
    family: {
      primary: "Inter, Arial, sans-serif",
    },
    size: {
      h1: remToPx("6.4rem"),
      h2: remToPx("4.8rem"),
      h3: remToPx("3.6rem"),
      h4: remToPx("2.4rem"),
      h5: remToPx("2rem"),
      subtitle: remToPx("1.8rem"),
      body1: remToPx("1.6rem"),
      body2: remToPx("1.4rem"),
      body3: remToPx("1.2rem"),
    },
    weight: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeight: {
      h1: remToPx("8rem"),
      h2: remToPx("6rem"),
      h3: remToPx("4.4rem"),
      h4: remToPx("3.2rem"),
      h5: remToPx("2.8rem"),
      subtitle: remToPx("2.8rem"),
      body1: remToPx("2.4rem"),
      body2: remToPx("2.4rem"),
      body3: remToPx("2rem"),
    },
  },
  colors: {
    primary: {
      white: "#ffffff",
      black: "#232326",
      brand: "#2d66f2",
    },
    secondary: {
      neutral1: "#f7f7f9",
      neutral2: "#e0e2e5",
      neutral3: "#9ba0ad",
      neutral4: "#70727a",
      danger: "#f22b2b",
      success: "#23a05b",
    },
    tertiary: {
      hover1: "#0047ff",
      pressed: "#2147a8",
      bgSuccess: "#dbf9ea",
      bgDanger: "#ffdbdb",
      bgBrand: "#dbedf9",
      hoverDestroy: "#ff0000",
      pressedDestroy: "#ce0000",
    },
  },
  spacing: {
    1: remToPx("4rem"),
    2: remToPx("3.6rem"),
    3: remToPx("2.4rem"),
    4: remToPx("1.8rem"),
    5: remToPx("1.4rem"),
    6: remToPx("1.2rem"),
    7: remToPx("0.8rem"),
    8: remToPx("0.4rem"),
  },
};

export default theme;
