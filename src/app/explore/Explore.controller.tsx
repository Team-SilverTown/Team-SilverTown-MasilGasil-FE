"use client";

import React, { useRef } from "react";

import ExploreView from "./Explore.view";
import MapSection from "./sections/MapSection";
import BottomSheetSection from "./sections/BottomSheetSection";

const ExploreController = () => {
  return (
    <ExploreView>
      <MapSection />
      <BottomSheetSection />
    </ExploreView>
  );
};

export default ExploreController;
