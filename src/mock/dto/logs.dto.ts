/**
 * DTOs for Logs endpoints
 * Based on swagger-logs.json schemas
 */

/**
 * Request DTO for creating logs
 * Supports three scenarios:
 * 1. Initial creation - requires transactionSessionId, transactionStartDate, createdBy, and traceability fields
 * 2. Per input - requires transactionId, traceabilityTransactionId, and traceability fields
 * 3. Final transaction - requires all transaction fields
 */
export class LogCreateRequestDto {
  // Transaction fields (for final transaction)
  transactionId?: string;
  transactionSessionId?: string;
  transactionDocumentType?: string;
  transactionDocumentNumber?: string;
  transactionPaternalLastname?: string;
  transactionMaternalLastname?: string;
  transactionFirstName?: string;
  transactionFullName?: string;
  transactionGender?: string;
  transactionMaritalStatus?: string;
  transactionBirthDate?: string;
  transactionProductAcquired?: string;
  transactionSubproductAcquired?: string;
  transactionCurrency?: string;
  transactionStartDate?: string;
  transactionEndDate?: string;
  transactionIpAddress?: string;
  transactionBrowserUsed?: string;
  transactionIncompleteReason?: string;
  isActive?: boolean;

  // Traceability fields
  traceabilityTraceId?: string;
  traceabilityTransactionId?: string;
  traceabilityPageInternalName?: string;
  traceabilityElementName?: string;
  traceabilityEvaluatedValue?: string;
  traceabilityIsValid?: boolean;
  traceabilityErrorMessage?: string;

  // Audit fields
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;

  // Additional optional fields for final transaction
  phone?: string;
  email?: string;
  dni?: string;
  peruvianBirth?: boolean;
  privacyAccepted?: boolean;
  recaptchaValid?: boolean;
  productAcquired?: string;
  subproductAcquired?: string;
  currency?: string;
  otpMail?: string;
  authorizedBiometricData?: boolean;
  sdkDniFront?: string;
  sdkDniBack?: string;
  sdkDniSelfie?: string;
  consultZytrus?: boolean;
  consultGesintel?: boolean;
  streetType?: string;
  streetName?: string;
  streetNumber?: string;
  department?: string;
  province?: string;
  district?: string;
  checkContract?: boolean;
  checkSwornStatement?: boolean;
}

/**
 * Response DTO for transaction log record
 * Based on TransactionLogRecord schema from swagger
 */
export class TransactionLogRecord {
  transactionLogId: string;
  transactionLogSessionId: string;
  transactionLogProductId?: string;
  transactionLogSubProductId?: string;
  transactionLogDocumentType?: string;
  transactionLogDocumentNumber?: string;
  transationCodeProduct?: string;
  transactionLogEventType?: string;
  transactionLogEventStatus?: string;
  transactionLogDate?: string;
  transactionLogPageId?: string;
  transactionLogComments?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

/**
 * Response DTO for data general log
 * Based on DataGeneralLogResponse schema from swagger
 */
export class DataGeneralLogResponse {
  transactionId?: string;
  transactionSessionId?: string;
  transactionDocumentType?: string;
  transactionDocumentNumber?: string;
  transactionPaternalLastname?: string;
  transactionMaternalLastname?: string;
  transactionFirstName?: string;
  transactionFullName?: string;
  transactionGender?: string;
  transactionMaritalStatus?: string;
  transactionBirthDate?: string;
  transactionProductAcquired?: string;
  transactionSubproductAcquired?: string;
  transactionCurrency?: string;
  transactionStartDate?: string;
  transactionEndDate?: string;
  transactionIpAddress?: string;
  transactionBrowserUsed?: string;
  transactionIncompleteReason?: string;
  isActive?: boolean;
  createdBy?: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  traceabilityTraceId?: string;
  traceabilityTransactionId?: string;
  traceabilityPageInternalName?: string;
  traceabilityElementName?: string;
  traceabilityEvaluatedValue?: string;
  traceabilityIsValid?: boolean;
  traceabilityErrorMessage?: string;
  // Additional optional fields for final transaction
  phone?: string;
  email?: string;
  dni?: string;
  peruvianBirth?: boolean;
  privacyAccepted?: boolean;
  recaptchaValid?: boolean;
  productAcquired?: string;
  subproductAcquired?: string;
  currency?: string;
  otpMail?: string;
  authorizedBiometricData?: boolean;
  sdkDniFront?: string;
  sdkDniBack?: string;
  sdkDniSelfie?: string;
  consultZytrus?: boolean;
  consultGesintel?: boolean;
  streetType?: string;
  streetName?: string;
  streetNumber?: string;
  department?: string;
  province?: string;
  district?: string;
  checkContract?: boolean;
  checkSwornStatement?: boolean;
}
