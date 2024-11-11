import { type PropsWithChildren, Children, cloneElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import { type AvatarProps, Avatar } from "./Avatar";

export interface AvatarGroupProps extends PropsWithChildren, AvatarProps {
  max?: number;
  className?: string;
  avatarClassName?: string;
}

export const AvatarGroup = ({
  max = Infinity,
  className,
  children,
  avatarClassName,
  variant,
  ...restProps
}: AvatarGroupProps) => {
  const count = Children.count(children);

  return (
    <div className={twMerge("sup-avatar-group flex -space-x-2.5", className)}>
      {Children.map(children, (child, index) =>
        isValidElement<AvatarProps>(child) && index + 1 <= max
          ? cloneElement(child, {
              ...restProps,
              className: twMerge(avatarClassName, child.props.className),
              variant,
            })
          : null,
      )}

      {count > max && (
        <Avatar size={restProps.size} variant={variant} className={avatarClassName}>
          +{count - max}
        </Avatar>
      )}
    </div>
  );
};
