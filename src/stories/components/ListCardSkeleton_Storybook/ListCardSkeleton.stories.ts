import { ListCardSkeleton } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * ** ListCard Skeleton 컴포넌트**
 *
 * ListCard의 로딩시 보여질 Skeleton을 제공합니다.
 *
 * ### Props
 * - **repeat : **Skeleton의 갯수를 전달받습니다.
 *
 */
const meta = {
  title: "Components/ListCardSkeleton",
  component: ListCardSkeleton,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    repeat: {
      control: {
        type: "range",
        max: 10,
        min: 1,
      },
      description: "Skeleton의 갯수를 전달받습니다.",
    },
  },

  args: {
    repeat: 1,
  },
} satisfies Meta<typeof ListCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
