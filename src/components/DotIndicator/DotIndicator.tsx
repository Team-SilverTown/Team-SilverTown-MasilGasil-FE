"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Indicator {
  ref: number;
}

interface DotIndicatorProps {
  current: number;
  length: number;
}

const MAX_VISIBLE_INDICATORS = 4;

const DotIndicator = ({ current, length }: DotIndicatorProps) => {
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(MAX_VISIBLE_INDICATORS - 1);

  useEffect(() => {
    const newIndicators = [];
    for (let i = indicators.length || 0; i < length; i++) {
      newIndicators.push({ ref: i });
    }
    setIndicators(newIndicators);
  }, [length]);

  useEffect(() => {
    if (current < min) {
      setMin(current);
      setMax(current + MAX_VISIBLE_INDICATORS - 1);
      if (max > length) {
        setMax(length);
      }
    }
    if (current > max) {
      setMax(current);
      setMin(current - MAX_VISIBLE_INDICATORS + 1);
      if (min < 0) {
        setMin(0);
      }
    }
  }, [current, length]);

  const getIndicatorClass = (ref: number): string => {
    if (ref === current) {
      return "active";
    }
    if (ref >= min && ref <= max) {
      return "std";
    }
    if (ref === min - 1 || ref === max + 1) {
      return "small";
    }
    return "hidden";
  };

  return (
    <IndicatorsWrapper>
      {indicators.map((indicator) => (
        <div
          key={indicator.ref}
          className={getIndicatorClass(indicator.ref)}
        />
      ))}
    </IndicatorsWrapper>
  );
};

export default DotIndicator;

const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 5px;
    height: 5px;
    margin: 2px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.gray_300};
    overflow: hidden;
    transition: all 500ms ease-out;
    text-indent: -9999px;
  }
  .active {
    background-color: ${(props) => props.theme.text_primary_color};
  }
  .small {
    width: 3.5px;
    height: 3.5px;
    margin: 3px;
  }
  .hidden {
    width: 0;
    height: 0;
    margin: 4px 0;
  }
`;
