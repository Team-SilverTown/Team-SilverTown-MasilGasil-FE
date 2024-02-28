"use client";

import React, { useRef } from "react";

import Sheet from "@components/BottomSheet";
import { Z_INDEX } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";

interface BottomSheetSectionProps {
  location: {
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  } | null;
}

const BottomSheetSection = ({ location }: BottomSheetSectionProps) => {
  const theme = useTheme();

  return (
    <Sheet
      isOpen={true}
      onClose={() => null}
      fixedHeight={0.51}
      initialSnap={1}
      snapPoints={[0.91, 0.41]}
      style={{
        zIndex: Z_INDEX.BOTTOM_SHEET,
      }}
    >
      <Sheet.Container
        style={{
          maxWidth: 600,
          left: "50%",
          translateX: "-50%",
          backgroundColor: theme?.background_color,
        }}
      >
        <Sheet.Header />
        <Sheet.Content>{JSON.stringify(location)}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default BottomSheetSection;
