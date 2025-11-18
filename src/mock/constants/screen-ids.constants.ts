/**
 * Constants for screen IDs used in the onboarding flow
 * These IDs identify which screen the user is currently on
 * Modify these values when you have the actual screen IDs from your frontend
 */
export const SCREEN_IDS = {
  /** Initial onboarding screen - user enters basic information */
  ONBOARDING: 'ID_PANTALLA_DATOS', // TODO: Replace with actual onboarding screen ID

  /** Screen where user selects account type */
  SELECT_ACCOUNT: 'ID_PANTALLA_SELECCION_CUENTA', // TODO: Replace with actual select account screen ID

  /** Screen for OTP verification via SMS */
  OTP_SMS: 'ID_PANTALLA_OTP_SMS', // TODO: Replace with actual OTP SMS screen ID

  /** Screen for OTP verification via Email */
  OTP_MAIL: 'ID_PANTALLA_OTP_MAIL', // TODO: Replace with actual OTP Mail screen ID

  /** Screen for OCR document scanning */
  OCR: 'ID_PANTALLA_OCR', // TODO: Replace with actual OCR screen ID

  /** Screen for selfie capture */
  SELFIE: 'ID_PANTALLA_SELFIE', // TODO: Replace with actual selfie screen ID

  /** Screen showing account summary before final submission */
  ACCOUNT_SUMMARY: 'ID_PANTALLA_RESUMEN_CUENTA', // TODO: Replace with actual account summary screen ID

  /** Final screen showing account activation confirmation */
  ACCOUNT_ACTIVATED: 'ID_PANTALLA_CUENTA_ACTIVADA', // TODO: Replace with actual account activated screen ID
} as const;

/**
 * Type for screen ID values
 */
export type ScreenId = (typeof SCREEN_IDS)[keyof typeof SCREEN_IDS];
