import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import "../src/styles/globals.css";
import { lightTheme, darkTheme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";

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
