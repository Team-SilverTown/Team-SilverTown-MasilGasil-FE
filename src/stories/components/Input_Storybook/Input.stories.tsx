import { Input } from "@/components";
import { Meta } from "@storybook/react";

/**
 * **공통 Input 컴포넌트**
 *
 * ### Props
 * - **register : **React-Hook-Form의 register를 전달받습니다.
 * - **isInvalid : **boolean값을 통해 Input의 Invalid상태를 전달 받습니다.
 * - **required : **boolean값을 통해 현재 Input의 필수 여부를 전달받습니다.
 * - **width : **현재 Input의 넓이를 전달합니다.
 */
const meta = {
  title: "Components/Input",
  component: Input,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    register: {
      control: "null",
      description: "React-Hook-Form의 register 전달",
    },

    isInvalid: {
      description: "boolean값을 통해 Input의 Invalid상태를 전달 받습니다.",
    },

    required: {
      description: "boolean값을 통해 현재 Input의 필수 여부를 전달받습니다.",
    },

    width: {
      control: "number",
      description: "현재 Input의 넓이를 전달합니다.",
    },

    kind: {
      control: "null",
    },

    style: {
      control: "null",
      description: "기본 CSS 스타일",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default = {};

export const IsInvalid_True = {
  args: {
    isInvalid: true,
  },
};
