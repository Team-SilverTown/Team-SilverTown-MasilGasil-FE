"use client";

import { useState } from "react";
import { SORT_DATA, SORT_TAB } from "./SortTab.constants";
import * as S from "./SortTab.styles";

const SortTab = () => {
  const [sortTab, setSortTab] = useState<"latest" | "popular">(SORT_TAB.LATEST);

  const handleFilterToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.title === SORT_TAB.LATEST) {
      setSortTab(SORT_TAB.LATEST);
    } else {
      setSortTab(SORT_TAB.POPULAR);
    }
  };

  return (
    <S.MoreListSort>
      {SORT_DATA.map(({ title, keyword }, index) => (
        <button
          key={index}
          type="button"
          className={sortTab === keyword ? "selected" : ""}
          title={keyword}
          onClick={handleFilterToggle}
        >
          {title}
        </button>
      ))}
    </S.MoreListSort>
  );
};

export default SortTab;
