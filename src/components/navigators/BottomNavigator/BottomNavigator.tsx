"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import userProfile from "@/assets/userProfile.svg";
import { Avatar } from "@/components";
import useMeStore from "@/stores/useMeStore";
import { pathAbleCheck } from "@/utils/pathAbleCheck";

import * as S from "./BottomNavigator.styles";
import { BOTTOM_NAV_INABLE } from "../navInablePath";
import { BOTTOM_NAV_ITEMS } from "./BottomNavigator.constants";

const BottomNavigator = () => {
  const currentPathName = usePathname();
  const { userId, profileImg } = useMeStore();

  /**
   * @description BOTTOM_NAV_INDABLE 에 포함된 path 인 경우 BottomNav 를 렌더링 하지 않습니다.
   */
  const navInable = pathAbleCheck(BOTTOM_NAV_INABLE, currentPathName);

  if (navInable) return null;

  const isPathActive = (path: string) => currentPathName.includes(path);

  return (
    <S.BottomNavContainer>
      {BOTTOM_NAV_ITEMS.map(({ path, icon, activeIcon, label, isProfile, isIdRequired }) => (
        <div
          key={path}
          className="flex flex-1 justify-center items-center"
        >
          <Link
            href={`${path}${isIdRequired && userId ? `/${userId}` : ""}`}
            title={label}
            className="px-5"
            scroll={false}
          >
            <S.BottomNavItem $active={isPathActive(path)}>
              {isProfile && (
                <S.ProfileCircle $active={isPathActive(path)}>
                  <Avatar
                    size="ms"
                    src={profileImg ? profileImg : userProfile}
                  />
                </S.ProfileCircle>
              )}
              {!isProfile && isPathActive(path) ? activeIcon : icon}
              {label}
            </S.BottomNavItem>
          </Link>
        </div>
      ))}
    </S.BottomNavContainer>
  );
};

export default BottomNavigator;

BottomNavigator.__isStatic = true;
