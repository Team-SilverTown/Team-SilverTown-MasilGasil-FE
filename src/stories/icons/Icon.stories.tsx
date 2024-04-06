import React from "react";

import {
  AccountDelete,
  AccountManager,
  ArrowForward,
  ArrowLeft,
  ArrowRight,
  Bag,
  Camera,
  Center,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClearSky,
  CreditCard,
  Cross,
  Diary,
  DiaryFill,
  DotMenu,
  DoubleChevron,
  EditPencil,
  Exploration,
  ExplorationFill,
  FineDust,
  FootPrint,
  Github,
  Heart,
  Home,
  HomeFill,
  Image,
  Info,
  KebabMenu,
  Location,
  LogOut,
  MapPin,
  Menu,
  Message,
  Minus,
  More,
  NotificationActive,
  NotificationOff,
  Overcast,
  PartlyCloudy,
  PersonOff,
  PersonSearch,
  Pin,
  Plus,
  Rainy,
  Return,
  RunningMan,
  Search,
  Setting,
  ShoppingBag,
  Sleet,
  Snowy,
  TimeChecker,
  Trash,
  UserProfile,
  ViewIcon as ViewIconSVG,
} from "@/components/icons";
import type { Meta, StoryObj } from "@storybook/react";

const IconBox = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "4rem", height: "4rem" }}>{children}</div>;
};

/**
 * **공통 Icon 컴포넌트 모음**
 *
 * 현재 Icon들을 한눈에 확인할 수 있습니다.
 * */
const meta = {
  title: "Components/Icons",
  component: IconBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    children: { control: "null" },
  },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountDeleteIcon: Story = {
  args: {
    children: <AccountDelete size={"100%"} />,
  },
};

export const AccountManagerIcon: Story = {
  args: {
    children: <AccountManager size={"100%"} />,
  },
};

export const ArrowForwardIcon: Story = {
  args: {
    children: <ArrowForward size={"100%"} />,
  },
};

export const ArrowLeftIcon: Story = {
  args: {
    children: (
      <ArrowLeft
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ArrowRightIcon: Story = {
  args: {
    children: (
      <ArrowRight
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const BagIcon: Story = {
  args: {
    children: (
      <Bag
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CameraIcon: Story = {
  args: {
    children: (
      <Camera
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CenterIcon: Story = {
  args: {
    children: <Center size={"100%"} />,
  },
};

export const CheckIcon: Story = {
  args: {
    children: (
      <Check
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ChevronDownIcon: Story = {
  args: {
    children: (
      <ChevronDown
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ChevronLeftIcon: Story = {
  args: {
    children: (
      <ChevronLeft
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ChevronRightIcon: Story = {
  args: {
    children: (
      <ChevronRight
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ChevronUpIcon: Story = {
  args: {
    children: (
      <ChevronUp
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ClearSkyIcon: Story = {
  args: {
    children: (
      <ClearSky
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CreditCardIcon: Story = {
  args: {
    children: (
      <CreditCard
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CrossIcon: Story = {
  args: {
    children: (
      <Cross
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const DiaryIcon: Story = {
  args: {
    children: (
      <Diary
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const DiaryFillIcon: Story = {
  args: {
    children: (
      <DiaryFill
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const DotMenuIcon: Story = {
  args: {
    children: <DotMenu style={{ width: "100%", height: "100%" }} />,
  },
};

export const DoubleChevronIcon: Story = {
  args: {
    children: <DoubleChevron style={{ width: "100%", height: "100%" }} />,
  },
};

export const EditPencilIcon: Story = {
  args: {
    children: (
      <EditPencil
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ExplorationIcon: Story = {
  args: {
    children: (
      <Exploration
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ExplorationFillIcon: Story = {
  args: {
    children: (
      <ExplorationFill
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const FineDustIcon: Story = {
  args: {
    children: (
      <FineDust
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const FootPrintIcon: Story = {
  args: {
    children: (
      <FootPrint
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const GithubIcon: Story = {
  args: {
    children: (
      <Github
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const HeartIcon: Story = {
  args: {
    children: (
      <Heart
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const HomeIcon: Story = {
  args: {
    children: (
      <Home
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const HomeFillIcon: Story = {
  args: {
    children: (
      <HomeFill
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ImageIcon: Story = {
  args: {
    children: (
      <Image
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const InfoIcon: Story = {
  args: {
    children: (
      <Info
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const KebabMenuIcon: Story = {
  args: {
    children: <KebabMenu style={{ width: "100%", height: "100%" }} />,
  },
};

export const LocationIcon: Story = {
  args: {
    children: (
      <Location
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const LogOutIcon: Story = {
  args: {
    children: <LogOut size={"100%"} />,
  },
};

export const MapPinIcon: Story = {
  args: {
    children: <MapPin size={"100%"} />,
  },
};

export const MenuIcon: Story = {
  args: {
    children: <Menu style={{ width: "100%", height: "100%" }} />,
  },
};

export const MessageIcon: Story = {
  args: {
    children: <Message style={{ width: "100%", height: "100%" }} />,
  },
};

export const MinusIcon: Story = {
  args: {
    children: (
      <Minus
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const MoreIcon: Story = {
  args: {
    children: (
      <More
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const NotificationActiveIcon: Story = {
  args: {
    children: (
      <NotificationActive
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const NotificationOffIcon: Story = {
  args: {
    children: (
      <NotificationOff
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const OvercastIcon: Story = {
  args: {
    children: (
      <Overcast
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const PartlyCloudyIcon: Story = {
  args: {
    children: <PartlyCloudy style={{ width: "100%", height: "100%" }} />,
  },
};

export const PersonOffIcon: Story = {
  args: {
    children: <PersonOff />,
  },
};

export const PersonSearchIcon: Story = {
  args: {
    children: <PersonSearch />,
  },
};

export const PinIcon: Story = {
  args: {
    children: <Pin size={"100%"} />,
  },
};

export const PlusIcon: Story = {
  args: {
    children: (
      <Plus
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const RainyIcon: Story = {
  args: {
    children: (
      <Rainy
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ReturnIcon: Story = {
  args: {
    children: (
      <Return
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const RunningManIcon: Story = {
  args: {
    children: (
      <RunningMan
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const SearchIcon: Story = {
  args: {
    children: (
      <Search
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const SettingIcon: Story = {
  args: {
    children: (
      <Setting
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ShoppingBagIcon: Story = {
  args: {
    children: (
      <ShoppingBag
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const SleetIcon: Story = {
  args: {
    children: (
      <Sleet
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const SnowyIcon: Story = {
  args: {
    children: (
      <Snowy
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const TimeCheckerIcon: Story = {
  args: {
    children: (
      <TimeChecker
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const TrashIcon: Story = {
  args: {
    children: (
      <Trash
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ViewIcon: Story = {
  args: {
    children: (
      <ViewIconSVG
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const UserProfileIcon: Story = {
  args: {
    children: <UserProfile size={40} />,
  },
};
