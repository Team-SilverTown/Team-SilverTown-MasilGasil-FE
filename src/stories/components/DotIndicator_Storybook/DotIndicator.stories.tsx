import { Meta, StoryObj } from "@storybook/react";

import DotIndicator_Storybook from "./DotIndicator_Storybook";

/**
 * **공통 DotIndicator 컴포넌트**
 *
 * ### Props
 * - **current : ** DotIndicator의 현재 선택되어진 Index를 전달받습니다.
 * - **length : **DotIndicator의 생성할 Dot 갯수를 전달받습니다.
 */
const meta = {
  title: "Components/DotIndicator",
  component: DotIndicator_Storybook,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    current: 3,
    length: 7,
  },

  argTypes: {
    current: {
      description: "DotIndicator의 현재 선택되어진 Index를 전달받습니다.",
    },

    length: {
      description: "DotIndicator의 생성할 Dot 갯수를 전달받습니다.",
    },
  },
} satisfies Meta<typeof DotIndicator_Storybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
