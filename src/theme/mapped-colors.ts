export const mappedColors = {
  white: {
    primary: "FFFCF9",
    secondary: "E2E2E2",
  },
  orange: {
    primary: "FF5733",
    secondary: "CF4E32",
  },
  gray: {
    primary: "BBBBBB",
    secondary: "8F8F8F",
  },
  pink: {
    primary: "EE4266",
    secondary: "CC3857",
  },
  purple: {
    primary: "540D6E",
    secondary: "400B53",
  },
  blue: {
    primary: "369DDD",
    secondary: "2B76A5",
  },
  green: {
    primary: "0EAD69",
    secondary: "0D9359",
  },
  yellow: {
    primary: "F3C530",
    secondary: "F3C530",
  },
  black: {
    primary: "383838",
    secondary: "202020",
  },
};

export type ColorKey = keyof typeof mappedColors;
