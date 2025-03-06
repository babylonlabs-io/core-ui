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
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  loading?: boolean;
  loadingStyle?: LoadingStyle;
}

export function ListItem({
  className,
  orientation = "horizontal",
  title,
  value,
  prefix,
  suffix,
  loading,
  loadingStyle = LoadingStyle.ShowSpinner,
}: ListItemProps) {
  const renderLeftContent = () => {
    if (loading && loadingStyle === LoadingStyle.ShowSpinner) {
      return <Loader size={20} />;
    }

    return (
      <>
        {prefix}
        {loading && loadingStyle === LoadingStyle.ShowSpinnerAndValue ? (
          <span className="opacity-50">{value}</span>
        ) : (
          value
        )}
      </>
    );
  };

  const renderRightContent = () => {
    if (loading && loadingStyle === LoadingStyle.ShowSpinnerAndValue) {
      return (
        <>
          {suffix}
          <Loader size={20} />
        </>
      );
    }

    return suffix;
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

      <Text
        as="div"
        className={twJoin("bbn-list-value", `bbn-list-value-${orientation}`, "flex items-center")}
        variant="body1"
      >
        <div className="flex flex-grow items-center gap-1">{renderLeftContent()}</div>
        <div className="ml-auto flex items-center gap-1">{renderRightContent()}</div>
      </Text>
    </div>
  );
}
