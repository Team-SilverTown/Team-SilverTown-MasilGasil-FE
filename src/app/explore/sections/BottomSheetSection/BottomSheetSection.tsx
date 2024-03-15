"use client";

import React, { Dispatch, ReactNode, SetStateAction, useMemo, useRef, useState } from "react";

import useTheme from "@/lib/hooks/useTheme";
import { CONTAINER, Z_INDEX } from "@/styles/theme";
import { OrderTab, StepLayout, Tab } from "@/components";
import Sheet from "@components/BottomSheet";
import LoadingDots from "@/components/LoadingDots";

import * as S from "./BottomSheetSection.styles";
import { TabItem } from "../../components";
import parseLocationObject from "@/utils/parseLocation";

interface BottomSheetSectionProps {
  locationData: {
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  } | null;

  setOrderMode: Dispatch<SetStateAction<"LATEST" | "MOST_POPULAR">>;
  listViews: ReactNode[];
}

const tabTitles = ["산책로", "메이트"];

const BottomSheetSection = ({ locationData, setOrderMode, listViews }: BottomSheetSectionProps) => {
  const theme = useTheme();

  const locationContent = useMemo(() => {
    if (!locationData) return null;

    return parseLocationObject(locationData);
  }, [locationData]);

  const [focusedTab, setFocusedTab] = useState(0);
  const prevFocusedTab = useRef(focusedTab);

  const tabClickHandler = (index: number) => {
    prevFocusedTab.current = focusedTab;
    setFocusedTab(index);
  };

  return (
    <>
      <Sheet
        isOpen={true}
        onClose={() => null}
        fixedHeight={0.6}
        initialSnap={1}
        snapPoints={[0.915, 0.5]}
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
                latestHandleFunction={() => setOrderMode("LATEST")}
                popularHandlerFunction={() => setOrderMode("MOST_POPULAR")}
              />
            </S.UtilGroupWrapper>
          </Sheet.Header>
          <Sheet.Content style={{ marginTop: "2.5rem" }}>
            <Sheet.Scroller
              style={{ height: `calc(100% - 60px)` }}
              draggableAt="top"
              className="scrollbar-hide"
            >
              <StepLayout
                focusedStep={focusedTab}
                prevFocusedStep={prevFocusedTab.current}
                stepViews={listViews}
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
