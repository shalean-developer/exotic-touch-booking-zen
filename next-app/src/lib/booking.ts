/**
 * Booking-related helpers (fees, time windows).
 * Service list prices use +R100 vs prior rates elsewhere; transport / surcharges stay separate.
 */

/** Placeholder until a fixed after-hours amount is defined in business rules */
export const AFTER_HOURS_FEE_AMOUNT_PLACEHOLDER = null as number | null;

/**
 * After-hours: bookings from 20:00 (8 PM) onwards.
 * Accepts HTML time input value "HH:mm" (24h).
 */
export function isBookingTimeAtOrAfterEightPM(timeValue: string): boolean {
  if (!timeValue || !/^\d{1,2}:\d{2}$/.test(timeValue)) return false;
  const [h, m] = timeValue.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return false;
  const minutes = h * 60 + m;
  return minutes >= 20 * 60;
}
