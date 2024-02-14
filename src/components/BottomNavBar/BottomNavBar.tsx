"use client";

import Link from "next/link";
import {
  Home,
  HomeFill,
  Exploration,
  ExplorationFill,
  Record,
  RecordFill,
} from "@/components/icons";
import * as S from "./BottomNavBar.style";
import { usePathname } from "next/navigation";

interface BottomNavItemProps {
  path: string;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  label: string;
  isProfile?: boolean;
}

const BottomNavBar = () => {
  const currentPathName = usePathname();

  const isPathActive = (path: string) => currentPathName === path;

  const bottomNavItems: BottomNavItemProps[] = [
    { path: "/home", icon: <Home />, activeIcon: <HomeFill />, label: "홈" },
    { path: "/explore", icon: <Exploration />, activeIcon: <ExplorationFill />, label: "탐색" },
    { path: "/record", icon: <Record />, activeIcon: <RecordFill />, label: "내 기록" },
    { path: "/signin", label: "마이페이지", isProfile: true },
  ];

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

export default BottomNavBar;
