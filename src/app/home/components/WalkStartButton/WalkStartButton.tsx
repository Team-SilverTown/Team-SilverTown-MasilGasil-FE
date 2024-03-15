"use client";

import Link from "next/link";
import { Button } from "@/components";
import Theme, { CONTAINER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

const WalkStartButton = () => {
  return (
    <Link href="/log/record">
      <Button
        variant="neumorp"
        buttonColor={Theme.lightTheme.green_500}
        textColor={Theme.lightTheme.white}
        width="100%"
        style={{
          position: "fixed",
          left: "50%",
          bottom: "7rem",
          transform: "translateX(-50%)",
          maxWidth: `${CONTAINER.MAX_WIDTH - 3}rem`,
          height: "6rem",
          fontSize: `${FONT_SIZE.H6}`,
          fontWeight: `${FONT_WEIGHT.BOLD}`,
          opacity: "0.9",
        }}
      >
        산책 기록 하기
      </Button>
    </Link>
  );
};

export default WalkStartButton;
