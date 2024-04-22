import { InputLabel } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * **공통 Input 컴포넌트**
 *
 * ### Props
 * - **type : **normal, safety, warn, danger중 한가지의 타입을 전달 받습니다.
 * - **text : **InputLabel에 보여질 텍스트를 전달받습니다.
 * - **fontSize : **폰트 크기를 전달받습니다.
 * - **fontColor : **폰트의 색상을 전달받습니다. - 색상 전달시 type이 동작하지 않습니다.
 * - **potion : **현재 InputLabel이 존재하는 위치에서 start, center, end로 이동합니다.
 * 만약 InputLabel이 움직일 여유 공간이없는경우 동작하지 않습니다.
 */
const meta = {
  title: "Components/InputLabel",
  component: InputLabel,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {
    text: "Input Label",
    fontSize: 18,
  },

  argTypes: {
    type: {
      description: "normal, safety, warn, danger중 한가지의 타입을 전달 받습니다.",
    },

    text: {
      description: "InputLabel에 보여질 텍스트를 전달받습니다.",
    },

    fontSize: {
      control: { type: "range", min: 10, max: 30 },
      description: "폰트 크기를 전달받습니다.",
    },

    fontColor: {
      control: "color",
      type: "string",
      description: "폰트의 색상을 전달받습니다. - 색상 전달시 type이 동작하지 않습니다.",
    },

    position: {
      description:
        "현재 InputLabel이 존재하는 위치에서 start, center, end로 이동합니다. 만약 InputLabel이 움직일 여유 공간이없는경우 동작하지 않습니다.",
    },

    style: {
      description: "기본 CSS 스타일",
    },
  },

  decorators: [
    (InputLabelComponents) => {
      return (
        <section className="flex h-[4rem] w-[60rem] items-center">
          <InputLabelComponents />
        </section>
      );
    },
  ],
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Type_Normal: Story = {
  args: {
    type: "normal",
  },
};

export const Type_Safety: Story = {
  args: {
    type: "safety",
  },
};

export const Type_Warn: Story = {
  args: {
    type: "warn",
  },
};

export const Type_Danger: Story = {
  args: {
    type: "danger",
  },
};

export const Position_Start: Story = {
  args: {
    position: "start",
  },
};

export const Position_Center: Story = {
  args: {
    position: "center",
  },
};

export const Position_End: Story = {
  args: {
    position: "end",
  },
};
