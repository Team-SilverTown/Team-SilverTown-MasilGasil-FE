"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { pathAbleCheck } from "@/utils/pathAbleCheck";

import * as S from "./BottomNavigator.styles";
import { BOTTOM_NAV_INABLE } from "../navInablePath";
import { BOTTOM_NAV_ITEMS } from "./BottomNavigator.constants";
import useMeStore from "@/stores/useMeStore";

const BottomNavigator = () => {
  const currentPathName = usePathname();
  /**
   * @description BOTTOM_NAV_INDABLE 에 포함된 path 인 경우 BottomNav 를 렌더링 하지 않습니다.
   */
  const navInable = pathAbleCheck(BOTTOM_NAV_INABLE, currentPathName);

  if (navInable) return null;

  const isPathActive = (path: string) => currentPathName.includes(path);
  const { userId } = useMeStore();

  return (
    <S.BottomNavContainer>
      {BOTTOM_NAV_ITEMS.map(({ path, icon, activeIcon, label, isProfile, isIdRequired }) => (
        <Link
          href={`${path}${isIdRequired && userId ? `/${userId}` : ""}`}
          key={path}
          title={label}
        >
          <S.BottomNavItem $active={isPathActive(path)}>
            {isProfile && <S.ProfileCircle $active={isPathActive(path)} />}
            {!isProfile && isPathActive(path) ? activeIcon : icon}
            {label}
          </S.BottomNavItem>
        </Link>
      ))}
    </S.BottomNavContainer>
  );
};

export default BottomNavigator;

BottomNavigator.__isStatic = true;
