"use client";

import { DefaultTheme } from "styled-components";

import tailwindConfig from "@/../tailwind.config";
import { Button } from "@/components";

import resolveConfig from "tailwindcss/resolveConfig";

interface MateButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  isSecondButton?: boolean;
}

const MateButton = ({ text, onClick, disabled, isSecondButton }: MateButtonProps) => {
  const { theme } = resolveConfig(tailwindConfig);

  return (
    <Button
      width={"100%"}
      useRipple
      buttonColor={isSecondButton ? theme.colors.gray_300 : theme.colors.green_500}
      textColor={theme.colors.text_secondary_color}
      rippleColor={theme.colors.text_secondary_color + 50}
      style={{
        whiteSpace: "nowrap",
        fontSize: theme.fontSize.h6,
        fontWeight: theme.fontWeight.semibold,
        userSelect: "none",
      }}
      onClickHandler={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MateButton;
