"use client";

import * as S from "./SortTab.styles";

import React, { useState } from "react";

import { SORT_DATA } from "./SortTab.constants";

import { useRouter } from "next/navigation";

interface SortTabProps {
  keyword: string;
  order: string;
  userId?: number;
}

const SortTab = ({ keyword, order, userId }: SortTabProps) => {
  const [sort, setSort] = useState(order);
  const router = useRouter();

  const handleFilterToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === sort) {
      return;
    }

    if (sort === "latest") {
      setSort("popular");
      const url = `/more?keyword=${keyword}&order=popular${userId ? `&userId=${userId}` : ""}`;
      router.replace(url, { scroll: false });
    } else {
      setSort("latest");
      const url = `/more?keyword=${keyword}&order=latest${userId ? `&userId=${userId}` : ""}`;
      router.replace(url, { scroll: false });
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
