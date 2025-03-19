import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Button" },
};

export const OutlinedFilled: Story = {
  args: {
    children: "Outlined Filled Button",
    variant: "outlined",
    filled: true,
  },
};

export const OutlinedWithLightBorder: Story = {
  args: {
    children: "Light Border Button",
    variant: "outlined",
    borderStyle: "light",
  },
};
