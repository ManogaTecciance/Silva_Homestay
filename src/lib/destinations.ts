import type { Destination } from "@/content/content";

/** "Approx. X.X km from Silva Homestay · about N min by bike", or null while unverified. */
export function distanceText(d: Destination): string | null {
  if (d.distanceKm == null) return null;
  return (
    `Approx. ${d.distanceKm.toFixed(1)} km from Silva Homestay` +
    (d.estimatedBikeTime ? ` · about ${d.estimatedBikeTime} min by bike` : "")
  );
}
