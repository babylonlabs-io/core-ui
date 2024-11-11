import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    max: 3,
    avatarClassName: "bg-primary/50 text-primary-contrast",
    variant: "circular",
    children: [
      <Avatar alt="Binance" url="/images/wallets/binance.webp" />,
      <Avatar
        className="border border-primary bg-primary-contrast"
        alt="Keystone"
        url="/images/wallets/keystone.svg"
      />,
      <Avatar className="bg-primary-main text-primary-contrast">DT</Avatar>,
      <Avatar className="bg-primary-main text-primary-contrast">JK</Avatar>,
    ],
  },
};
