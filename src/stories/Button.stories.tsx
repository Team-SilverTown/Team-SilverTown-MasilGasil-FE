import { Button } from "@/components";

export default {
  title: "Component/Button",
  component: Button,
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
};

export const Default = (args: any) => {
  return <Button {...args}>Button</Button>;
};