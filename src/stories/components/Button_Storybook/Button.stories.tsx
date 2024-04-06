import { Button } from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    children: "Button",
    buttonColor: "#81BB26",
    textColor: "#FFFFFF",
    width: "10rem",
    onClickHandler: fn(),
  },

  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["flat", "neumorp", "naked", "outline", "disabled"],
    },
    buttonColor: { control: "color" },
    textColor: { control: "color" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    useRipple: { control: "boolean" },
    rippleColor: { control: "color" },
    handlerDelay: { control: { type: "range", min: 100, max: 2000 } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant_Flat: Story = {
  args: {
    variant: "flat",
  },
};

export const Variant_Neumorp: Story = {
  args: {
    variant: "neumorp",
  },
};

export const Variant_Naked: Story = {
  args: {
    variant: "naked",
    textColor: "#000",
  },
};

export const Variant_Outline: Story = {
  args: {
    variant: "outline",
    textColor: "#000",
  },
};

export const Variant_Disable: Story = {
  args: {
    variant: "disabled",
  },
};

export const IsLoading_True: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled_True: Story = {
  args: {
    disabled: true,
  },
};

export const UseRipple_True: Story = {
  args: {
    useRipple: true,
  },
};

export const HandlerDelay_1000: Story = {
  args: {
    handlerDelay: 1000,
  },
};
