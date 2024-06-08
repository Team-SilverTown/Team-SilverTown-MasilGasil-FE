"use client";

// TODO - 추후 모든 Tailwind 마이그레이션 작업후 use client 제거
import { Button } from "@/components";

import tailwindConfig from "../../../../../tailwind.config";

import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";

const WalkStartButton = () => {
  const { theme } = resolveConfig(tailwindConfig);

  return (
    <Link href="/log/record">
      <Button
        variant="neumorp"
        buttonColor={theme.colors["green_500"]}
        textColor={theme.colors["white"]}
        width="calc(100% - 3rem)"
        style={{
          position: "fixed",
          left: "50%",
          bottom: "9.5rem",
          transform: "translateX(-50%)",
          maxWidth: `57rem`,
          height: "6rem",
          fontSize: `${theme.fontSize["h6"]}`,
          fontWeight: `${theme.fontWeight["bold"]}`,
          zIndex: `${theme.zIndex["search_bar"]}`,
        }}
      >
        산책하기
      </Button>
    </Link>
  );
};

export default WalkStartButton;
