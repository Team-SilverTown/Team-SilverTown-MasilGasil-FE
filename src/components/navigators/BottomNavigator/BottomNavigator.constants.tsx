import { Diary, DiaryFill, Exploration, ExplorationFill, Home, HomeFill } from "@/components/icons";

export interface BottomNavItemProps {
  path: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  isProfile?: boolean;
  isIdRequired: boolean;
}

export const BOTTOM_NAV_ITEMS: BottomNavItemProps[] = [
  {
    path: "/home",
    icon: (
      <Home className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] stroke-gray_300 group-hover:stroke-green_500" />
    ),
    activeIcon: <HomeFill className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] fill-green_500" />,
    label: "홈",
    isIdRequired: false,
  },
  {
    path: "/explore",
    icon: (
      <Exploration className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] stroke-gray_300 group-hover:stroke-green_500" />
    ),
    activeIcon: <ExplorationFill className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] fill-green_500" />,
    label: "탐색",
    isIdRequired: false,
  },
  {
    path: "/diary",
    icon: (
      <Diary className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] stroke-gray_300 group-hover:stroke-green_500" />
    ),
    activeIcon: <DiaryFill className="mb-[0.4rem] h-[2.2rem] w-[2.2rem] fill-green_500" />,
    label: "산책일지",
    isIdRequired: true,
  },
  { path: "/user", label: "마이페이지", isProfile: true, isIdRequired: true },
];
