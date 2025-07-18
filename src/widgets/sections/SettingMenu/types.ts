import { ReactNode } from "react";

export interface SettingMenuProps {
  /** Custom trigger element (defaults to settings icon button) */
  trigger?: ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Placement of the menu relative to trigger */
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
  /** Additional CSS classes for the menu container */
  className?: string;
  /** Offset from the trigger element */
  offset?: [number, number];
  /** Children components */
  children: ReactNode;
}

export interface SettingMenuTitleProps {
  children: ReactNode;
  className?: string;
}

export interface SettingMenuGroupProps {
  /** Background style for the group */
  background?: "none" | "secondary" | "custom";
  /** Custom background className when background="custom" */
  backgroundClassName?: string;
  /** Additional CSS classes */
  className?: string;
  /** Children components */
  children: ReactNode;
}

export interface SettingMenuItemProps {
  /** Icon element */
  icon?: ReactNode;
  /** Suffix element (e.g., chevron, external link icon) */
  suffix?: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Selected/active state */
  selected?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Children (label and description) */
  children: ReactNode;
}

export interface SettingMenuDescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface SettingMenuSubMenuProps {
  /** Icon element */
  icon?: ReactNode;
  /** Click handler for the submenu trigger */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Children (label, description, and submenu items) */
  children: ReactNode;
}

export interface SettingMenuCustomContentProps {
  children: ReactNode;
  className?: string;
}
