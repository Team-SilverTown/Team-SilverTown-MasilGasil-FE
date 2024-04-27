"use client";

import style from "./Log.styles.module.css";

import tailwindConfig from "@/../tailwind.config";
import { Button, Tab } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { GeoPosition } from "@/types/OriginDataType";
import { MasilDetailResponse, UserInfoType } from "@/types/Response";

import { TAB_CONTENTS } from "./Log.constants";
import { TabType } from "./Log.types";
import { LogKebabMenu, LogMemo, LogPin } from "./components";
import { LogMapSection } from "./sections";

import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";

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
  const { theme } = resolveConfig(tailwindConfig);

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<LogKebabMenu />}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <section className="relative h-full min-h-dvh scale-100 select-none">
        <LogMapSection
          masilData={masilData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handleCurrentPinIndex}
          handleClickCenter={handleClickCenter}
        />
        <article className={`h-[55%] px-[2rem] ${style.log_tab}`}>
          <Tab
            tabContents={TAB_CONTENTS}
            tabClickHandler={handleClickTab}
            focusedTab={tabIndex}
            layoutId="log-underline"
            style={{
              fontSize: theme.fontSize["h6"],
              fontWeight: theme.fontWeight["bold"],
            }}
          />

          <div
            className={`px-[0.5rem] py-[1rem] scrollbar-hide ${style.calc_height}`}
            style={{
              overflowY: tabIndex === TabType.Pin ? "visible" : "auto",
            }}
          >
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

            <Link href={`/post/create?logId=${logId}`}>
              <Button
                width="calc(100% - 4rem)"
                textColor={theme.colors["white"]}
                buttonColor={theme.colors["green_500"]}
                style={{
                  position: "fixed",
                  left: "50%",
                  bottom: "9rem",
                  transform: "translateX(-50%)",
                  fontSize: `${theme.fontSize["large"]}`,
                  fontWeight: `${theme.fontWeight["bold"]}`,
                }}
              >
                산책 공유하기
              </Button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default LogView;
