"use client";

import React, { useRef } from "react";

import Sheet from "@components/BottomSheet";
import { Z_INDEX } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";

interface BottomSheetSectionProps {}

const BottomSheetSection = ({}: BottomSheetSectionProps) => {
  const theme = useTheme();

  return (
    <Sheet
      isOpen={true}
      onClose={() => null}
      fixedHeight={0.4}
      initialSnap={1}
      snapPoints={[0.9, 0.5]}
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
        <Sheet.Content>Bottom Sheet Content</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default BottomSheetSection;
