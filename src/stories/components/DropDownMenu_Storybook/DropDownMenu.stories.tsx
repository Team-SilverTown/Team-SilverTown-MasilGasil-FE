import { DropDownMenu } from "@/components";
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
  title: "Components/DropDownMenu",
  component: DropDownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    isEdit: true,
    onEdit: fn(),
    onDelete: fn(),
  },

  decorators: [
    (DropDownMenuComponent) => {
      return (
        <section className="w-[40rem] h-[20rem] flex justify-center">
          <DropDownMenuComponent />
        </section>
      );
    },
  ],
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsEdit_False: Story = {
  args: {
    isEdit: false,
  },
};
