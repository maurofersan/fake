import { Injectable, HttpStatus } from '@nestjs/common';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { OTPAttemptsService } from './otp-attempts.service';
import {
  GenerateOTPRecord,
  VerifyOTPRecord,
  GenerateOTPResponse,
} from '../dto/otp.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class OTPService {
  // Store OTPs temporarily (in production, use Redis with TTL)
  private otpStorage: Map<string, { code: string; expiresAt: number }> =
    new Map();
  private readonly OTP_EXPIRY_MINUTES = 3;

  constructor(
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
    private readonly otpAttemptsService: OTPAttemptsService,
  ) {}

  /**
   * Generates an OTP code for the given phone or email
   * Stores the OTP with expiration time for verification
   * Resets attempts when generating a new OTP
   */
  generate(data: GenerateOTPRecord): ApiResponse<GenerateOTPResponse> {
    if (!data.phone && !data.email) {
      return this.apiResponseBuilder.error(
        'phone o email es requerido',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Reset attempts when generating a new OTP
    this.otpAttemptsService.resetAttempts(data.phone, data.email);

    // Generate 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Create storage key based on phone or email
    const storageKey = data.phone
      ? `otp:phone:${data.phone}`
      : `otp:email:${data.email}`;

    // Calculate expiration time
    const expiresAt = Date.now() + this.OTP_EXPIRY_MINUTES * 60 * 1000;

    // Store OTP with expiration
    this.otpStorage.set(storageKey, {
      code: otpCode,
      expiresAt,
    });

    // In production, you would send the OTP via SMS or email here
    // For mock purposes, we return it in the response
    // In real implementation, return success message without the code

    // Return response with expiration minutes
    const response: GenerateOTPResponse = {
      expirationMinutes: this.OTP_EXPIRY_MINUTES,
      code: otpCode,
    };

    return this.apiResponseBuilder.success(
      response,
      'OTP Generado correctamente',
    );
  }

  /**
   * Verifies if the provided OTP code is valid
   * Checks expiration, matches the code, and handles attempt tracking
   */
  verify(data: VerifyOTPRecord): ApiResponse<string> {
    if (!data.code) {
      return this.apiResponseBuilder.error(
        'code es requerido',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!data.phone && !data.email) {
      return this.apiResponseBuilder.error(
        'phone o email es requerido',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Check if phone/email is blocked due to too many failed attempts
    if (this.otpAttemptsService.isBlocked(data.phone, data.email)) {
      const errorMessage = this.otpAttemptsService.recordFailedAttempt(
        data.phone,
        data.email,
      );
      return this.apiResponseBuilder.error(
        'Error al verificar OTP',
        HttpStatus.BAD_REQUEST,
        errorMessage,
      );
    }

    // Create storage key based on phone or email
    const storageKey = data.phone
      ? `otp:phone:${data.phone}`
      : `otp:email:${data.email}`;

    const storedOTP = this.otpStorage.get(storageKey);

    if (!storedOTP) {
      // Record failed attempt
      const errorMessage = this.otpAttemptsService.recordFailedAttempt(
        data.phone,
        data.email,
      );
      return this.apiResponseBuilder.error(
        'Error al verificar OTP',
        HttpStatus.BAD_REQUEST,
        errorMessage,
      );
    }

    // Check if OTP has expired
    if (Date.now() > storedOTP.expiresAt) {
      this.otpStorage.delete(storageKey);
      // Record failed attempt
      const errorMessage = this.otpAttemptsService.recordFailedAttempt(
        data.phone,
        data.email,
      );
      return this.apiResponseBuilder.error(
        'Error al verificar OTP',
        HttpStatus.BAD_REQUEST,
        errorMessage,
      );
    }

    // Verify code
    if (storedOTP.code !== data.code) {
      // Record failed attempt
      const errorMessage = this.otpAttemptsService.recordFailedAttempt(
        data.phone,
        data.email,
      );
      return this.apiResponseBuilder.error(
        'Error al verificar OTP',
        HttpStatus.BAD_REQUEST,
        errorMessage,
      );
    }

    // Success! Reset attempts and remove OTP
    this.otpAttemptsService.resetAttempts(data.phone, data.email);
    this.otpStorage.delete(storageKey);

    return this.apiResponseBuilder.success(
      'OTP verificado correctamente',
      'OTP válido',
    );
  }
}
