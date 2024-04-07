import { Divider } from "@/components/Divider";
import { Meta, StoryObj } from "@storybook/react";

/**
 * **공통 Divider 컴포넌트**
 *
 * ### Props
 * - **isColumn : **boolean 값을 통해 구분선의 세로 여부를 정의합니다.
 */
const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    isColumn: false,
  },

  argTypes: {
    style: {
      control: "null",
    },
  },

  decorators: [
    (DividerComponent) => (
      <section className="w-[60rem] h-[10rem] flex items-center justify-center">
        <DividerComponent />
      </section>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsColumn_False: Story = {
  args: {
    isColumn: false,
  },
};

export const IsColumn_True: Story = {
  args: {
    isColumn: true,
  },
};
