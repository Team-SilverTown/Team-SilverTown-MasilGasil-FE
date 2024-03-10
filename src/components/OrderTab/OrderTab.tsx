import React, { useState } from "react";

import * as S from "./OrderTab.styles";

export type OrderType = "latest" | "popular";

interface OrderTabProps {
  latestHandleFunction: () => void;
  popularHandlerFunction: () => void;
}

const orderContent = [
  {
    title: "최신순",
    keyword: "latest",
  },
  {
    title: "인기순",
    keyword: "popular",
  },
];

const OrderTab = ({ latestHandleFunction, popularHandlerFunction }: OrderTabProps) => {
  const [orderMode, setOrderMode] = useState<OrderType>("latest");

  const toggler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === orderMode) return;
    
    const nextOrderMode: OrderType = orderMode === "latest" ? "popular" : "latest";

    setOrderMode(nextOrderMode);

    if (nextOrderMode === "latest") {
      latestHandleFunction();
    } else popularHandlerFunction();
  };

  return (
    <S.OrderTabWrapper>
      {orderContent.map(({ keyword, title }, index) => (
        <button
          key={index}
          type="button"
          className={orderMode === keyword ? "selected" : ""}
          title={keyword}
          id={keyword}
          onClick={toggler}
        >
          {title}
        </button>
      ))}
    </S.OrderTabWrapper>
  );
};

export default OrderTab;
