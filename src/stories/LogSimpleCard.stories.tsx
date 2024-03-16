import { LogSimpleCard } from "@/components";
import { LogSimpleCardProps } from "@/components/LogSimpleCard/LogSimpleCard";

export default {
  title: "Component/LogSimpleCard",
  component: LogSimpleCard,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    radius: { control: "number" },
    thumbnailUrl: { control: "text" },
    depth1: { control: "text" },
    depth2: { control: "text" },
    totalTime: { control: "text" },
    distance: { control: "text" },
    startedAt: { control: "text" },
  },
};

export const Default = (args: LogSimpleCardProps) => {
  return <LogSimpleCard {...args} />;
};

Default.args = {
  width: 160,
  height: 160,
  radius: 8,
  thumbnailUrl:
    "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  depth1: "경기도",
  depth2: "오산시",
  totalTime: "1시간 10분",
  distance: "2.2km",
  startedAt: "2024-02-07",
};
