export const lightTheme = {
  theme_mode: "light",

  white: "#FFFFFF",
  white_100: "#FAFAFA",

  black: "#232323",

  gray_500: "#909090",
  gray_300: "#B3B3B3",
  gray_200: "#E3E3E3",
  gray_100: "#EFEFEF",

  transparent_10: "#23232310",
  transparent_30: "#23232330",
  transparent_50: "#23232350",
  transparent_90: "#23232390",

  red_100: "#FF6878",
  red_500: "#FF4141",

  pink_100: "#FEAF88",

  blue_300: "#3897F0",

  yellow_500: "#F7BC01",

  green_100: "#f1f5eb",
  green_300: "#B9DB56",
  green_500: "#81BB26",

  background_color: " #FAFAFA",
  container_color: "#FEFEFE",

  text_primary_color: "#232323",
  text_secondary_color: "#FEFEFE",
};
export type LightTheme = typeof lightTheme;

export const darkTheme = {
  theme_mode: "dark",

  white: "#FFFFFF",
  white_100: "#FAFAFA",

  black: "#232323",

  gray_500: "#909090",
  gray_300: "#B3B3B3",
  gray_200: "#E3E3E3",
  gray_100: "#EFEFEF",

  transparent_10: "#23232310",
  transparent_30: "#23232330",
  transparent_50: "#23232350",
  transparent_90: "#23232390",

  red_100: "#FF6878",
  red_500: "#FF4141",

  pink_100: "#FEAF88",

  blue_300: "#3897F0",

  yellow_500: "#F7BC01",

  green_100: "#f1f5eb",
  green_300: "#B9DB56",
  green_500: "#81BB26",

  background_color: " #FAFAFA",
  container_color: "#FEFEFE",

  text_primary_color: "#232323",
  text_secondary_color: "#FEFEFE",
};
export type DarkTheme = typeof darkTheme;

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;

// 3px 이상 rem

export const BORDER = {
  TINE_WIDTH: 1, // px
  BASE_WIDTH: 1.5, // px
};

export const CONTAINER = {
  MAX_WIDTH: 60, // rem
  PADDING_VERTICAL: 1, // rem
  PADDING_HORIZONTAL: 1.5, // rem

  MOBILEABLE_HORIZONTAL_SPACE: "w-[100%] sm:max-w-[420px]",
  MOBILEABLE_VERTICAL_SPACE: "h-[100%] sm:h-screen",
};

export const NAV_HEIGHT: number = 6; // rem

export const MODAL = {
  VERTICAL_PADDING: 3, // rem
  HORIZONTAL_PADDING: 2.5, // rem
  HEADER_MARGIN: 1.5, // rem
};

export const Z_INDEX = {
  CUSTOM_PIN: 5,
  SEARCH_BAR: 30,
  BOTTOM_SHEET: 40,
  NAVIGATOR: 50,
  MATE_TOGGLE_MENU: 100,
  MODAL: 800,
  MODAL_BACKGROUND: 800,
  MODAL_LAYOUT: 850,
  SPINNER: 999,
};

export const FONT_WEIGHT = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  EXTRABOLD: 800,
  BLACK: 900,
};

export const FONT_SIZE = {
  H1: "5rem",
  H2: "2.8rem",
  H3: "2.5rem",
  H4: "2.4rem",
  H5: "2rem",
  H6: "1.8rem",
  LARGE: "1.6rem",
  MEDIUM: "1.5rem",
  BASIC: "1.4rem",
  SMALL: "1.3rem",
  MINI: "1.2rem",
  MICRO: "1rem",
};
