import React from "react";
import { twJoin } from "tailwind-merge";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleAlign?: "left" | "center" | "right";
  backIcon?: React.ReactNode;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  titleAlign = "left",
  backIcon,
}) => {
  const titleAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={twJoin(
        "absolute inset-0 transform rounded-lg transition-transform duration-300 ease-in-out",
        "bg-[#FFFFFF] dark:bg-[#252525]",
        isOpen ? "translate-x-0" : "translate-x-full",
        className,
      )}
    >
      {/* Header */}
      <div
        className={twJoin(
          "flex items-center gap-3 border-b border-[#38708533] p-4 dark:border-[#404040]",
          titleAlignment[titleAlign],
        )}
      >
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:bg-accent-secondary/10"
          aria-label="Go back"
        >
          {backIcon || (
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
          )}
        </button>
        <h3 className="text-sm font-medium text-accent-primary">{title}</h3>
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};
