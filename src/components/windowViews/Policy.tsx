import React from "react";

import { useUI } from "../uiContext/UiContext";

export default function Policy() {
  const { windowView } = useUI();

  return (
    <div>
      {windowView === "POLICY_PERSONAL" && <article>Policy 1</article>}
      {windowView === "POLICY_LOCATION" && <span>Policy 2</span>}
      {windowView === "POLICY_AGE" && <span>Policy 3</span>}
    </div>
  );
}
