/**
 * DTOs for OTP endpoints
 * Based on swagger-redis-create.json schemas
 */

/**
 * DTO for generating OTP
 */
export class GenerateOTPRecord {
  device?: string;
  phone?: string;
  email?: string;
}

/**
 * DTO for verifying OTP
 */
export class VerifyOTPRecord {
  device?: string;
  phone?: string;
  email?: string;
  code?: string;
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
  expirationMinutes: number;
  code?: string;
}
