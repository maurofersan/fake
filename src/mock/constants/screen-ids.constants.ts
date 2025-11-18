/**
 * Constants for screen IDs used in the onboarding flow
 * These IDs identify which screen the user is currently on
 * Modify these values when you have the actual screen IDs from your frontend
 */
export const SCREEN_IDS = {
  // ---------------------------------------------------------------------------
  //  LOAN.
  // ---------------------------------------------------------------------------
  ONBOARDING_START_LOAN: 'PG_8FA91C4DEB2749C3AF82B1C2', // Bienvenida
  ONBOARDING_DATA_PRIVACY_LOAN: 'PG_1BC73D9F4A1C4BAF89E12F33', // Datos personales
  LOANS_OFFER_LOAN: 'PG_E21F3A9C77D342BEA19E8C45', // Oferta
  OTP_SMS_LOAN: 'PG_3ED41FA857DB49BEAC1779D1', // OTP sms
  OTP_MAIL_LOAN: 'PG_A91B3FE4D45A4F0C92ED332F', // OTP mail
  BIOMETRIC_ONBOARDING_LOAN: 'PG_6AE17C4899FC4C0B84B9F0A2', // Biometria onboarding
  BIOMETRIC_DNI_FRONT_LOAN: 'PG_F29A77CC19A944C1AE3D11E8', // DNI front
  BIOMETRIC_DNI_BACK_LOAN: 'PG_4E157AB9CDEB47B5A21CC0F9', // DNI back
  BIOMETRIC_SELFIE_LOAN: 'PG_7091FA32CC4F4A65B7189AD3', // Selfie
  BIOMETRIC_SUCCESS_LOAN: 'PG_0DB93E2C51FA4F07A77C81B4', // Biometria success
  ONBOARDING_ADDITIONAL_DATA_LOAN: 'PG_4F9D2A71BCE64387A5F01D9C', // Datos adicionales (Datos PLAFT)
  LOAN_SUMMARY_LOAN: 'PG_958AB7DAE55A4A40B82AC1E7', // Resumen
  CONTRACT_TERMS_CONFIRMATION_LOAN: 'PG_3BC82AD4FA9C472290EE1821', // Contratos (Documentacion)
  FINAL_PAGE_LOAN: 'PG_7FD51E3AB88A47639C0F67D9', // (TYP)
  // ---------------------------------------------------------------------------
  //  ACCOUNT OPENING.
  // ---------------------------------------------------------------------------
  ONBOARDING_START_ACC: 'PG_B12D9A78C44C48CE901AF712', // Bienvenida
  ONBOARDING_DATA_PRIVACY_ACC: 'PG_89FA2CDEE71241FDA644BB0D', // Datos personales
  ACCOUNT_SELECT_ACC: 'PG_C913ED55BA6D4A80F1D23ABD', // Seleccion de cuentas
  OTP_MAIL_ACC: 'PG_22B8D9A77CC14762F09EAB11', // OTP mail
  BIOMETRIC_ONBOARDING_ACC: 'PG_7BD1FEA42A6C4A80B8EE19CC', // Biometria onboarding
  BIOMETRIC_DNI_FRONT_ACC: 'PG_D4C77B1A908C49D28300F921', // DNI front
  BIOMETRIC_DNI_BACK_ACC: 'PG_55A1ECDAFBB5480A9E7712FD', // DNI back
  BIOMETRIC_SELFIE_ACC: 'PG_771C5D2B14E949BE822F9813', // Selfie
  BIOMETRIC_SUCCESS_ACC: 'PG_442D9B12EEA04853A90F1FD2', // Biometria success
  ACCOUNT_SUMMARY_ACC: 'PG_99A0FBCC33B44B3BAA1E4790', // Account Resumen
  ACOUNT_FINAL_PAGE_ACC: 'PG_FA12C67E178D4A7289C5BD44', // Account activated (TYP)
} as const;

/**
 * Type for screen ID values
 */
export type ScreenId = (typeof SCREEN_IDS)[keyof typeof SCREEN_IDS];
