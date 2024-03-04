import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

import * as S from "./Tab.styles";
import { NAV_HEIGHT } from "@/styles/theme";

interface TabProps {
  tabContents: Array<string>;
  tabClickHandler: (index: number) => void;
  focusedTab: number;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
}

const Tab = ({
  tabContents,
  tabClickHandler,
  focusedTab = -1,
  width = "100%",
  height = `${NAV_HEIGHT}rem`,
  style,
}: TabProps) => {
  return (
    <S.Tabs style={{ width, height, ...style }}>
      {tabContents.map((item, index) => (
        <S.Tab
          key={index}
          onClick={() => tabClickHandler(index)}
        >
          <S.TabText $focused={index === focusedTab}>{item}</S.TabText>
          {index === focusedTab ? (
            <motion.div
              className="underline"
              layoutId="underline"
            />
          ) : null}
        </S.Tab>
      ))}
    </S.Tabs>
  );
};

export default Tab;
