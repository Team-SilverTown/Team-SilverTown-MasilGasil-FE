"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as S from "./BottomNavigator.styles";
import { BOTTOM_NAV_INABLE } from "../navInablePath";
import { BOTTOM_NAV_ITEMS } from "./BottomNavigator.constants";

const BottomNavigator = () => {
  const currentPathName = usePathname();
  /**
   * @description BOTTOM_NAV_INDABLE 에 포함된 path 인 경우 BottomNav 를 렌더링 하지 않습니다.
   */
  const navAble = !BOTTOM_NAV_INABLE.some((path) => {
    if (path.endsWith("*")) {
      // BOTTOM_NAV 에 포함된 path 중 마지막에 * 접미사가 있는 경우 해당 경로로 시작하는 모든 경로에 대해 BottomNav 를 렌더링 하지 않습니다.
      const prefix = path.slice(0, -1);
      return currentPathName.startsWith(prefix);
    } else {
      // 그 외의 경우 경로명에 해당하는 path 에 대해서만 BottomNav 가 렌더링 되지 않습니다.
      return currentPathName === path;
    }
  });

  if (!navAble) return null;

  const isPathActive = (path: string) => currentPathName === path;

  return (
    <S.BottomNavContainer>
      {BOTTOM_NAV_ITEMS.map(({ path, icon, activeIcon, label, isProfile }) => (
        <Link
          href={path}
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
