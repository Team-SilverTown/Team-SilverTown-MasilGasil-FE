import { MateCard } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** Mate Card 컴포넌트**
 *
 * ### Props
 * - **profileImage : **Mate 게시물 작성자의 Profile 이미지를 전달받습니다.
 * - **nickName : **Mate 게시물 작성자의 닉네임을 전달받습니다.
 * - **title : **Mate 게시물의 제목을 전달받습니다.
 * - **date : **Mate 모집 날짜를 전달받습니다.
 * - **capacity : **Mate의 총 모집 인원을 전달받습니다.
 * - **status : **현재 Mate 게시물의 "OPEN" "CLOSE" 상태를 전달받습니다.
 */
const meta = {
  title: "Components/MateCard",
  component: MateCard,

  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],

  argTypes: {
    profileImage: {
      control: "text",
      description: "Mate 게시물 작성자의 Profile 이미지를 전달받습니다.",
    },

    nickName: {
      control: "text",
      description: "Mate 게시물 작성자의 닉네임을 전달받습니다.",
    },

    title: {
      control: "text",
      description: "Mate 게시물의 제목을 전달받습니다.",
    },

    date: {
      control: "text",
      description: "Mate 모집 날짜를 전달받습니다.",
    },

    capacity: {
      control: "number",
      description: "Mate의 총 모집 인원을 전달받습니다.",
    },

    status: {
      control: {
        type: "inline-radio",
        options: ["OPEN", "CLOSE"],
      },
      description: "현재 Mate 게시물의 `OPEN` `CLOSE` 상태를 전달받습니다.",
    },
  },

  args: {
    profileImage:
      "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif",
    nickName: "잔액부족",
    title: "제목 칸 입니다.",
    date: new Date().toString(),
    capacity: 8,
    status: "OPEN",
  },
} satisfies Meta<typeof MateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StatusOpen: Story = {
  args: {
    status: "OPEN",
  },
};

export const StatusClose: Story = {
  args: {
    status: "CLOSED",
  },
};
