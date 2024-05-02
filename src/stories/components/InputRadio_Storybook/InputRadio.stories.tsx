import { useForm } from "react-hook-form";

import { InputLabel, InputRadio } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * **Input Radio 컴포넌트**
 *
 * ### Props
 * - **key : **`ul` `li` 사용시 전달하기 위한 key 값
 * - **register : **React-Hook-Form 라이브러리의 register를 전달 받습니다.
 * - **value : **Radio에 지정할 기본값을 전달 받습니다.
 * - **text : **Radio에 표현할 텍스트를 전달받습니다.
 * - **isSelected : **Radio가 선택되었는지에 대한 boolean값을 전달 받습니다.
 * - **style : **기본 CSS Properties를 전달받습니다.
 *
 * 만약 InputLabel이 움직일 여유 공간이없는경우 동작하지 않습니다.
 *
 */
const meta = {
  title: "Components/InputRadio",
  component: InputRadio,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {
    text: "Input Radio",
    value: "Test Value",
    isSelected: false,
  },

  argTypes: {
    key: {
      control: "text",
      description: "`ul` `li` 사용시 전달하기 위한 key 값.",
    },

    text: {
      control: "text",
      description: "Radio에 표현할 텍스트를 전달받습니다.",
    },

    value: {
      control: "text",
      description: "Radio에 지정할 기본값을 전달 받습니다.",
    },

    isSelected: {
      control: "boolean",
      description: "Radio가 선택되었는지에 대한 boolean값을 전달 받습니다.",
    },

    style: {
      control: {
        disable: true,
      },
      description: "기본 CSS 스타일",
    },

    register: {
      control: {
        disable: true,
      },
      description: "React-Hook-Form 라이브러리의 register를 전달 받습니다.",
    },
  },
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (InputRadioComponent, { args }) => {
      const { register } = useForm({ defaultValues: { test: "" } });

      return (
        <section className="flex h-[4rem] w-[60rem] items-center">
          <InputRadioComponent args={{ ...args, register: register("test") }} />
        </section>
      );
    },
  ],
};
