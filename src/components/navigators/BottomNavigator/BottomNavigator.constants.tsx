import { Home, HomeFill, Exploration, ExplorationFill, Diary, DiaryFill } from "@/components/icons";

export interface BottomNavItemProps {
  path: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  isProfile?: boolean;
}

export const BOTTOM_NAV_ITEMS: BottomNavItemProps[] = [
  { path: "/home", icon: <Home />, activeIcon: <HomeFill />, label: "홈" },
  { path: "/explore", icon: <Exploration />, activeIcon: <ExplorationFill />, label: "탐색" },
  { path: "/diary/id", icon: <Diary />, activeIcon: <DiaryFill />, label: "산책일지" },
  { path: "/user/id", label: "마이페이지", isProfile: true },
];
