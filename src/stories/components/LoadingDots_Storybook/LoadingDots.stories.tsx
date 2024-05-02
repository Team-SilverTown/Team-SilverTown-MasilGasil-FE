import LoadingDots from "@/components/LoadingDots";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** LoadingDots 컴포넌트**
 *
 * 로딩시 제공하는 dot 애니메이션
 */
const meta = {
  title: "Components/LoadingDots",
  component: LoadingDots,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof LoadingDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
