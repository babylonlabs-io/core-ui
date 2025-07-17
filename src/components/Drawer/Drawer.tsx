import React from "react";
import { twJoin } from "tailwind-merge";

type DrawerDirection = "left" | "right" | "top" | "bottom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  showBackButton?: boolean;
  backIcon?: React.ReactNode;
  direction?: DrawerDirection;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  showBackButton = true,
  backIcon,
  direction = "right",
}) => {
  const getTransformClasses = () => {
    switch (direction) {
      case "left":
        return isOpen ? "translate-x-0" : "-translate-x-full";
      case "right":
        return isOpen ? "translate-x-0" : "translate-x-full";
      case "top":
        return isOpen ? "translate-y-0" : "-translate-y-full";
      case "bottom":
        return isOpen ? "translate-y-0" : "translate-y-full";
      default:
        return isOpen ? "translate-x-0" : "translate-x-full";
    }
  };

  const getPositionClasses = () => {
    switch (direction) {
      case "left":
        return "left-0 top-0 bottom-0 w-80";
      case "right":
        return "right-0 top-0 bottom-0 w-80";
      case "top":
        return "top-0 left-0 right-0 h-80";
      case "bottom":
        return "bottom-0 left-0 right-0 h-80";
      default:
        return "right-0 top-0 bottom-0 w-80";
    }
  };

  const getBackIcon = () => {
    if (backIcon) return backIcon;

    switch (direction) {
      case "left":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-primary"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "top":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-primary"
          >
            <path
              d="M4 10L8 6L12 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "bottom":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-primary"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default: // right
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-primary"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={twJoin(
        "absolute transform transition-transform duration-300 ease-in-out rounded-3xl md:rounded-lg",
        "bg-[#FFFFFF] dark:bg-[#252525]",
        getPositionClasses(),
        getTransformClasses(),
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-[#38708533] dark:border-[#404040]">
        {showBackButton && (
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded hover:bg-accent-secondary/10 transition-colors"
            aria-label="Go back"
          >
            {getBackIcon()}
          </button>
        )}
        <h3 className="text-sm font-medium text-accent-primary">{title}</h3>
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};
