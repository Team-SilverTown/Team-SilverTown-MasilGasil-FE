import { Button } from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

/**
 * **공통 Button 컴포넌트**
 *
 * ### Props
 * - **variant : **v버튼의 생김새를 지정합니다.
 * - **buttonColor : **버튼의 색상을 정의합니다.
 * - **textColor : **버튼 내부 텍스트 색상을 정의합니다.
 * - **width : **버튼의 너비를 정의합니다.
 * - **disabled : **boolean 값을 전달하여 버튼의 바활성화 여부를 정의합니다.
 * - **isLoading : **로딩 상테( boolean )값을 전달하여 로딩에 따른 버튼 디자인을 정의합니다.
 * - **useRipple : **boolean 값에따라 버튼 클릭시 Ripple 디자인을 사용할지 정의합니다.
 * - **rippleColor : **ripple 동작시 색상을 정의합니다.
 * - **onClickHandler : **버튼 클릭시 수행될 메서드를 전달받습니다.
 * - **handlerDelay : **버튼 클릭시 전달받은 onClickHandler 메서드의 실행을 지연시킵니다. - ms
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    children: "Button",
    buttonColor: "#81BB26",
    textColor: "#FFFFFF",
    width: "10rem",
    onClickHandler: fn(),
  },

  argTypes: {
    children: {
      description: "일반 children Props",
    },

    buttonColor: {
      control: "color",
      description: "버튼의 색상을 정의합니다.",
    },

    textColor: {
      control: "color",
      description: "버튼 내부 텍스트 색상을 정의합니다.",
    },

    width: {
      description: "버튼의 너비를 정의합니다.",
    },

    onClickHandler: {
      description: "버튼 클릭시 수행될 메서드를 전달받습니다.",
    },

    variant: {
      control: "inline-radio",
      options: ["flat", "neumorp", "naked", "outline", "disabled"],
      description: "버튼의 생김새를 지정합니다.",
    },

    isLoading: {
      control: "boolean",
      type: "boolean",
      description: "로딩 상테( boolean )값을 전달하여 로딩에 따른 버튼 디자인을 정의합니다.",
    },

    useRipple: {
      control: "boolean",
      description: "boolean 값에따라 버튼 클릭시 Ripple 디자인을 사용할지 정의합니다.",
    },

    handlerDelay: {
      control: { type: "range", min: 100, max: 2000 },
      description: "버튼 클릭시 전달받은 onClickHandler 메서드의 실행을 지연시킵니다. - ms",
    },

    disabled: {
      control: "boolean",
      description: "boolean 값을 전달하여 버튼의 바활성화 여부를 정의합니다.",
    },

    rippleColor: {
      control: "color",
      description: "ripple 동작시 색상을 정의합니다.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant_Flat: Story = {
  args: {
    variant: "flat",
  },
};

export const Variant_Neumorp: Story = {
  args: {
    variant: "neumorp",
  },
};

export const Variant_Naked: Story = {
  args: {
    variant: "naked",
    textColor: "#000",
  },
};

export const Variant_Outline: Story = {
  args: {
    variant: "outline",
    textColor: "#000",
  },
};

export const Variant_Disable: Story = {
  args: {
    variant: "disabled",
  },
};

export const IsLoading_True: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled_True: Story = {
  args: {
    disabled: true,
  },
};

export const UseRipple_True: Story = {
  args: {
    useRipple: true,
  },
};

export const HandlerDelay_1000: Story = {
  args: {
    handlerDelay: 1000,
  },
};
