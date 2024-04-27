import { ListCard, LogDetailCard } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** ListCard 컴포넌트**
 *
 * ### Props
 * - **title : **현재 Log의 제목을 전달받습니다.
 * - **content : **현재 Log의 내용을 전달받습니다.
 * - **thumbnailUrl : **현재 Log의 썸네일을 전달받습니다.
 *
 * <br>
 * - **distance : **현재 Log의 산책 거리를 전달받습니다.
 * - **totalTime : **현재 Log의 산책 소요시간을 전달받습니다.
 * - **likeCount : **현재 Log의 like 수를 전달받습니다.
 * - **address : **현재 Log의 주소를 전달받습니다.
 *
 * <br>
 * - **isLikeLayout : **Like Count를 보여줄지에 대한 여부를 boolean값으로 전달 받습니다.
 * - **isSettingLayout : **Setting DropDown Menu를 이용할지에 대한 여부를 boolean값으로 전달 받습니다.
 *
 * <br>
 * - **style : **CSS Properties를 전달받습니다.
 * - **onDetailClick : **Card를 클릭했을때 실행된 메서드를 전달받습니다.
 */
const meta = {
  title: "Components/LogDetailCard",
  component: LogDetailCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "text",
      description: "현재 Log의 제목을 전달받습니다.",
    },

    content: {
      control: "text",
      description: "현재 Log의 내용을 전달받습니다.",
    },

    thumbnailUrl: {
      control: "text",
      description: "현재 Log의 썸네일을 전달받습니다.",
    },

    likeCount: {
      control: "number",
      description: "현재 Log의 like 수를 전달받습니다.",
    },

    address: {
      control: "text",
      description: "현재 Log의 주소를 전달받습니다.",
    },

    totalTime: {
      control: "number",
      description: "현재 Log의 산책 소요시간을 전달받습니다.",
    },

    distance: {
      control: "number",
      description: "현재 Log의 산책 거리를 전달받습니다.",
    },

    isLikeLayout: {
      control: "boolean",
      description: "Like Count를 보여줄지에 대한 여부를 boolean값으로 전달 받습니다.",
    },

    isSettingLayout: {
      control: "boolean",
      description: "Setting DropDown Menu를 이용할지에 대한 여부를 boolean값으로 전달 받습니다.",
    },

    style: {
      control: {
        disable: true,
      },
      description: "CSS Properties를 전달받습니다.",
    },

    onDetailClick: {
      control: {
        disable: true,
      },
      description: "Card를 클릭했을때 실행된 메서드를 전달받습니다.",
    },

    userInfo: {
      control: {
        disable: true,
      },
    },

    totalDistance: {
      control: {
        disable: true,
      },
    },
  },

  args: {
    address: { depth1: "지역", depth2: "시", depth3: "동", depth4: "면" },
    title: "버스 정류장 테스트",
    content: "버스 정류장 테스트",
    totalTime: "23",
    distance: "145",
    likeCount: 2,
    thumbnailUrl:
      "https://masilgasil-s3.s3.amazonaws.com/dev-images/NDE4N2RmNjEtNzNjOS00YWYwLTk0NTUtOTEzMTBlNzQxYTBmYmxvYg==.null",
    isLikeLayout: true,
    isSettingLayout: true,
  },
} satisfies Meta<typeof LogDetailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsLikeLayoutFalse: Story = {
  args: {
    isLikeLayout: false,
  },
};

export const IsSettingLayoutFalse: Story = {
  args: {
    isSettingLayout: false,
  },
};

export const BothLayoutFalse: Story = {
  args: {
    isSettingLayout: false,
    isLikeLayout: false,
  },
};

export const FullField: Story = {
  args: {
    address: { depth1: "충청남도", depth2: "세종특별자치시", depth3: "대평동", depth4: "군산면" },
    title: "이건 제목 입니다. 이건 제목 입니다. 이건 제목 입니다. 이건 제목 입니다.",
    content: "버스 정류장 테스트 버스 정류장 테스트 버스 정류장 테스트 버스 정류장 테스트",
    totalTime: "9999",
    distance: "99999",
    likeCount: 9999,
    thumbnailUrl:
      "https://masilgasil-s3.s3.amazonaws.com/dev-images/NDE4N2RmNjEtNzNjOS00YWYwLTk0NTUtOTEzMTBlNzQxYTBmYmxvYg==.null",
    isSettingLayout: true,
    isLikeLayout: true,
  },
};
