import { CSSProperties, MouseEvent, ReactNode, forwardRef, useCallback, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

import LoadingDots from "@/components/LoadingDots";

import { Disabled, Flat, Naked, Neumorp, OutLine } from "./Button.styles";
import RippleEffect, { RippleRef } from "./RippleEffect/RippleEffect";

interface ButtonProps {
  variant?: "flat" | "neumorp" | "naked" | "outline" | "disabled";
  buttonColor?: string;
  textColor?: string;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
  children: ReactNode | string;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  useRipple?: boolean;
  rippleColor?: string;
  onClickHandler?: () => void;
  handlerDelay?: number;
  [key: string]: any;
}

const ButtonType = {
  flat: Flat,
  neumorp: Neumorp,
  naked: Naked,
  outline: OutLine,
  disabled: Disabled,
};

const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      variant = "flat",
      buttonColor,
      textColor,
      width,
      loading = false,
      disabled,
      useRipple = false,
      rippleColor,
      children,
      type,
      onClickHandler = () => null,
      handlerDelay = 0,
      style,
      ...rest
    },
    buttonRef,
  ) => {
    const ButtonWrapper: React.ComponentType<any> = disabled
      ? ButtonType.disabled
      : ButtonType[variant];

    const ref = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<RippleRef>(null);

    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        rippleRef.current && rippleRef.current?.createRipple(event);
        setTimeout(() => {
          onClickHandler();
        }, handlerDelay);
      },
      [onClickHandler, handlerDelay],
    );

    return (
      <ButtonWrapper
        data-variant={variant}
        ref={mergeRefs([ref, buttonRef])}
        type={type}
        disabled={disabled}
        style={{
          width,
          ...style,
        }}
        onClick={useRipple ? handleClick : onClickHandler}
        $buttonColor={buttonColor}
        $textColor={textColor}
        $rippleColor={rippleColor}
        {...rest}
      >
        {!loading ? <>{children}</> : <i className="pl-2 m-0 flex">{<LoadingDots />}</i>}
        {useRipple && variant !== "neumorp" && !disabled && <RippleEffect ref={rippleRef} />}
      </ButtonWrapper>
    );
  },
);

export default Button;
