import { FeeItem } from "./FeeItem";
import { Button } from "../../../components/Button";
import { FaPen } from "react-icons/fa6";

interface BTCFeeRateProps {
  /**
   * Current fee rate expressed in sats/vB.
   */
  value: number | string;
  /**
   * Called when the user presses the edit button. If omitted the button is not rendered.
   */
  onEdit?: () => void;
  /**
   * Custom label shown on the left. Defaults to "Network Fee Rate".
   */
  title?: string;
  /**
   * Optional additional Tailwind classes.
   */
  className?: string;
}

/**
 * Pure UI component that renders the fee rate row inside a FeesSection.
 * All business-logic is expected to live in the consuming application – this
 * component merely receives the already computed values through props and
 * renders them.
 */
export function BTCFeeRate({ value, onEdit, title = "Network Fee Rate", className }: BTCFeeRateProps) {
  return (
    <FeeItem title={title} className={className}>
      <span>{value} sats/vB</span>

      {onEdit && (
        <Button size="small" variant="outlined" className="h-6 w-6 pl-1 text-secondary-strokeDark" onClick={onEdit}>
          <FaPen size={16} className="text-secondary-strokeDark" />
        </Button>
      )}
    </FeeItem>
  );
}
