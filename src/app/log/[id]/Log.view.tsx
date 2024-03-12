"use client";

import Link from "next/link";

import { TAB_CONTENTS } from "./Log.constants";

import { GeoPosition } from "@/types/OriginDataType";
import { MasilDetailResponse } from "@/types/Response";
import { TabType, UserInfoType } from "./Log.types";

import { Button, Tab } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { LogMapSection, LogKebabMenu, LogMemo, LogPin } from "./components";

import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./Log.styles";

interface LogViewProps {
  masilData: MasilDetailResponse;
  logId: string;
  userInfo: UserInfoType;
  tabIndex: number;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  setTabIndex: React.Dispatch<React.SetStateAction<TabType>>;
  handleCurrentPinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
  handleClickTab: (index: number) => void;
}

const LogView = ({
  masilData,
  logId,
  userInfo,
  tabIndex,
  currentPinIndex,
  mapCenter,
  handleCurrentPinIndex,
  handleClickCenter,
  handleClickTab,
}: LogViewProps) => {
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<LogKebabMenu />}
      />
      <S.LogContainer>
        <LogMapSection
          masilData={masilData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handleCurrentPinIndex}
          handleClickCenter={handleClickCenter}
        />
        <S.LogContentLayout>
          <Tab
            style={{
              fontSize: `${FONT_SIZE.H6}`,
              fontWeight: `${FONT_WEIGHT.BOLD}`,
            }}
            tabContents={TAB_CONTENTS}
            tabClickHandler={handleClickTab}
            focusedTab={tabIndex}
          />

          <S.LogContentSection className="scrollbar-hide">
            {tabIndex === TabType.Memo && (
              <LogMemo
                masilData={masilData}
                userInfo={userInfo}
              />
            )}
            {tabIndex === TabType.Pin && (
              <LogPin
                pins={masilData.pins}
                currentPinIndex={currentPinIndex}
                handlePinIndex={handleCurrentPinIndex}
              />
            )}
          </S.LogContentSection>

          <Link href={`/post/create?logId=${logId}`}>
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
