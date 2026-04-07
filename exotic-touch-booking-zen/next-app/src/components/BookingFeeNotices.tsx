"use client";

import { Info } from "lucide-react";
import { AFTER_HOURS_FEE_AMOUNT_PLACEHOLDER, isBookingTimeAtOrAfterEightPM } from "@/lib/booking";

type BookingFeeNoticesProps = {
  /** HTML time input value (HH:mm), optional */
  preferredTime?: string;
  className?: string;
};

/**
 * Winelands transport note + dynamic after-hours fee notice when a time is selected.
 */
export function BookingFeeNotices({ preferredTime = "", className = "" }: BookingFeeNoticesProps) {
  const showAfterHours =
    preferredTime.length > 0 && isBookingTimeAtOrAfterEightPM(preferredTime);

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        role="status"
        className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground/90"
      >
        <Info className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p>
          Bookings in the Winelands area will incur an additional transport fee.
        </p>
      </div>
      {showAfterHours && (
        <div
          role="status"
          className="flex gap-3 rounded-lg border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-foreground/90"
        >
          <Info className="h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden />
          <p>
            An additional after-hours fee applies for bookings from 20:00.
            {AFTER_HOURS_FEE_AMOUNT_PLACEHOLDER != null && (
              <span className="font-medium"> (R{AFTER_HOURS_FEE_AMOUNT_PLACEHOLDER})</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
