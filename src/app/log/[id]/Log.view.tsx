"use client";

import { useState } from "react";
import Link from "next/link";

import { MasilsDataType, TAB_CONTENTS } from "./Log.constants";

import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";

import { GeoPosition } from "@/types/OriginDataType";

import { Button, Tab } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { LogMapSection, LogKebabMenu, LogMemo, LogPin } from "./components";

import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./Log.styles";

interface LogViewProps {
  masilsData: MasilsDataType;
  baseLocation: GeoPosition;
}

const LogView = ({ masilsData, baseLocation }: LogViewProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPinIndex, setCurrentPinIndex] = useState(0);
  const [mapCenter, setMapCenter] = useState<GeoPosition>(baseLocation);
  const { setIsOutCenter } = useMasilMapStore();

  const handlePinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(1);

    if (masilsData.pins.length === 0) {
      return;
    }

    const { lat, lng } = masilsData.pins[PinIndex].point;
    setMapCenter({ lat, lng });
    setIsOutCenter(false);
  };

  const handleClickCenter = () => {
    setCurrentPinIndex(0);
    setTabIndex(0);
    setMapCenter(baseLocation);
    setIsOutCenter(false);
  };

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<LogKebabMenu />}
      />
      <S.LogContainer>
        <LogMapSection
          masilsData={masilsData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handlePinIndex}
          handleClickCenter={handleClickCenter}
        />
        <S.LogContentLayout>
          <Tab
            style={{
              fontSize: `${FONT_SIZE.H6}`,
              fontWeight: `${FONT_WEIGHT.BOLD}`,
            }}
            tabContents={TAB_CONTENTS}
            tabClickHandler={(index) => {
              setTabIndex(index);
            }}
            focusedTab={tabIndex}
          />

          <S.LogContentSection className="scrollbar-hide">
            {tabIndex === 0 && <LogMemo />}
            {tabIndex === 1 && (
              <LogPin
                pins={masilsData.pins}
                currentPinIndex={currentPinIndex}
                handlePinIndex={handlePinIndex}
              />
            )}
          </S.LogContentSection>

          <Link href="/post/:id">
            <Button
              width="calc(100% - 3rem)"
              textColor={Theme.lightTheme.white}
              buttonColor={Theme.lightTheme.green_500}
              style={{
                position: "absolute",
                left: "50%",
                bottom: "7rem",
                transform: "translateX(-50%)",
                fontSize: `${FONT_SIZE.LARGE}`,
                fontWeight: `${FONT_WEIGHT.BOLD}`,
              }}
            >
              산책 공유하기
            </Button>
          </Link>
        </S.LogContentLayout>
      </S.LogContainer>
    </>
  );
};

export default LogView;
