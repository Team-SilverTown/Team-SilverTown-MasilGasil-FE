import { PinDetailCard } from "@/components";
import { PinDetailCardProps } from "@/components/PinDetailCard/PinDetailCard";

export default {
  title: "Component/LogDetailCard",
  component: PinDetailCard,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    borderRadius: { control: "number" },
    title: { control: "text" },
    content: { control: "text" },
    thumbnailURL: { control: "text" },
    index: { control: "number" },
    PinTotalLength: { control: "number" },
  },
};

export const Default = (args: PinDetailCardProps) => {
  return <PinDetailCard {...args} />;
};

Default.args = {
  width: 390,
  height: 200,
  borderRadius: 8,
  title: "산책로 매력 포인트 1",
  content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
  thumbnailURL:
    "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  index: 1,
  PinTotalLength: 5,
};
