import { useForm } from "react-hook-form";

import { Input, InputLabel } from "@/components";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["normal", "safety", "warn", "danger"],
    },
    position: {
      control: "inline-radio",
      options: ["start", "center", "end"],
    },
  },
};

interface TestProps {
  text: string;
}

export const Default = (args: any) => {
  const { register } = useForm<TestProps>();

  return (
    <Input
      register={register("text")}
      placeholder="input some text."
    />
  );
};

export const Invalid = (args: any) => {
  const { register } = useForm<TestProps>();

  return (
    <Input
      register={register("text")}
      isInvalid={true}
      placeholder="input some text."
    />
  );
};

export const WithLabel = (args: any) => {
  const { register } = useForm<TestProps>();

  console.log(register);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 500, height: 500, gap: 5 }}>
      <Input
        register={register("text")}
        placeholder="input some text."
      />
      <InputLabel
        text="this is Label"
        {...args}
      />
    </div>
  );
};
