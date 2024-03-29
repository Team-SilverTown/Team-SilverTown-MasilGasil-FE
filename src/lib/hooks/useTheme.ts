import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}
