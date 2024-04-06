import { Avatar } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

/**
 * **공통 Avatar 컴포넌트**
 *
 *
 * ### Props
 * - **size : **size는 Avatar의 width, height 값을 나타냅니다. (기본적으로 xs, sm, md, lg)로 정의되어 있습니다.
 *             아무 값도 정의하지 않을 경우 xs로 정의됩니다. <br>
 * - **name : **name은 Image 태그의 alt 속성에 추가되는 설명입니다. <br>
 * - **src : **src는 Avatar 이미지가 되는 주소입니다. (아무 값도 전달하지 않을 경우 기본 프로필이 정의됩니다.) <br>
 * - **style : **만약 정의되지 않은 size 혹은 style을 정의하고 싶다면 inline style로 style을 정의할 수 있습니다. <br>
 * - **userId : **사용하는곳에서 userId를 전달시 해당 id에 맞는 user 페이지로 이동시킵니다.
 */
const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],

  args: {
    name: "Avatar",
    src: "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif",
    size: "lg",
  },

  argTypes: {
    size: {
      control: "inline-radio",
      options: ["ms", "xs", "sm", "md", "lg"],
    },
    name: { control: "string" },
    src: { control: "string", description: "URL 입력란 - null 값 가능", defaultValue: null },
    style: { control: "null", description: "기본 CSS 속성" },
    imageStyle: { description: "내부 Image 태그에 대한 기본 CSS 속성" },
    userId: { description: "User ID 입력시 해당 User의 User 페이지로 이동" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Size_Lg: Story = {
  args: {
    size: "lg",
  },
};

export const Size_Md: Story = {
  args: {
    size: "md",
  },
};

export const Size_Sm: Story = {
  args: {
    size: "sm",
  },
};

export const Size_Xs: Story = {
  args: {
    size: "xs",
  },
};

export const Size_Ms: Story = {
  args: {
    size: "ms",
  },
};

export const Src_None: Story = {
  args: {
    src: null,
  },
};
