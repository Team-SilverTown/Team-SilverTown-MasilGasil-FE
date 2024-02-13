import { SlideButton } from "@/components";

export default {
  title: "Component/SlideButton",
  component: SlideButton,
  argTypes: {
    buttonColor: { control: "color" },
    textColor: { control: "color" },
    subButtonColor: { control: "color" },
    subTextColor: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    subButtonWidth: { control: "number" },
  },
};

export const Default = (args: any) => {
  const Sub = <span>Sub</span>;

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <SlideButton
        subChildren={Sub}
        onButtonClickHandler={() => console.log("Button Click")}
        onSubButtonClickHandler={() => console.log("Sub Button Click")}
        {...args}
      >
        <span>slide</span>
      </SlideButton>
    </div>
  );
};
