import { twMerge } from "tailwind-merge";

import { SubSection } from "../../../components/SubSection";
import { BTCFeeRate } from "./BTCFeeRate";
import { BTCFeeAmount } from "./BTCFeeAmount";
import { BBNFeeAmount } from "./BBNFeeAmount";
import { Total } from "./Total";

interface FeesSectionProps {
  /** Wrapper className override. */
  className?: string;

  /** Current fee rate (sats/vB). */
  feeRate: number | string;
  /** Handler invoked when the edit button is pressed. */
  onFeeRateEdit?: () => void;

  /** Network fee amount in token units. */
  feeAmount: number | string;
  /** Symbol of the token (e.g. BTC). */
  coinSymbol: string;
  /** Optional fiat/equivalent hint for the fee amount. */
  feeAmountHint?: string;

  /** Total amount (token units). */
  total: number | string;
  /** Optional fiat/equivalent hint for total. */
  totalHint?: string;

  /** Babylon network fee amount. Optional – row will be hidden if not provided. */
  bbnFeeAmount?: number | string;
  /** Symbol of the Babylon token (e.g. BBN, BABY). Required if bbnFeeAmount is provided. */
  bbnCoinSymbol?: string;
  /** Optional fiat/equivalent hint for Babylon fee amount. */
  bbnFeeAmountHint?: string;
  /** Optional decimals override for Babylon fee amount (defaults to 5). */
  bbnFeeDecimals?: number;
}

/**
 * Wrapper that displays the three standard fee rows (network fee rate,
 * network fee amount and total). All data is injected via props so that the
 * consuming application retains full control over business-logic.
 */
export function FeesSection({
  className,
  feeRate,
  onFeeRateEdit,
  feeAmount,
  coinSymbol,
  feeAmountHint,
  total,
  totalHint,

  bbnFeeAmount,
  bbnCoinSymbol,
  bbnFeeAmountHint,
  bbnFeeDecimals,
}: FeesSectionProps) {
  return (
    <SubSection className={twMerge("flex w-full flex-col content-center justify-between gap-4", className)}>
      <div className="flex flex-col gap-6 p-4">
        <BTCFeeRate value={feeRate} onEdit={onFeeRateEdit} />
        <BTCFeeAmount amount={feeAmount} coinSymbol={coinSymbol} hint={feeAmountHint} />
        {bbnFeeAmount !== undefined && bbnCoinSymbol ? (
          <BBNFeeAmount
            amount={bbnFeeAmount}
            coinSymbol={bbnCoinSymbol}
            hint={bbnFeeAmountHint}
            decimals={bbnFeeDecimals}
          />
        ) : null}
        <div className="divider my-4" />
        <Total total={total} coinSymbol={coinSymbol} hint={totalHint} />
      </div>
    </SubSection>
  );
}
