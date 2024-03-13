"use client";

import React, { useMemo, useRef, useState } from "react";
import * as _ from "lodash";

import useTheme from "@/lib/hooks/useTheme";
import { CONTAINER, Z_INDEX } from "@/styles/theme";
import { OrderTab, StepLayout, Tab } from "@/components";
import Sheet from "@components/BottomSheet";
import LoadingDots from "@/components/LoadingDots";

import * as S from "./BottomSheetSection.styles";
import { TabItem } from "../../components";

interface BottomSheetSectionProps {
  locationData: {
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  } | null;
}

const tabTitles = ["산책로", "메이트"];

const BottomSheetSection = ({ locationData }: BottomSheetSectionProps) => {
  const theme = useTheme();

  const locationContent = useMemo(() => {
    if (!locationData) return null;

    return _.reduce(locationData, (acc, curr) => {
      if (!curr) return acc;
      return acc + " " + curr;
    });
  }, [locationData]);

  const [focusedTab, setFocusedTab] = useState(0);
  const prevFocusedTab = useRef(focusedTab);

  const tabClickHandler = (index: number) => {
    prevFocusedTab.current = focusedTab;
    setFocusedTab(index);
  };

  const stepViews = [
    <div>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((index) => (
        <div
          key={index}
          className="w-full h-[150px] bg-gray-300 mb-5 scrollbar-hide"
        >
          {index}
        </div>
      ))}
    </div>,
    <div>메이트</div>,
  ];

  return (
    <>
      <Sheet
        isOpen={true}
        onClose={() => null}
        fixedHeight={0.51}
        initialSnap={1}
        snapPoints={[0.915, 0.415]}
        style={{
          zIndex: Z_INDEX.BOTTOM_SHEET,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Sheet.Container
          layout
          style={{
            maxWidth: 600,
            backgroundColor: theme?.background_color,
            padding: `${CONTAINER.PADDING_VERTICAL}rem ${CONTAINER.PADDING_HORIZONTAL}rem`,
            paddingTop: 0,
          }}
        >
          <Sheet.Header style={{ width: "100%" }}>
            <Tab
              focusedTab={focusedTab}
              tabClickHandler={tabClickHandler}
              tabContents={tabTitles}
              TabComponent={({ item, index }) => (
                <TabItem
                  focusedTab={focusedTab}
                  index={index}
                  item={item}
                />
              )}
              style={{
                borderBottomWidth: 0,
                backgroundColor: "#EFEFEF",
                borderRadius: "9999px",
                height: "5rem",
              }}
            />
            <S.UtilGroupWrapper className="_util mt-5 flex justify-between">
              {locationContent ? <span>{locationContent}</span> : <LoadingDots />}
              <OrderTab
                latestHandleFunction={() => null}
                popularHandlerFunction={() => null}
              />
            </S.UtilGroupWrapper>
          </Sheet.Header>
          <Sheet.Content style={{ marginTop: "2.5rem" }}>
            <Sheet.Scroller style={{ height: `calc(100% - 60px)` }}>
              <StepLayout
                focusedStep={focusedTab}
                prevFocusedStep={prevFocusedTab.current}
                stepViews={stepViews}
                style={{ height: `calc(100%)`, position: "relative" }}
              />
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BottomSheetSection;
