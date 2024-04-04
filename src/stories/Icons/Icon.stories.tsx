import React from "react";

import {
  AccountDelete,
  AccountManager,
  ArrowForward,
  Bag,
  Camera,
  Center,
  Check,
  ChevronDown,
} from "@/components/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { ArrowLeft, ArrowRight } from "lucide-react";

const IconBox = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "4rem", height: "4rem" }}>{children}</div>;
};

const meta = {
  title: "Components/Icons",
  component: IconBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    children: { control: "null" },
  },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountDeleteIcon: Story = {
  args: {
    children: <AccountDelete size={"100%"} />,
  },
};

export const AccountManagerIcon: Story = {
  args: {
    children: <AccountManager size={"100%"} />,
  },
};

export const ArrowForwardIcon: Story = {
  args: {
    children: <ArrowForward size={"100%"} />,
  },
};

export const ArrowLeftIcon: Story = {
  args: {
    children: (
      <ArrowLeft
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ArrowRightIcon: Story = {
  args: {
    children: (
      <ArrowRight
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const BagIcon: Story = {
  args: {
    children: (
      <Bag
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CameraIcon: Story = {
  args: {
    children: (
      <Camera
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const CenterIcon: Story = {
  args: {
    children: <Center size={"100%"} />,
  },
};

export const CheckIcon: Story = {
  args: {
    children: (
      <Check
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};

export const ChevronDownIcon: Story = {
  args: {
    children: (
      <ChevronDown
        width={"100%"}
        height={"100%"}
      />
    ),
  },
};
