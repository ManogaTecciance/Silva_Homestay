const DAY_IN_MS = 24 * 60 * 60 * 1000;
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

export type BookingValidationErrors = Partial<
  Record<"arrival" | "departure" | "guests", string>
>;

type RequiredBookingDetails = {
  arrival: string;
  departure: string;
  guests: string;
};

type WhatsAppEnquiryDetails = RequiredBookingDetails & {
  name?: string;
  contactInfo?: string;
  pkg?: string;
  notes?: string;
};

function isoDateToUtcTimestamp(value: string) {
  const match = ISO_DATE_PATTERN.exec(value);
  if (!match) return null;

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return timestamp;
}

export function getLocalTodayIso(now = new Date()) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function calculateNights(arrival: string, departure: string) {
  const arrivalTime = isoDateToUtcTimestamp(arrival);
  const departureTime = isoDateToUtcTimestamp(departure);
  if (arrivalTime === null || departureTime === null || departureTime <= arrivalTime) {
    return 0;
  }

  return (departureTime - arrivalTime) / DAY_IN_MS;
}

export function validateBookingDetails(
  values: RequiredBookingDetails,
  todayIso: string,
): BookingValidationErrors {
  const errors: BookingValidationErrors = {};
  const arrivalTime = isoDateToUtcTimestamp(values.arrival);
  const departureTime = isoDateToUtcTimestamp(values.departure);
  const todayTime = isoDateToUtcTimestamp(todayIso);

  if (!values.arrival) {
    errors.arrival = "Please select a check-in date.";
  } else if (arrivalTime === null) {
    errors.arrival = "Please select a valid check-in date.";
  } else if (todayTime !== null && arrivalTime < todayTime) {
    errors.arrival = "Check-in cannot be earlier than today.";
  }

  if (!values.departure) {
    errors.departure = "Please select a check-out date.";
  } else if (departureTime === null) {
    errors.departure = "Please select a valid check-out date.";
  } else if (arrivalTime !== null && departureTime <= arrivalTime) {
    errors.departure = "Check-out must be later than check-in.";
  }

  const guestCount = Number.parseInt(values.guests, 10);
  if (!Number.isFinite(guestCount) || guestCount < 1) {
    errors.guests = "Please select at least one guest.";
  }

  return errors;
}

function formatBookingDate(value: string) {
  const timestamp = isoDateToUtcTimestamp(value);
  if (timestamp === null) return value;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(timestamp);
}

function guestLabel(value: string) {
  return value === "3+" ? "3 or more" : value;
}

export function createWhatsAppEnquiryMessage(details: WhatsAppEnquiryDetails) {
  const nights = calculateNights(details.arrival, details.departure);
  const optionalLines = [
    details.pkg?.trim() ? `📦 Room or package: ${details.pkg.trim()}` : null,
    details.name?.trim() ? `👤 Name: ${details.name.trim()}` : null,
    details.contactInfo?.trim() ? `📞 Contact: ${details.contactInfo.trim()}` : null,
    details.notes?.trim() ? `📝 Notes: ${details.notes.trim()}` : null,
  ].filter((line): line is string => Boolean(line));

  return [
    "Hello Silva Homestay! 👋",
    "",
    "I would like to enquire about room availability for my upcoming stay.",
    "",
    "🏡 *Booking Enquiry*",
    "",
    `📅 Check-in: ${formatBookingDate(details.arrival)}`,
    `📅 Check-out: ${formatBookingDate(details.departure)}`,
    `🌙 Nights: ${nights}`,
    `👥 Guests: ${guestLabel(details.guests)}`,
    ...optionalLines,
    "",
    "Could you please confirm room availability and the total price for these dates?",
    "",
    "Thank you!",
  ].join("\n");
}

export function createWhatsAppUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
