import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
export const Danger = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};
Danger.args = {
  variantColor: "red",
  children: "Danger",
};
