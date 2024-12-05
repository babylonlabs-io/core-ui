import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
];

export const Default: Story = {
  args: {
    options,
    placeholder: "Select status",
  },
};

export const Controlled: Story = {
  args: {
    options,
    placeholder: "Select status",
  },
  render: (args) => {
    const [value, setValue] = useState("active");

    return (
      <Select
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    options,
    placeholder: "Select status",
    disabled: true,
  },
};
