import { ListCard } from "@/components";
import { ListCardProps } from "@/components/ListCard/ListCard";

export default {
  title: "Component/ListCard",
  component: ListCard,
  argTypes: {
    isRecruit: { control: "boolean" },
    isLiked: { control: "boolean" },
    likeCount: { control: "number" },
    title: { control: "text" },
    content: { control: "text" },
    thumbnailURL: { control: "text" },
    address: { control: "text" },
    totalTime: { control: "number" },
    distance: { control: "number" },
  },
};

export const Default = (args: ListCardProps) => {
  return <ListCard {...args} />;
};

Default.args = {
  isRecruit: true,
  isLiked: true,
  likeCount: 1000,
  title: "타이틀",
  content: "서브타이틀",
  thumbnailURL:
    "https://github.com/Team-SilverTown/Team-SilverTown-MasilGasil-FE/assets/114329713/71d9e550-9196-4539-b014-aadd5ebdea53",
  address: "진주시·호탄동",
  totalTime: 30,
  distance: 1500,
};
