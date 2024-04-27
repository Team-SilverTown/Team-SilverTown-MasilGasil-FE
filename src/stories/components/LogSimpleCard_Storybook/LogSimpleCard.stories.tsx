import { LogSimpleCard } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** ListCard 컴포넌트**
 *
 * ### Props
 * - **width : **Card의 width값을 지정합니다. - default : 160
 * - **height : **Card의 height 지정합니다. - default : 160
 * - **radius : **Card의 radius 지정합니다. - default : 8
 *
 * <br>
 * - **thumbnailUrl : **현재 Log의 썸네일을 전달받습니다.
 * - **depth1 : **현재 Log의 depth1에 해당하는 주소를 전달받습니다.
 * - **depth2 : **현재 Log의 depth2 해당하는 주소를 전달받습니다.
 * - **totalTime : **현재 Log의 산책 소요시간을 전달받습니다.
 * - **distance : **현재 Log의 산책 거리를 전달받습니다.
 * - **startedAt : **현재 Log의 시작 시간을 전달받습니다.
 *
 * <br>
 * - **style : **CSS Properties를 전달받습니다.
 * - **onClick : **Card를 클릭했을때 실행된 메서드를 전달받습니다.
 */
const meta = {
  title: "Components/LogSimpleCard",
  component: LogSimpleCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    width: {
      control: "number",
      description: "Card의 width값을 지정합니다. - default : 160",
    },

    height: {
      control: "number",
      description: "Card의 height 지정합니다. - default : 160",
    },

    radius: {
      control: "text",
      description: "Card의 radius 지정합니다. - default : 8",
    },

    thumbnailUrl: {
      control: "text",
      description: "현재 Log의 썸네일을 전달받습니다.",
    },

    depth1: {
      control: "text",
      description: "현재 Log의 depth1에 해당하는 주소를 전달받습니다.",
    },

    depth2: {
      control: "text",
      description: "현재 Log의 depth2 해당하는 주소를 전달받습니다.",
    },

    distance: {
      control: "text",
      description: "현재 Log의 산책 거리를 전달받습니다.",
    },

    totalTime: {
      control: "text",
      description: "현재 Log의 산책 소요시간을 전달받습니다.",
    },

    startedAt: {
      control: "text",
      description: "현재 Log의 시작 시간을 전달받습니다.",
    },

    style: {
      control: {
        disable: true,
      },
      description: "CSS Properties를 전달받습니다.",
    },

    onClick: {
      control: {
        disable: true,
      },
      description: "Card를 클릭했을때 실행된 메서드를 전달받습니다.",
    },
  },

  args: {
    depth1: "충청남도",
    depth2: "세종시",
    totalTime: "23",
    distance: "145",
    startedAt: "15 : 00",
    thumbnailUrl:
      "https://masilgasil-s3.s3.amazonaws.com/dev-images/NDE4N2RmNjEtNzNjOS00YWYwLTk0NTUtOTEzMTBlNzQxYTBmYmxvYg==.null",
    onClick: () => {},
  },
} satisfies Meta<typeof LogSimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullField: Story = {
  args: {
    depth1: "충청남도",
    depth2: "세종특별자치시",
    totalTime: "9999",
    distance: "9999",
    startedAt: "24 : 59",
  },
};
