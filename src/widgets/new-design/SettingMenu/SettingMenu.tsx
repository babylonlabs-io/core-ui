import React from "react";
import { Menu } from "@/components/Menu";
import { MenuItem } from "@/components/Menu/MenuItem";
import { SubMenu } from "@/components/Menu/SubMenu";
import { Text } from "@/components/Text";
import {
  type SettingMenuProps,
  type SettingMenuTitleProps,
  type SettingMenuGroupProps,
  type SettingMenuItemProps,
  type SettingMenuSubMenuProps,
  type SettingMenuDescriptionProps,
  type SettingMenuCustomContentProps,
} from "./types";

const SettingsIcon = () => (
  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.9127 15.3708C24.9711 14.9333 25.0002 14.4812 25.0002 14C25.0002 13.5333 24.9711 13.0667 24.8982 12.6292L27.8586 10.325C28.1211 10.1208 28.194 9.72708 28.0336 9.43542L25.2336 4.59375C25.0586 4.27292 24.694 4.17083 24.3732 4.27292L20.8877 5.67292C20.1586 5.11875 19.3857 4.65208 18.5252 4.30208L18.0002 0.597916C17.9419 0.247916 17.6502 0 17.3002 0H11.7002C11.3502 0 11.0732 0.247916 11.0148 0.597916L10.4898 4.30208C9.62941 4.65208 8.84191 5.13333 8.12732 5.67292L4.64191 4.27292C4.32107 4.15625 3.95649 4.27292 3.78149 4.59375L0.996075 9.43542C0.821075 9.74167 0.879408 10.1208 1.17107 10.325L4.13149 12.6292C4.05857 13.0667 4.00024 13.5479 4.00024 14C4.00024 14.4521 4.02941 14.9333 4.10232 15.3708L1.14191 17.675C0.879408 17.8792 0.806491 18.2729 0.966908 18.5646L3.76691 23.4062C3.94191 23.7271 4.30649 23.8292 4.62732 23.7271L8.11274 22.3271C8.84191 22.8812 9.61482 23.3479 10.4752 23.6979L11.0002 27.4021C11.0732 27.7521 11.3502 28 11.7002 28H17.3002C17.6502 28 17.9419 27.7521 17.9857 27.4021L18.5107 23.6979C19.3711 23.3479 20.1586 22.8812 20.8732 22.3271L24.3586 23.7271C24.6794 23.8438 25.044 23.7271 25.219 23.4062L28.019 18.5646C28.194 18.2437 28.1211 17.8792 27.844 17.675L24.9127 15.3708ZM14.5002 19.25C11.6127 19.25 9.25024 16.8875 9.25024 14C9.25024 11.1125 11.6127 8.75 14.5002 8.75C17.3877 8.75 19.7502 11.1125 19.7502 14C19.7502 16.8875 17.3877 19.25 14.5002 19.25Z"
      fill="#9E9E9E"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface SettingMenuComponent extends React.FC<SettingMenuProps> {
  Title: React.FC<SettingMenuTitleProps>;
  Group: React.FC<SettingMenuGroupProps>;
  Item: React.FC<SettingMenuItemProps>;
  SubMenu: React.FC<SettingMenuSubMenuProps>;
  Description: React.FC<SettingMenuDescriptionProps>;
  CustomContent: React.FC<SettingMenuCustomContentProps>;
  Spacer: React.FC<{ size?: "sm" | "md" | "lg" }>;
}

const SettingMenuBase: React.FC<SettingMenuProps> = ({
  trigger,
  open,
  onOpenChange,
  placement = "bottom-end",
  className,
  offset = [0, 8],
  children,
}) => {
  const defaultTrigger = (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Settings menu"
    >
      <SettingsIcon />
    </button>
  );

  return (
    <Menu
      trigger={trigger || defaultTrigger}
      open={open}
      onOpenChange={onOpenChange}
      placement={placement}
      className={className}
      offset={offset}
    >
      {children}
    </Menu>
  );
};

const SettingMenuTitle: React.FC<SettingMenuTitleProps> = ({ children, className = "" }) => (
  <Text variant="body1" className={`px-7 pb-6 text-accent-primary md:hidden ${className}`}>
    {children}
  </Text>
);

const SettingMenuGroup: React.FC<SettingMenuGroupProps> = ({
  background = "none",
  backgroundClassName = "",
  className = "",
  children,
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case "secondary":
        return "mx-[21px] rounded-lg bg-secondary-highlight md:mx-0 md:bg-transparent";
      case "custom":
        return backgroundClassName;
      default:
        return "";
    }
  };

  return <div className={`${getBackgroundClass()} ${className}`.trim()}>{children}</div>;
};

// Item component
const SettingMenuItem: React.FC<SettingMenuItemProps> = ({
  icon,
  suffix,
  onClick,
  disabled = false,
  selected = false,
  className = "",
  children,
}) => {
  const childrenArray = React.Children.toArray(children);
  const label = childrenArray.find(
    (child) => typeof child === "string" || (React.isValidElement(child) && child.type !== SettingMenuDescription),
  );
  const description = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SettingMenuDescription,
  );

  const labelText = typeof label === "string" ? label : "";

  return (
    <MenuItem
      icon={icon}
      name={labelText}
      description={description ? (description as React.ReactElement).props.children : undefined}
      onClick={onClick}
      disabled={disabled}
      selected={selected}
      className={className}
      suffix={suffix || <ChevronRightIcon />}
    />
  );
};

const SettingMenuSubMenu: React.FC<SettingMenuSubMenuProps> = ({ icon, className = "", children }) => {
  const childrenArray = React.Children.toArray(children);
  const label = childrenArray.find(
    (child) => typeof child === "string" || (React.isValidElement(child) && child.type !== SettingMenuDescription),
  );
  const description = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SettingMenuDescription,
  );
  const subMenuItems = childrenArray.filter((child) => React.isValidElement(child) && child.type === SettingMenuItem);

  const labelText = typeof label === "string" ? label : "";

  return (
    <SubMenu
      icon={icon}
      name={labelText}
      description={description ? (description as React.ReactElement).props.children : undefined}
      className={className}
      suffix={<ChevronRightIcon />}
    >
      {subMenuItems}
    </SubMenu>
  );
};

const SettingMenuDescription: React.FC<SettingMenuDescriptionProps> = ({ children }) => {
  return <>{children}</>;
};

const SettingMenuCustomContent: React.FC<SettingMenuCustomContentProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const SettingMenuSpacer: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "mt-2",
    md: "mt-4",
    lg: "mt-6",
  };

  return <div className={sizeClasses[size]} />;
};

export const SettingMenu = SettingMenuBase as SettingMenuComponent;

SettingMenu.Title = SettingMenuTitle;
SettingMenu.Group = SettingMenuGroup;
SettingMenu.Item = SettingMenuItem;
SettingMenu.SubMenu = SettingMenuSubMenu;
SettingMenu.Description = SettingMenuDescription;
SettingMenu.CustomContent = SettingMenuCustomContent;
SettingMenu.Spacer = SettingMenuSpacer;
