"use client";

import * as GS from "@/styles/GlobalStyle";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMasilList } from "@/lib/api/masil/client";

const TestHome = () => {
  const theme = useTheme();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["testQueryKey"],
    queryFn: () => getMasilList({ size: 10 }),
  });

  return (
    <GS.CommonContainer style={{ padding: "2rem 0rem 6rem 0rem", position: "relative" }}>
      {}
      <Button
        buttonColor={theme?.green_500}
        variant="neumorp"
        textColor={theme?.white}
        style={{
          fontWeight: FONT_WEIGHT.BOLD,
          fontSize: FONT_SIZE.LARGE,
          position: "absolute",
          bottom: "8rem",
        }}
        width={"100%"}
        onClickHandler={() => router.push("/log/record")}
      >
        마실 기록 시작
      </Button>
    </GS.CommonContainer>
  );
};

export default TestHome;
