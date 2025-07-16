import { FeeItem } from "./FeeItem";

interface BBNFeeAmountProps {
  /**
   * Fee amount expressed in token units (e.g. BBN, BABY, etc.).
   * Can be a pre-formatted string or a raw numeric value.
   */
  amount: number | string;
  /**
   * Symbol of the token (e.g. BBN, BABY).
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
   * Decimals used when `amount` is numeric. Defaults to 5.
   */
  decimals?: number;
}

/**
 * Display-only component that renders a network fee amount row for the Babylon
 * (BBN/tBABY) network. All calculations (fiat conversion, etc.) must be
 * handled by the consumer and provided via props.
 */
export function BBNFeeAmount({ amount, coinSymbol, hint, title, className, decimals = 5 }: BBNFeeAmountProps) {
  const formattedAmount = typeof amount === "number" ? amount.toFixed(decimals) : amount;

  return (
    <FeeItem title={title ?? `${coinSymbol} Network Fee`} hint={hint} className={className}>
      {formattedAmount} {coinSymbol}
    </FeeItem>
  );
}
