import React from "react";

import { useUI } from "../uiContext/UiContext";

const URL_MAP = {
  POLICY_PERSONAL: "http://localhost:3000/signin/policy/personal",
  POLICY_LOCATION: "http://localhost:3000/signin/policy/location",
  POLICY_AGE: "http://localhost:3000/signin/policy/age",
};

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
