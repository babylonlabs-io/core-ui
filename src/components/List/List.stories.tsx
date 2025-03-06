import type { Meta, StoryObj } from "@storybook/react";
import { MdOutlineInfo } from "react-icons/md";
import { FaBitcoin, FaExchangeAlt, FaWallet } from "react-icons/fa";

import { List } from "./List";
import { ListItem, LoadingStyle } from "./components/ListItem";

const meta: Meta<typeof List> = {
  component: List,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <ListItem title="Signet Bitcoin Balance" value="100.123456 sBTC" />,
      <ListItem title="Signet Bitcoin Balance" value="100.123456 sBTC" />,
      <ListItem title="Signet Bitcoin Balance" value="100.123456 sBTC" suffix={<MdOutlineInfo size={24} />} />,
    ],
  },
};

export const WithLoadingStyles: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <ListItem title="Normal State" value="100.123456 sBTC" />,
      <ListItem
        title="Show Spinner Only"
        value="100.123456 sBTC"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinner}
      />,
      <ListItem
        title="Show Spinner And Value"
        value="100.123456 sBTC"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
    ],
  },
};

export const ShowSpinnerOnly: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <ListItem
        title="Loading Balance"
        value="100.123456 sBTC"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinner}
      />,
      <ListItem
        title="Loading Transaction"
        value="Transaction details"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinner}
      />,
    ],
  },
};

export const ShowSpinnerAndValue: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <ListItem
        title="Updating Balance"
        value="100.123456 sBTC"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
      <ListItem
        title="Processing Transaction"
        value="Transaction details"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
        suffix={<MdOutlineInfo size={24} />}
      />,
    ],
  },
};

export const WithPrefixAndSpinner: Story = {
  args: {
    orientation: "horizontal",
    children: [
      <ListItem
        title="Bitcoin Balance"
        value="100.123456 BTC"
        prefix={<FaBitcoin className="mr-2 text-amber-500" size={20} />}
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
      <ListItem
        title="Transaction Status"
        value="Processing"
        prefix={<FaExchangeAlt className="mr-2 text-blue-500" size={20} />}
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinner}
      />,
      <ListItem
        title="Wallet Status"
        value="Syncing"
        prefix={<FaWallet className="mr-2 text-green-500" size={20} />}
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
        suffix={<MdOutlineInfo size={24} />}
      />,
    ],
  },
};

export const PrefixWithDifferentOrientations: Story = {
  args: {
    orientation: "vertical",
    children: [
      <ListItem
        title="Horizontal Layout"
        value="With Prefix and Spinner"
        prefix={<FaBitcoin className="mr-2 text-amber-500" size={20} />}
        orientation="horizontal"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
      <ListItem
        title="Vertical Layout"
        value="With Prefix and Spinner"
        prefix={<FaExchangeAlt className="mr-2 text-blue-500" size={20} />}
        orientation="vertical"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
      <ListItem
        title="Adaptive Layout"
        value="With Prefix and Spinner"
        prefix={<FaWallet className="mr-2 text-green-500" size={20} />}
        orientation="adaptive"
        loading={true}
        loadingStyle={LoadingStyle.ShowSpinnerAndValue}
      />,
    ],
  },
};
