export const lightTheme = {
  theme_mode: "light",
  background_color: "#FDFAF6",
  container_color: "#FEFEFE",
  text_primary_color: "#0F1118",
  text_secondary_color: "#F0F0F0",
  black_900: "#232323",
  white_900: "#FDFAF6",
  white: "#FFFFFF",
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
export type LightTheme = typeof lightTheme;

export const darkTheme = {
  theme_mode: "dark",
  background_color: "#FDFAF6",
  container_color: "#FEFEFE",
  text_primary_color: "#0F1118",
  text_secondary_color: "#F0F0F0",
  black_900: "#232323",
  white_900: "#FDFAF6",
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
export type DarkTheme = typeof darkTheme;

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;

// APP SYMBOL -------------------------------------- //
export const SYMBOL_TEXT: string = "";
// -------------------------------------- APP SYMBOL //

// BORDER ------------------------------------------ //
export const BORDER_TINE_WIDTH: number = 1; // px
export const BORDER_BASE_WIDTH: number = 1.5; // px
// ------------------------------------------ BORDER //

// CONTAINER ------------------------------------------------------- //
export const CONTAINER_PADDING_VERTICAL: number = 2; // rem
export const CONTAINER_PADDING_HORIZONTAL: number = 2.5; // rem
export const MOBILEABLE_CONTAINER_HORIZONTAL_SPACE: string = "w-[100%] sm:max-w-[420px]";
export const MOBILEABLE_CONTAINER_VERTICAL_SPACE: string = "h-[100%] sm:h-screen";
// ------------------------------------------------------- CONTAINER //

// SCREEN ------------------------------------------ //
export const APP_MAX_WIDTH = 600; // px

export const SCREEN_SIZE = {
  MB: 45, // rem - 45px
  SM: 64, // rem - 640px
  MD: 76.8, // rem - 768px
  XMD: 94, // rem - 940px
  LG: 102.4, // rem - 1024px
  XL: 128, // rem - 1280px
};

export const MOBILE_LIMIT = 768; // 768px
export const TABLET_LIMIT = 1025; // 655 + 370px
export const DESKTOP_VIEW_WIDTH = 655; // 655px
// ------------------------------------------ SCREEN //

export const NAV_HEIGHT: number = 3; // 3.75 rem

// CARDS -------------------------------------------------------- //
export const POSTER_SIMPLE_CARD_HEIGHT: number = 150; // 150px
export const POSTER_SIMPLE_CARD_WIDTH: number = 150; // 150px
export const POSTER_DETAIL_CARD_HEIGHT: number = 500; // 500px
export const POSTER_DETAIL_CARD_WIDTH: number = 600; // 600px

// -------------------------------------------------------- CARDS //

// MODAL -------------------------------------------------------- //
export const MODAL_VERTICAL_PADDING: number = 3; // rem
export const MODAL_HORIZONTAL_PADDING: number = 2.5; // rem
export const MODAL_HEADER_MARGIN: number = 1.5; // rem
// -------------------------------------------------------- MODAL //

// Z-Index //
export const SEARCH_BAR = 30;
export const NAVIGATOR = 50;
export const MODAL = 888;
export const MODAL_BACKGROUND = 888;
export const MODAL_LAYOUT = 999;
export const SPINNER = 9999;

// font Weight ------------------------------------------ //
export const FONT_WEIGHT = {
  MEDIUM: 400,
  BOLD: 700,
};

// floating BUTTON ------------------------------------------ //

export const BUTTON_FULL_WIDTH = "100%";
