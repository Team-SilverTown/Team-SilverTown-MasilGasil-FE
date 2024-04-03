import * as S from "./TabItem.styles";

import React from "react";

interface TabItemProps {
  item: string;
  index: number;
  focusedTab: number;
}

const TabItem = ({ item, index, focusedTab }: TabItemProps) => {
  return (
    <S.Tab key={index}>
      <S.TabContent
        $isFocused={focusedTab === index}
        className={"z-10 transition-colors duration-500"}
      >
        {item}
      </S.TabContent>
      {focusedTab == index && (
        <S.TabActive
          layoutId="active-fill"
          className="absolute inset-0 rounded-full bg-green-500"
        />
      )}
    </S.Tab>
  );
};

export default TabItem;
