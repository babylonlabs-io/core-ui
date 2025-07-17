import { FeeItem } from "./FeeItem";

interface BBNFeeAmountProps {
  amount: number | string;
  coinSymbol: string;
  hint?: string;
  title?: string;
  className?: string;
  decimals?: number;
}

export function BBNFeeAmount({ amount, coinSymbol, hint, title, className, decimals = 5 }: BBNFeeAmountProps) {
  const formattedAmount = typeof amount === "number" ? amount.toFixed(decimals) : amount;

  return (
    <FeeItem title={title ?? `${coinSymbol} Network Fee`} hint={hint} className={className}>
      {formattedAmount} {coinSymbol}
    </FeeItem>
  );
}
