import React from "react";
import Input from "./Input.component";

export default {
  title: "Form/Input",
  component: Input,
  args: {
    width: "small",
  },
};

export const Small = () => (
  <Input placeholder="Small input placeholder" width="small" />
);
export const Medium = () => (
  <Input placeholder="Medium input placeholder" width="medium" />
);
export const Large = () => (
  <Input placeholder="Large input placeholder" width="large" />
);
export const Block = () => (
  <Input placeholder="Block input placeholder" width="block" />
);

Small.storyName = "Small Input";

const Template = (args) => <Input {...args} />;

export const MediumA = Template.bind({});
MediumA.args = {
  width: "medium",
  placeholder: "Medium input with args",
};
export const BlockA = Template.bind({});
BlockA.args = {
  ...MediumA.args,
  width: "block",
};
