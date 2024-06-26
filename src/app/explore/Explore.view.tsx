import * as GS from "@/styles/GlobalStyle";

import React from "react";

interface ExploreViewProps {
  children: React.ReactNode;
}

const ExploreView = ({ children }: ExploreViewProps) => {
  return (
    <GS.CommonContainer style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, height: "100%" }}>
      {children}
    </GS.CommonContainer>
  );
};

export default ExploreView;
