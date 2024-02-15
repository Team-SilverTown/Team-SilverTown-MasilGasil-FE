"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, HomeFill, Exploration, ExplorationFill, Diary, DiaryFill } from "@/components/icons";
import * as S from "./BottomNavigator.style";
import { BOTTOM_NAV_INABLE } from "../navInablePath";

interface BottomNavItemProps {
  path: string;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  label: string;
  isProfile?: boolean;
}

const BottomNavigator = () => {
  const currentPathName = usePathname();

  const navAble = !BOTTOM_NAV_INABLE.includes(currentPathName);

  const isPathActive = (path: string) => currentPathName === path;

  const bottomNavItems: BottomNavItemProps[] = [
    { path: "/home", icon: <Home />, activeIcon: <HomeFill />, label: "홈" },
    { path: "/explore", icon: <Exploration />, activeIcon: <ExplorationFill />, label: "탐색" },
    { path: "/user/id/diary", icon: <Diary />, activeIcon: <DiaryFill />, label: "내 기록" },
    { path: "/user/id", label: "마이페이지", isProfile: true },
  ];

  if (!navAble) return null;

  return (
    <S.BottomNavContainer>
      {bottomNavItems.map(({ path, icon, activeIcon, label, isProfile }) => (
        <Link
          href={path}
          key={path}
        >
          <S.BottomNavItem active={isPathActive(path)}>
            {isProfile ? (
              <S.ProfileCircle active={isPathActive(path)} />
            ) : isPathActive(path) ? (
              activeIcon
            ) : (
              icon
            )}
            {label}
          </S.BottomNavItem>
        </Link>
      ))}
    </S.BottomNavContainer>
  );
};

export default BottomNavigator;
