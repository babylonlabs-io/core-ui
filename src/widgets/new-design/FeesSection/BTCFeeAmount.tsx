import { FeeItem } from "./FeeItem";

interface BTCFeeAmountProps {
  /**
   * Fee amount expressed in token units (e.g. BTC).
   * Can be a pre-formatted string or a raw numeric value.
   */
  amount: number | string;
  /**
   * Symbol of the token (e.g. BTC, ETH, BBN).
   */
  coinSymbol: string;
  /**
   * Optional secondary hint displayed below the amount (e.g. fiat equivalent).
   */
  hint?: string;
  /**
   * Optional custom title. Defaults to "<symbol> Network Fee".
   */
  title?: string;
  /**
   * Optional additional Tailwind classes.
   */
  className?: string;
  /**
   * Decimals used when `amount` is numeric. Defaults to 8.
   */
  decimals?: number;
}

/**
 * Display-only component that renders a network fee amount row.
 * All calculations (satoshi ⇢ BTC, fiat conversion, etc.) must be handled by
 * the consumer and provided via props.
 */
export function BTCFeeAmount({ amount, coinSymbol, hint, title, className, decimals = 8 }: BTCFeeAmountProps) {
  const formattedAmount =
    typeof amount === "number"
      ? amount === 0
        ? "0"
        : (() => {
            const str = amount.toFixed(decimals);
            // Remove unnecessary trailing zeros and possible trailing decimal point
            return str.replace(/0+$/, "").replace(/\.$/, "");
          })()
      : amount;

  return (
    <FeeItem title={title ?? `${coinSymbol} Network Fee`} hint={hint} className={className}>
      {formattedAmount} {coinSymbol}
    </FeeItem>
  );
}
