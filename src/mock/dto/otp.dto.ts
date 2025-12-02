/**
 * DTOs for OTP endpoints
 * Based on swagger-redis-create.json schemas
 */

/**
 * Type for OTP operations
 */
export type OTPType = 'ACCOUNT_OPENING' | 'LOAN';

/**
 * DTO for generating OTP
 */
export class GenerateOTPRecord {
  device: string;
  type: OTPType;
  phone?: string;
  email?: string;
}

/**
 * DTO for verifying OTP
 */
export class VerifyOTPRecord {
  device: string;
  type: OTPType;
  phone?: string;
  email?: string;
  code: string;
}

/**
 * Response DTO for OTP operations
 */
export class OTPResponse {
  success: boolean;
  message: string;
  code?: string;
}

/**
 * Response DTO for OTP generation
 */
export class GenerateOTPResponse {
  expirationSeconds: number;
  code?: string;
}
