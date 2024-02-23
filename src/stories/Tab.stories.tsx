import { Tab } from "@/components";

export default {
  title: "Component/Tab",
  component: Tab,
  argTypes: {
    focusedTab: { control: { type: "number", min: 0, max: 2 } },
  },
};

export const Default = (args: any) => {
  const tabTitles = ["Tab1", "Tab2", "Tab3"];

  return (
    <Tab
      tabContents={tabTitles}
      {...args}
    >
      Button
    </Tab>
  );
};
