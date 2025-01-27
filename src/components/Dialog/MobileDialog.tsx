import { useEffect, type DetailedHTMLProps, type HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";
import { motion, useAnimate, useDragControls, useMotionValue } from "motion/react";

import { Portal } from "@/components/Portal";
import { useModalManager } from "@/hooks/useModalManager";
import { Backdrop } from "./components/Backdrop";

export interface MobileDialogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

export const MobileDialog = ({ children, open = false, className, onClose }: MobileDialogProps) => {
  const { mounted, unmount } = useModalManager({ open });
  const [scope, animate] = useAnimate();
  const dragControls = useDragControls();
  const y = useMotionValue(0);

  const handleClose = () => {
    // This is getting around the issue that the y starts with 0% instead of a number
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    /**
     * Since the backdrop animation isn't controlled manually, we intentially
     * NOT await on the animate here to make sure the backdrop fadeout at the
     * same time as the dialog.
     */
    animate(scope.current, {
      y: [yStart, 1000],
    });
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    /**
     * This is to cover the case where the close was triggered
     * other than from the drag bar
     */
    if (scope.current && !open) {
      handleClose();
    }
  }, [open]);

  return (
    <Portal mounted={mounted}>
      <motion.div
        ref={scope}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        style={{
          y,
        }}
        transition={{
          ease: "easeInOut",
        }}
        onDragEnd={() => {
          if (y.get() >= 100) {
            handleClose();
          }
        }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{
          top: 0,
          bottom: 0.5,
        }}
        className={twJoin("bbn-dialog-mobile", className)}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center p-4">
          <button
            className="h-1 w-12 cursor-grab touch-none rounded-full bg-secondary-strokeLight active:cursor-grabbing"
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
          />
        </div>
        <div>{children}</div>
      </motion.div>

      <Backdrop open={open} onClick={handleClose} onAnimationEnd={unmount} />
    </Portal>
  );
};
