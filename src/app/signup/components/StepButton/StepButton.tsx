import React from "react";

import useTheme from "@/lib/hooks/useTheme";
import { Button } from "@/components";

interface StepButtonProps {
  buttonText: string;
  onClickHandler: () => void;
  isDisabled?: boolean;
}

const StepButton = ({ onClickHandler, isDisabled, buttonText }: StepButtonProps) => {
  const theme = useTheme();

  const clickHandler = (event: MouseEvent) => {
    event.preventDefault();
    onClickHandler();
  };

  return (
    <div className="absolute w-full bottom-12 left-0 box-border px-6">
      <Button
        type="button"
        onClick={clickHandler}
        buttonColor={theme?.green_500}
        textColor={theme?.text_secondary_color}
        width={"100%"}
        disabled={isDisabled}
        useRipple
      >
        <span className="text-3xl font-bold">{buttonText}</span>
      </Button>
    </div>
  );
};

export default StepButton;
