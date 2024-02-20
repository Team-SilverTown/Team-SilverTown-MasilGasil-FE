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

  return (
    <div className="absolute w-full bottom-5 box-border">
      <Button
        type="button"
        onClick={onClickHandler}
        buttonColor={theme?.green_500}
        textColor={theme?.text_secondary_color}
        width={"100%"}
        disabled={isDisabled}
      >
        <span className="text-3xl font-bold">{buttonText}</span>
      </Button>
    </div>
  );
};

export default StepButton;
