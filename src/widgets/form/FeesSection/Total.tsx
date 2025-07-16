import { Text } from "../../../components/Text";
import { twMerge } from "tailwind-merge";

interface TotalProps {
  /**
   * Total amount expressed in token units.
   * Can be pre-formatted string or numeric value.
   */
  total: number | string;
  /** Symbol of the token, e.g. BTC. */
  coinSymbol: string;
  /** Optional secondary hint (fiat equivalent). */
  hint?: string;
  /** Optional row title. Defaults to "Total". */
  title?: string;
  /** Additional Tailwind classes. */
  className?: string;
  /** When `total` is numeric, number of decimals to format with. Defaults to 8. */
  decimals?: number;
}

/**
 * Pure UI component that displays the total row inside a FeesSection. All
 * numerical calculations as well as currency conversions must be performed by
 * the consumer.
 */
export function Total({ total, coinSymbol, hint, title = "Total", className, decimals = 8 }: TotalProps) {
  const formattedTotal =
    typeof total === "number"
      ? total === 0
        ? "0"
        : (() => {
            const str = total.toFixed(decimals);
            return str.replace(/0+$/, "").replace(/\.$/, "");
          })()
      : total;

  return (
    <div className={twMerge("flex flex-row items-start justify-between text-accent-primary", className)}>
      <Text variant="body1" className="font-bold">
        {title}
      </Text>

      <div className="flex flex-col items-end justify-center">
        <Text variant="body1" className="font-bold">
          {formattedTotal} {coinSymbol}
        </Text>
        {hint && (
          <Text variant="body1" className="text-sm text-accent-secondary">
            {hint}
          </Text>
        )}
      </div>
    </div>
  );
}
