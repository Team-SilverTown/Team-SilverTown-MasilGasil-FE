import { Avatar } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

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
