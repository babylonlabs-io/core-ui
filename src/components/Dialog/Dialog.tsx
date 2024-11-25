import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

import { Portal } from "@/components/Portal";
import { useModalManager } from "@/hooks/useModalManager";
import { Backdrop } from "./components/Backdrop";

export interface DialogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  hasBackdrop?: boolean;
  backdropClassName?: string;
}

export const Dialog = ({
  children,
  open = false,
  className,
  onClose,
  hasBackdrop = true,
  backdropClassName,
  ...restProps
}: DialogProps) => {
  const { mounted, unmount } = useModalManager({ open });

  return (
    <Portal mounted={mounted}>
      <div {...restProps} className="bbn-dialog-wrapper">
        <div
          className={twJoin("bbn-dialog", open ? "animate-modal-in" : "animate-modal-out", className)}
          onAnimationEnd={unmount}
        >
          {children}
        </div>
      </div>

      {hasBackdrop && <Backdrop className={backdropClassName} open={open} onClick={onClose} />}
    </Portal>
  );
};
