"use client";

import { CONTAINER, NAV_HEIGHT } from "@/styles/theme";

import userProfile from "@/assets/userProfile.svg";
import { Avatar } from "@/components";
import useMeStore from "@/lib/stores/useMeStore";
import { pathAbleCheck } from "@/lib/utils/pathAbleCheck";

import { BOTTOM_NAV_INABLE } from "../navInablePath";
import { BOTTOM_NAV_ITEMS } from "./BottomNavigator.constants";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

const BottomNavigator = () => {
  const currentPathName = usePathname();
  const { userId, profileImg } = useMeStore();

  /**
   * @description BOTTOM_NAV_INDABLE 에 포함된 path 인 경우 BottomNav 를 렌더링 하지 않습니다.
   */
  const navInAble = pathAbleCheck(BOTTOM_NAV_INABLE, currentPathName);

  if (navInAble) return null;

  const isPathActive = (path: string) => currentPathName.includes(path);

  return (
    <nav
      className="max-w fixed bottom-0 z-navigator flex w-full justify-around border-t-[0.1rem] border-transparent_10 bg-background_color"
      style={{
        maxWidth: `${CONTAINER.MAX_WIDTH}rem`,
        height: `${NAV_HEIGHT + 2}rem`,
        padding: `${CONTAINER.PADDING_HORIZONTAL}rem`,
      }}
    >
      {BOTTOM_NAV_ITEMS.map(({ path, icon, activeIcon, label, isProfile, isIdRequired }) => (
        <div
          key={path}
          className="flex flex-1 items-center justify-center"
        >
          <Link
            href={`${path}${isIdRequired && userId ? `/${userId}` : ""}`}
            title={label}
            className="px-5"
            scroll={false}
          >
            <div
              className={twJoin(
                "group flex cursor-pointer flex-col items-center justify-center text-center text-mini",
                isPathActive(path) ? "text-green_500" : "text-gray_300 hover:text-green_500",
              )}
              style={{
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              {isProfile && (
                <div
                  className={twJoin(
                    "mb-[0.4rem] flex h-[2.4rem] w-[2.4rem] cursor-pointer items-center justify-center rounded-[50%]",
                    isPathActive(path) ? "bg-green_500" : "bg-gray_300 group-hover:bg-green_500",
                  )}
                >
                  <Avatar
                    size="ms"
                    src={profileImg ? profileImg : userProfile}
                    style={{
                      pointerEvents: "none",
                    }}
                  />
                </div>
              )}
              {!isProfile && isPathActive(path) ? activeIcon : icon}
              {label}
            </div>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavigator;

BottomNavigator.__isStatic = true;
