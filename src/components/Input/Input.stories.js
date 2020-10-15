import React from "react";
import Input from "./Input.component";

export default {
  title: "Input",
  component: Input,
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
