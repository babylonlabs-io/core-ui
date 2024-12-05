import type { Meta, StoryObj } from "@storybook/react";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Default input",
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: "Search by Name or Public Key",
    suffix: <RiSearchLine size={20} />,
  },
};

export const WithClickableSuffix: Story = {
  args: {
    placeholder: "Click the search icon",
    suffix: <RiSearchLine size={20} />,
    onSuffixClick: () => alert("Search clicked!"),
  },
};

export const Loading: Story = {
  args: {
    placeholder: "Loading state",
    suffix: <RiSearchLine size={20} />,
    isLoading: true,
  },
};

export const LoadingWithInteraction: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <Input
        placeholder="Click search to see loading"
        suffix={<RiSearchLine size={20} />}
        isLoading={isLoading}
        onSuffixClick={handleSearch}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
