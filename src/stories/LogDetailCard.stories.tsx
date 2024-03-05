import { LogDetailCard } from "@/components";
import { LogDetailCardProps } from "@/components/LogDetailCard";

export default {
  title: "Component/LogDetailCard",
  component: LogDetailCard,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    thumbnailUrl: { control: "text" },
    distance: { control: "text" },
    totalDistance: { control: "number" },
    totalTime: { control: "text" },
    likeCount: { control: "number" },

    isLiked: { control: "boolean" },
    isLikeLayout: { control: "boolean" },
    isSettingLayout: { control: "boolean" },

    onDetailClick: { action: "clicked" },
    onLikeClick: { action: "clicked" },
    "userInfo.sex": {
      control: { type: "radio", options: ["MALE", "FEMALE"] },
    },
    "userInfo.birthDate": {
      control: "date",
    },
    "userInfo.height": {
      control: "number",
    },
    "userInfo.weight": {
      control: "number",
    },
    "userInfo.exerciseIntensity": {
      control: { type: "radio", options: ["SUPER_LOW", "LOW", "MIDDLE", "HIGH", "SUPER_HIGH"] },
    },
  },
};

export const Default = (args: LogDetailCardProps) => {
  return <LogDetailCard {...args} />;
};

Default.args = {
  title: "강변뷰가 맛도리인 호탄동 산책로",
  content: "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
  thumbnailUrl:
    "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  distance: "10.5km",
  totalDistance: 11000,
  totalTime: "1시간 30분",
  likeCount: 1000,
  isLiked: true,
  isLikeLayout: true,
  isSettingLayout: true,
  onDetailClick: () => console.log("Detail View 클릭!"),
  onLikeClick: (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log("like 클릭 !!");
  },
  userInfo: {
    sex: "MALE",
    birthDate: "1990-01-01",
    height: 180,
    weight: 70,
    exerciseIntensity: "MIDDLE",
  },
};
