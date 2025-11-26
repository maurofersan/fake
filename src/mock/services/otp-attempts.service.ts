import { Injectable } from '@nestjs/common';
import { FakeStorageService } from '../utils/fake-storage.service';

/**
 * Interface for OTP attempt tracking
 */
interface OTPAttempt {
  attempts: number;
  blockedUntil?: number; // Timestamp when the block expires
}

/**
 * Service responsible for managing OTP verification attempts
 * Follows Single Responsibility Principle (SRP)
 * Handles attempt counting, blocking, and reset logic
 */
@Injectable()
export class OTPAttemptsService {
  private readonly MAX_ATTEMPTS = 3;
  private readonly BLOCK_DURATION_MINUTES = 30;

  constructor(private readonly fakeStorage: FakeStorageService) {}

  /**
   * Gets the storage key for attempt tracking
   */
  private getAttemptKey(phone?: string, email?: string): string {
    if (phone) {
      return `otp:attempts:phone:${phone}`;
    }
    return `otp:attempts:email:${email}`;
  }

  /**
   * Checks if the phone/email is currently blocked
   * @returns true if blocked, false otherwise
   */
  isBlocked(phone?: string, email?: string): boolean {
    const key = this.getAttemptKey(phone, email);
    const attempt = this.fakeStorage.getItem(key) as OTPAttempt | null;

    if (!attempt || !attempt.blockedUntil) {
      return false;
    }

    // Check if block has expired
    if (Date.now() > attempt.blockedUntil) {
      // Reset attempts when block expires
      this.resetAttempts(phone, email);
      return false;
    }

    return true;
  }

  /**
   * Records a failed attempt and returns the appropriate error message
   * @returns Error message with remaining attempts or block message
   */
  recordFailedAttempt(phone?: string, email?: string): string {
    const key = this.getAttemptKey(phone, email);
    const attempt = this.fakeStorage.getItem(key) as OTPAttempt | null;

    const currentAttempts = attempt ? attempt.attempts + 1 : 1;

    if (currentAttempts >= this.MAX_ATTEMPTS) {
      // Block for 30 minutes
      const blockedUntil = Date.now() + this.BLOCK_DURATION_MINUTES * 60 * 1000;
      const blockedAttempt: OTPAttempt = {
        attempts: currentAttempts,
        blockedUntil,
      };
      this.fakeStorage.setItem(key, blockedAttempt);

      return 'Has superado el máximo de 3 intentos. Prueba en 30 minutos.';
    }

    // Update attempt count
    const remainingAttempts = this.MAX_ATTEMPTS - currentAttempts;
    const updatedAttempt: OTPAttempt = {
      attempts: currentAttempts,
    };
    this.fakeStorage.setItem(key, updatedAttempt);

    return `El código es incorrecto. Te quedan ${remainingAttempts} intentos.`;
  }

  /**
   * Resets attempts after successful verification or when block expires
   */
  resetAttempts(phone?: string, email?: string): void {
    const key = this.getAttemptKey(phone, email);
    this.fakeStorage.removeItem(key);
  }

  /**
   * Gets the current attempt count (for debugging/logging purposes)
   */
  getAttemptCount(phone?: string, email?: string): number {
    const key = this.getAttemptKey(phone, email);
    const attempt = this.fakeStorage.getItem(key) as OTPAttempt | null;
    return attempt?.attempts || 0;
  }
}
