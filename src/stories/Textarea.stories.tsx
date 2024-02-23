import { Textarea } from "@/components";
import { useForm } from "react-hook-form";

export default {
  title: "Component/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: { control: "text" },
  },
};

interface TextAreaDefaultProps {
  text: string;
}
export const Default = (args: any) => {
  const { register } = useForm<TextAreaDefaultProps>();

  return (
    <Textarea
      register={register("text")}
      {...args}
    />
  );
};
