import { useState } from "react";

import { InputUpload } from "@/components";
import { Image } from "@/components/icons";
import { Meta, StoryObj } from "@storybook/react";

import tailwindConfig from "../../../../tailwind.config";

import resolveConfig from "tailwindcss/resolveConfig";

/**
 * ** InputUpload 컴포넌트**
 *
 * ### Props
 * - **position : **`relative` `absolute` 중 하나의 position을 전달 받습니다.
 * - **updateFile : **File을 update하기 위한 메서드를 전달 받습니다.
 * - **isPreview : **Preview를 사용여부를 boolean으로 전달 받습니다.
 * - **previewValue : **preView에 사용될 값을 전달 받습니다.
 * - **onPreview : **preview를 제어할 수 있는 메서드를 전달받습니다.
 *
 *
 * - **children : **내부에 ReactNode를 전달받습니다.
 *
 */
const meta = {
  title: "Components/InputUpload",
  component: InputUpload,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    position: {
      control: "inline-radio",
      options: ["relative", "absolute"],
      description: "`relative` `absolute` 중 하나의 position을 전달 받습니다.",
    },

    previewValue: {
      control: {
        disable: true,
      },
      description: "preView에 사용될 값을 전달 받습니다.",
    },

    isPreview: {
      control: "boolean",
      description: "Preview를 사용여부를 boolean으로 전달 받습니다.",
    },

    updateFile: {
      control: {
        disable: true,
      },
      description: "File을 update하기 위한 메서드를 전달 받습니다.",
    },

    onPreview: {
      control: {
        disable: true,
      },
      description: "preview를 제어할 수 있는 메서드를 전달받습니다.",
    },

    children: {
      control: {
        disable: true,
      },
      description: "내부에 ReactNode를 전달받습니다.",
    },
  },
} satisfies Meta<typeof InputUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    updateFile: () => {},
    isPreview: true,
  },

  decorators: [
    (InputUploadComponent, { args }) => {
      const { theme } = resolveConfig(tailwindConfig);

      return (
        <div
          style={{
            width: "25rem",
            height: "25rem",
          }}
        >
          <InputUploadComponent args={args}>
            <div
              style={{
                width: "25rem",
                height: "25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: theme.colors["gray_100"],
                fontSize: theme.fontSize["medium"],
                fontWeight: theme.fontWeight["bold"],
                lineHeight: "2.2",
              }}
            >
              <Image
                width={40}
                fill={theme.colors["gray_300"]}
              />
              클릭하여 썸네일 업로드
            </div>
          </InputUploadComponent>
        </div>
      );
    },
  ],
};
