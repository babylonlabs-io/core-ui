import { twJoin } from "tailwind-merge";

import { Text } from "@/components/Text";
import { Loader } from "@/components/Loader";

export enum LoadingStyle {
  ShowSpinner = "show-spinner",
  ShowSpinnerAndValue = "show-spinner-and-value",
}

export interface ListItemProps {
  className?: string;
  orientation?: "adaptive" | "horizontal" | "vertical";
  title: string | JSX.Element;
  value: string | JSX.Element;
  suffix?: JSX.Element;
  loading?: boolean;
  loadingStyle?: LoadingStyle;
}

export function ListItem({
  className,
  orientation = "horizontal",
  title,
  value,
  suffix,
  loading,
  loadingStyle = LoadingStyle.ShowSpinner,
}: ListItemProps) {
  const renderValue = () => {
    if (!loading) {
      return value;
    }
    if (loadingStyle === LoadingStyle.ShowSpinner) {
      return <Loader size={20} />;
    }
    if (loadingStyle === LoadingStyle.ShowSpinnerAndValue) {
      return (
        <>
          <span className="opacity-50">{value}</span>
          <Loader size={20} />
        </>
      );
    }
  };

  return (
    <div className={twJoin("bbn-list-item", `bbn-list-item-${orientation}`, className)}>
      <Text
        as="div"
        className={twJoin("bbn-list-title", `bbn-list-title-${orientation}`)}
        variant={orientation === "horizontal" ? "body1" : "body2"}
      >
        {title}
      </Text>

      <Text as="div" className={twJoin("bbn-list-value", `bbn-list-value-${orientation}`)} variant="body1">
        {renderValue()}
        {suffix}
      </Text>
    </div>
  );
}
