import { Injectable, HttpStatus } from '@nestjs/common';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { GenerateOTPRecord, VerifyOTPRecord } from '../dto/otp.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class OTPService {
  // Store OTPs temporarily (in production, use Redis with TTL)
  private otpStorage: Map<string, { code: string; expiresAt: number }> =
    new Map();
  private readonly OTP_EXPIRY_MINUTES = 5;

  constructor(
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  /**
   * Generates an OTP code for the given phone or email
   * Stores the OTP with expiration time for verification
   */
  generate(data: GenerateOTPRecord): ApiResponse<string> {
    if (!data.phone && !data.email) {
      return this.apiResponseBuilder.error(
        'phone o email es requerido',
        HttpStatus.BAD_REQUEST,
      );
    }

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

    return this.apiResponseBuilder.success(
      'OK', // In production, return a success message instead
      'OTP Generado correctamente',
    );
  }

  /**
   * Verifies if the provided OTP code is valid
   * Checks expiration and matches the code
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

    // Create storage key based on phone or email
    const storageKey = data.phone
      ? `otp:phone:${data.phone}`
      : `otp:email:${data.email}`;

    const storedOTP = this.otpStorage.get(storageKey);

    if (!storedOTP) {
      return this.apiResponseBuilder.error(
        'OTP no encontrado o expirado',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Check if OTP has expired
    if (Date.now() > storedOTP.expiresAt) {
      this.otpStorage.delete(storageKey);
      return this.apiResponseBuilder.error(
        'OTP inválido o expirado',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Verify code
    if (storedOTP.code !== data.code) {
      return this.apiResponseBuilder.error(
        'OTP inválido o expirado',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Remove OTP after successful verification (one-time use)
    this.otpStorage.delete(storageKey);

    return this.apiResponseBuilder.success(
      'OTP verificado correctamente',
      'OTP válido',
    );
  }
}
