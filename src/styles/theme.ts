export const lightTheme: object = {
  theme_mode: "light",
  background_color: "#FDFAF6",
  container_color: "#FEFEFE",
  text_primary_color: "#0F1118",
  text_secondary_color: "#F0F0F0",
  black: "#232323",
  white: "#FFFFFF",
  white_100: "#F8F8F8",
  gray_500: "#909090",
  gray_300: "#B3B3B3",
  gray_200: "#E3E3E3",
  gray_100: "#EFEFEF",
  transparent_10: "#B3B3B310",
  transparent_30: "#B3B3B330",
  transparent_50: "#B3B3B350",
  transparent_90: "#B3B3B390",
  red_100: "#FF6878",
  red_500: "#FF4141",
  pink_100: "#FEAF88",
  blue_300: "#3897F0",
  yellow_500: "#F7BC01",
  green_300: "#B9DB56",
  green_500: "#81BB26",
};

export const darkTheme = {
  theme_mode: "dark",
  background_color: "#FDFAF6",
  container_color: "#FEFEFE",
  text_primary_color: "#0F1118",
  text_secondary_color: "#F0F0F0",
  black: "#232323",
  white: "#F8F8F8",
  gray_500: "#909090",
  gray_300: "#B3B3B3",
  gray_200: "#E3E3E3",
  gray_100: "#EFEFEF",
  transparent_10: "#B3B3B310",
  transparent_30: "#B3B3B330",
  transparent_50: "#B3B3B350",
  transparent_90: "#B3B3B390",
  red_100: "#FF6878",
  red_500: "#FF4141",
  pink_100: "#FEAF88",
  blue_300: "#3897F0",
  yellow_500: "#F7BC01",
  green_300: "#B9DB56",
  green_500: "#81BB26",
};

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;

// 3px 이상 rem

export const APP_SYMBOL = {
  SYMBOL_TEXT: "",
};

export const BORDER = {
  TINE_WIDTH: 1, // px
  BASE_WIDTH: 1.5, // px
};

export const CONTAINER = {
  PADDING_VERTICAL: 2, // rem
  PADDING_HORIZONTAL: 2.5, // rem

  MOBILEABLE_HORIZONTAL_SPACE: "w-[100%] sm:max-w-[420px]",
  MOBILEABLE_VERTICAL_SPACE: "h-[100%] sm:h-screen",
};

/**
 * @summary Screen 사이즈에 관한 값으로 px을 기준으로 합니다.
 */
export const SCREEN = {
  APP_MAX_WIDTH: 600, // 600px

  SIZE_MB: 450, // 450px
  SIZE_SM: 640, // 640px
  SIZE_MD: 768, // 768px
  SIZE_XMD: 940, // 940px
  SIZE_LG: 1024, // 1024px
  SIZE_XL: 1280, // 1280px

  MOBILE_LIMIT: 768, // 768px
  TABLET_LIMIT: 1025, // 655 + 370px
  DESKTOP_VIEW_WIDTH: 655, // 655px
};

export const NAV_HEIGHT: number = 3; // 3.75 rem

export const POSTER = {
  SIMPLE_CARD_WIDTH: 150, // 150px
  SIMPLE_CARD_HEIGHT: 150, // 150px
  DETAIL_CARD_WIDTH: 150, // 500px
  DETAIL_CARD_HEIGHT: 150, // 600px
};

export const MODAL = {
  VERTICAL_PADDING: 3, // rem
  HORIZONTAL_PADDING: 2.5, // rem
  HEADER_MARGIN: 1.5, // rem
};

// Z-Index //
export const Z_INDEX = {
  SEARCH_BAR: 30,
  NAVIGATOR: 50,
  MODAL: 888,
  MODAL_BACKGROUND: 888,
  MODAL_LAYOUT: 999,
  SPINNER: 9999,
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
