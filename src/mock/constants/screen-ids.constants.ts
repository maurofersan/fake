/**
 * Constants for screen IDs used in the onboarding flow
 * These IDs identify which screen the user is currently on
 */
export const SCREEN_IDS = {
  // ---------------------------------------------------------------------------
  //  LOANS.
  // ---------------------------------------------------------------------------
  onboardingStartLoan: 'PG_8FA91C4DEB2749C3AF82B1C2', // Bienvenida
  onboardingDataPrivacyLoan: 'PG_1BC73D9F4A1C4BAF89E12F33', // Datos personales
  loansOfferLoan: 'PG_E21F3A9C77D342BEA19E8C45', // Oferta
  otpSmsLoan: 'PG_3ED41FA857DB49BEAC1779D1', // OTP sms
  otpMailLoan: 'PG_A91B3FE4D45A4F0C92ED332F', // OTP mail
  biometricOnboardingLoan: 'PG_6AE17C4899FC4C0B84B9F0A2', // Biometria onboarding
  biometricDniFrontLoan: 'PG_F29A77CC19A944C1AE3D11E8', // DNI front
  biometricDniBackLoan: 'PG_4E157AB9CDEB47B5A21CC0F9', // DNI back
  biometricSelfieLoan: 'PG_7091FA32CC4F4A65B7189AD3', // Selfie
  biometricSuccessLoan: 'PG_0DB93E2C51FA4F07A77C81B4', // Biometria success
  onboardingAdditionalDataLoan: 'PG_4F9D2A71BCE64387A5F01D9C', // Datos adicionales (Datos PLAFT)
  loanSummaryLoan: 'PG_958AB7DAE55A4A40B82AC1E7', // Resumen
  contractTermsConfirmationLoan: 'PG_3BC82AD4FA9C472290EE1821', // Contratos (Documentacion)
  finalPageLoan: 'PG_7FD51E3AB88A47639C0F67D9', // (TYP)
  // ---------------------------------------------------------------------------
  //  ACCOUNT OPENING.
  // ---------------------------------------------------------------------------
  onboardingStartAcc: 'PG_B12D9A78C44C48CE901AF712', // Bienvenida
  onboardingDataPrivacyAcc: 'PG_89FA2CDEE71241FDA644BB0D', // Datos personales
  accountSelectAcc: 'PG_C913ED55BA6D4A80F1D23ABD', // Seleccion de cuentas
  otpMailAcc: 'PG_22B8D9A77CC14762F09EAB11', // OTP mail
  biometricOnboardingAcc: 'PG_7BD1FEA42A6C4A80B8EE19CC', // Biometria onboarding
  biometricDniFrontAcc: 'PG_D4C77B1A908C49D28300F921', // DNI front
  biometricDniBackAcc: 'PG_55A1ECDAFBB5480A9E7712FD', // DNI back
  biometricSelfieAcc: 'PG_771C5D2B14E949BE822F9813', // Selfie
  biometricSuccessAcc: 'PG_442D9B12EEA04853A90F1FD2', // Biometria success
  accountSummaryAcc: 'PG_99A0FBCC33B44B3BAA1E4790', // Account Resumen
  acountFinalPageAcc: 'PG_FA12C67E178D4A7289C5BD44', // Account activated (TYP)
} as const;

/**
 * Type for screen ID values
 */
export type ScreenId = (typeof SCREEN_IDS)[keyof typeof SCREEN_IDS];
