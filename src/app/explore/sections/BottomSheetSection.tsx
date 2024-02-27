"use client";

import React, { useRef } from "react";

import Sheet from "@components/BottomSheet";
import { NAV_HEIGHT, Z_INDEX } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";

interface BottomSheetSectionProps {}

const BottomSheetSection = ({}: BottomSheetSectionProps) => {
  const theme = useTheme();

  return (
    <Sheet
      isOpen={true}
      onClose={() => null}
      fixedHeight={0.5}
      snapPoints={[0.9, 0.5]}
      style={{
        zIndex: Z_INDEX.NAVIGATOR - 10,
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
