// Shared WhatsApp/contact-number validation for the lead-capture and contact
// forms. We count only numeric digits (ignoring spaces, dashes, and a leading
// "+"), so formatted inputs like "012-345 6789" or "+60 12-345 6789" are judged
// by their real digit count. Valid range: 10–13 digits.
export const WHATSAPP_MIN_DIGITS = 10;
export const WHATSAPP_MAX_DIGITS = 13;

export const countDigits = (value: string): number =>
  (value.match(/\d/g) ?? []).length;

export const isValidWhatsapp = (value: string): boolean => {
  const digits = countDigits(value);
  return digits >= WHATSAPP_MIN_DIGITS && digits <= WHATSAPP_MAX_DIGITS;
};
