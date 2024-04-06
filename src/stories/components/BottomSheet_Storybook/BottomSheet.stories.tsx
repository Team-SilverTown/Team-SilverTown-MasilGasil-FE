import { Meta, StoryObj } from "@storybook/react";

import BottomSheet_Storybook from "./BottomSheet_Storybook";

/**
 * **description Storybook 동작 테스트를 위해 만든 예시 Component 입니다.**
 *
 * React-Portal을 통해 구현되어져 viewport하단을 기준으로 동작합니다.
 *
 *
 * ### Options
 * - **fixedHeight : **기본 높이를 조절할 수 있습니다. <br>
 * - **snapPoints : **Bottom Sheet 조작시 최대 높이 최하단 높이를 지정할 수 있습니다.
 */
const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet_Storybook,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheet_Storybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
