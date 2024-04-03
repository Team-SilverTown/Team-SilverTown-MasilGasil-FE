import Theme, { CONTAINER, FONT_SIZE, FONT_WEIGHT, Z_INDEX } from "@/styles/theme";

import { Button } from "@/components";

import Link from "next/link";

const WalkStartButton = () => {
  return (
    <Link href="/log/record">
      <Button
        variant="neumorp"
        buttonColor={Theme.lightTheme.green_500}
        textColor={Theme.lightTheme.white}
        width="calc(100% - 3rem)"
        style={{
          position: "fixed",
          left: "50%",
          bottom: "9.5rem",
          transform: "translateX(-50%)",
          maxWidth: `${CONTAINER.MAX_WIDTH - 3}rem`,
          height: "6rem",
          fontSize: `${FONT_SIZE.H6}`,
          fontWeight: `${FONT_WEIGHT.BOLD}`,
          zIndex: `${Z_INDEX.SEARCH_BAR}`,
        }}
      >
        산책하기
      </Button>
    </Link>
  );
};

export default WalkStartButton;
