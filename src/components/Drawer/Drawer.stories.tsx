import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A sliding drawer component that can appear from any side (left, right, top, bottom), commonly used for sub-menus and additional content.",
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
      description: "The direction from which the drawer slides in",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState("light");

    const themes = [
      { id: "light", label: "Light", description: "Light theme for daytime use" },
      { id: "dark", label: "Dark", description: "Dark theme for reduced eye strain" },
      { id: "auto", label: "Auto", description: "Automatically switch based on system settings" },
    ];

    return (
      <div className="relative h-96 overflow-hidden border rounded-lg bg-white dark:bg-gray-900">
        <button
          onClick={() => setIsOpen(true)}
          className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Theme Drawer (Right)
        </button>
        
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Theme"
          direction="right"
        >
          <div className="flex flex-col">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setSelectedTheme(theme.id);
                  console.log(`Theme selected: ${theme.id}`);
                }}
                className={`
                  flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-gray-800
                  ${selectedTheme === theme.id ? "bg-gray-50 dark:bg-gray-800" : ""}
                `}
              >
                <div className="flex flex-col items-start">
                  <span className="font-medium">{theme.label}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {theme.description}
                  </span>
                </div>
                {selectedTheme === theme.id && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </Drawer>
      </div>
    );
  },
};

