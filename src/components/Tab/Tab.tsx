"use client";

import React, { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import * as S from "./Tab.styles";
import { NAV_HEIGHT } from "@/styles/theme";

interface TabProps {
  tabContents: Array<string>;
  tabClickHandler: (index: number) => void;
  focusedTab: number;
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  TabComponent?: React.ComponentType<any>;
  layoutId?: string;
}

const Tab = ({
  tabContents,
  tabClickHandler,
  focusedTab = -1,
  width = "100%",
  height = `${NAV_HEIGHT}rem`,
  className,
  style,
  TabComponent,
  layoutId,
}: TabProps) => {
  return (
    <S.Tabs
      style={{ width, height, ...style }}
      className={className}
    >
      {tabContents.map((item, index) => (
        <S.Tab
          key={index}
          onClick={() => tabClickHandler(index)}
        >
          {TabComponent ? (
            <TabComponent
              item={item}
              index={index}
            />
          ) : (
            <>
              <S.TabText
                $focused={index === focusedTab}
                className="z-20"
              >
                {item}
              </S.TabText>
              {index === focusedTab ? (
                <motion.div
                  className="underline"
                  layoutId={layoutId}
                />
              ) : null}
            </>
          )}
        </S.Tab>
      ))}
    </S.Tabs>
  );
};

export default Tab;
