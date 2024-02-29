import * as S from "./UserEditInput.styles";
import * as GS from "../../UserEdit.styles";

import { UseFormRegisterReturn } from "react-hook-form";
import { Button, Input, InputLabel } from "@/components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";
import { MouseEvent } from "react";

interface UserEditInputProps {
  title: string;
  inputType: "text" | "number";
  placeholder: string;
  errorsMessage?: string;

  register: UseFormRegisterReturn;

  hasButton?: boolean;
  buttonTitle?: string;
  onClickButton?: () => void;
  isDisabledButton?: boolean;
}

const UserEditInput = ({
  title,
  inputType,
  placeholder,
  errorsMessage,

  register,

  hasButton = false,
  buttonTitle,
  onClickButton,
  isDisabledButton,
}: UserEditInputProps) => {
  const theme = useTheme();

  if (!theme) {
    return;
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!onClickButton) {
      return;
    }

    onClickButton();
  };

  return (
    <>
      <GS.UserEditTitle>{title}</GS.UserEditTitle>

      <S.InputActions>
        <Input
          type={inputType}
          register={register}
          placeholder={placeholder}
          style={{
            lineHeight: "2rem",
            width: "100%",
            fontSize: "1.5rem",
            fontWeight: FONT_WEIGHT.SEMIBOLD,
          }}
        />

        {hasButton && (
          <Button
            width={"16rem"}
            buttonColor={theme.green_500}
            textColor={theme.text_secondary_color}
            useRipple
            rippleColor={theme.text_secondary_color + 50}
            style={{
              whiteSpace: "nowrap",
              fontSize: FONT_SIZE.H5,
              fontWeight: FONT_WEIGHT.SEMIBOLD,
              userSelect: "none",
            }}
            onClickHandler={handleClick}
            disabled={isDisabledButton}
          >
            {buttonTitle}
          </Button>
        )}
      </S.InputActions>

      <GS.UserEditWarning>
        {errorsMessage && (
          <InputLabel
            text={errorsMessage}
            type="danger"
          />
        )}
      </GS.UserEditWarning>
    </>
  );
};

export default UserEditInput;
