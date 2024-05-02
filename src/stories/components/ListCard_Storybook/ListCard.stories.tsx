import { ListCard } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** ListCard 컴포넌트**
 *
 * ### Props
 * - **isRecruit : **현재 모집 중인지에 대한 여부를 boolean 값으로 전달 받습니다.
 * - **isLiked : **현재 인증한 유저가 좋아요한 여부를 boolean값으로 전달 받습니다.
 *
 * - **likeCount : **현재 post의 like 수를 전달받습니다.
 * - **title : **현재 Post의 제목을 전달받습니다.
 * - **content : **현재 Post의 내용을 전달받습니다.
 * - **thumbnailUrl : **현재 Post의 썸네일을 전달받습니다.
 * - **address : **현재 Post의 주소를 전달받습니다.
 * - **totalTime : **현재 Post의 산책 소요시간을 전달받습니다.
 * - **distance : **현재 Post의 산책 거리를 전달받습니다.
 *
 * - **style : **CSS Properties를 전달받습니다.
 * - **onCardClickHandler : **Card를 클릭했을때 실행된 메서드를 전달받습니다.
 * - **onLikeClickHandler : **Card내부 좋아요를 클릭했을때 실행된 메서드를 전달받습니다.
 *
 */
const meta = {
  title: "Components/ListCard",
  component: ListCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    isRecruit: {
      control: "boolean",
      description: "현재 모집 중인지에 대한 여부를 boolean 값으로 전달 받습니다.",
    },

    isLiked: {
      control: "boolean",
      description: "현재 인증한 유저가 좋아요한 여부를 boolean값으로 전달 받습니다.",
    },

    likeCount: {
      control: "number",
      description: "현재 post의 like 수를 전달받습니다.",
    },

    title: {
      control: "text",
      description: "현재 Post의 제목을 전달받습니다.",
    },

    content: {
      control: "text",
      description: "현재 Post의 내용을 전달받습니다.",
    },

    thumbnailUrl: {
      control: "text",
      description: "현재 Post의 썸네일을 전달받습니다.",
    },

    address: {
      control: "text",
      description: "현재 Post의 주소를 전달받습니다.",
    },

    totalTime: {
      control: "number",
      description: "현재 Post의 산책 소요시간을 전달받습니다.",
    },

    distance: {
      control: "number",
      description: "현재 Post의 산책 거리를 전달받습니다.",
    },

    style: {
      control: {
        disable: true,
      },
      description: "CSS Properties를 전달받습니다.",
    },

    onCardClickHandler: {
      control: {
        disable: true,
      },
      description: "Card를 클릭했을때 실행된 메서드를 전달받습니다.",
    },

    onLikeClickHandler: {
      control: {
        disable: true,
      },
      description: "Card 내부 좋아요를 클릭했을때 실행된 메서드를 전달받습니다.",
    },
  },

  args: {
    address: "경상남도 진주시",
    title: "버스 정류장 테스트",
    content: "버스 정류장 테스트",
    totalTime: 23,
    distance: 145,
    likeCount: 2,
    thumbnailUrl:
      "https://masilgasil-s3.s3.amazonaws.com/dev-images/NDE4N2RmNjEtNzNjOS00YWYwLTk0NTUtOTEzMTBlNzQxYTBmYmxvYg==.null",
    isLiked: false,
    isRecruit: false,
  },
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsRecruitTrue: Story = {
  args: {
    isRecruit: true,
  },
};

export const IsLikedTrue: Story = {
  args: {
    isLiked: true,
  },
};

export const FullField: Story = {
  args: {
    title: "이건 제목입니다. 이건 제목입니다. 이건 제목입니다.",
    content: "내용인 텍스트입니다. 내용인 텍스트입니다. 내용인 텍스트입니다. ",
    totalTime: 9999,
    distance: 999999,
    likeCount: 9999,
    isLiked: true,
    isRecruit: true,
  },
};
