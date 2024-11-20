import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Portal } from "@/components/Portal";
import { useModalManager } from "@/hooks/useModalManager";
import { Backdrop } from "./components/Backdrop";

export interface DialogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  hasBackdrop?: boolean;
}

export const Dialog = ({
  children,
  open = false,
  className,
  onClose,
  hasBackdrop = true,
  ...restProps
}: DialogProps) => {
  const { mounted, unmount } = useModalManager({ open });

  return (
    <Portal mounted={mounted}>
      <div {...restProps} className="fixed left-1/2 top-1/2 z-50 max-w-full -translate-x-1/2 -translate-y-1/2">
        <div
          className={twMerge(
            "rounded border border-primary-light/20 bg-[#ffffff] p-6",
            open ? "animate-modal-in" : "animate-modal-out",
            className,
          )}
          onAnimationEnd={unmount}
        >
          {children}
        </div>
      </div>

      {hasBackdrop && <Backdrop open={open} onClick={onClose} />}
    </Portal>
  );
};
