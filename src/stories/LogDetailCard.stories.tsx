import { LogDetailCard } from "@/components";
import { LogDetailCardProps } from "@/components/LogDetailCard";

export default {
  title: "Component/LogDetailCard",
  component: LogDetailCard,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    thumbnailURL: { control: "text" },
    totalTime: { control: "text" },
    distance: { control: "text" },
    isSettingLayout: { control: "boolean", defaultValue: true },
    isLikeLayout: { control: "boolean" },
    isLiked: { control: "boolean" },
    likeCount: { control: "number" },
    onDetailClick: { action: "clicked" },
    onLikeClick: { action: "clicked" },
  },
};

export const Default = (args: LogDetailCardProps) => {
  return <LogDetailCard {...args} />;
};

Default.args = {
  title: "강변뷰가 맛도리인 호탄동 산책로",
  content: "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
  thumbnailURL:
    "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  totalTime: "1시간 30분",
  distance: "10.5km",
  isSettingLayout: true,
  isLikeLayout: true,
  isLiked: true,
  likeCount: 1000,
  onDetailClick: () => console.log("Detail View 클릭!"),
  onLikeClick: (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log("like 클릭 !!");
  },
};
