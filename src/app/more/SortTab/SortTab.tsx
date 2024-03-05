"use client";

import React, { useState } from "react";
import { SORT_DATA } from "./SortTab.constants";
import * as S from "./SortTab.styles";
import { useRouter } from "next/navigation";

interface SortTabProps {
  keyword: string;
  order: string;
}

const SortTab = ({ keyword, order }: SortTabProps) => {
  const [sort, setSort] = useState(order);
  const router = useRouter();

  const handleFilterToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === sort) {
      return;
    }

    if (sort === "latest") {
      setSort("popular");
      router.push(`/more?keyword=${keyword}&order=popular`);
    } else {
      setSort("latest");
      router.push(`/more?keyword=${keyword}&order=latest`);
    }
  };

  return (
    <S.MoreListSort>
      {SORT_DATA.map(({ title, keyword }, index) => (
        <button
          key={index}
          type="button"
          className={sort === keyword ? "selected" : ""}
          title={keyword}
          id={keyword}
          onClick={handleFilterToggle}
        >
          {title}
        </button>
      ))}
    </S.MoreListSort>
  );
};

export default SortTab;
