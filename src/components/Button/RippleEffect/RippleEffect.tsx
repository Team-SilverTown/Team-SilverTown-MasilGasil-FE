"use client";

import { forwardRef, useImperativeHandle, useRef, MouseEvent } from "react";

import rippleStyle from "./RippleEffect.module.css";

export interface RippleRef {
  createRipple(event: MouseEvent<HTMLButtonElement>): void;
}

const RippleEffect = forwardRef((_, ref) => {
  const rippleRef = useRef<HTMLSpanElement>(null);

  useImperativeHandle(ref, () => {
    return {
      createRipple(event: MouseEvent<HTMLButtonElement>) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        const { left, top } = button.getBoundingClientRect();

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - left - radius}px`;
        circle.style.top = `${event.clientY - top - radius}px`;

        circle.classList.add(rippleStyle.ripple);

        const existingRipple = button.querySelector(`.${rippleStyle.ripple}`);

        if (existingRipple) {
          existingRipple.remove();
        }

        rippleRef.current?.appendChild(circle);
      },
    };
  });

  return (
    <span
      ref={rippleRef}
      className="ripple"
    />
  );
});

export default RippleEffect;
