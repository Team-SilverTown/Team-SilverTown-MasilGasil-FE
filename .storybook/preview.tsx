import "../src/styles/globals.css";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
