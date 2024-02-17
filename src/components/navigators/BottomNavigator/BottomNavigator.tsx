"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, HomeFill, Exploration, ExplorationFill, Diary, DiaryFill } from "@/components/icons";
import * as S from "./BottomNavigator.style";
import { BOTTOM_NAV_INABLE } from "../navInablePath";
import { BOTTOM_NAV_ITEMS } from "./BottomNavigator.constants";

const BottomNavigator = () => {
  const currentPathName = usePathname();

  const navAble = !BOTTOM_NAV_INABLE.includes(currentPathName);

  const isPathActive = (path: string) => currentPathName === path;

  if (!navAble) return null;

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
