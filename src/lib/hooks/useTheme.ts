import { ThemeContext } from "styled-components";

import { useContext } from "react";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}
