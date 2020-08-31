import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/chle3W0VLHPZ5QWqTmiZXItn/Untitled?node-id=0%3A1",
  },
};
