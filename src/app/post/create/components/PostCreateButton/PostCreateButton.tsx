"use client";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface PostCreateButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const PostCreateButton = ({ onClick, text, disabled }: PostCreateButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      width={"100%"}
      useRipple
      buttonColor={theme?.green_500}
      textColor={theme?.text_secondary_color}
      rippleColor={theme?.text_secondary_color + 50}
      style={{
        whiteSpace: "nowrap",
        fontSize: FONT_SIZE.H6,
        fontWeight: FONT_WEIGHT.SEMIBOLD,
        userSelect: "none",
      }}
      onClickHandler={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default PostCreateButton;
