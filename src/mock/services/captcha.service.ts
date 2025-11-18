import { Injectable, HttpStatus } from '@nestjs/common';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { CaptchaResponse } from '../dto/captcha.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class CaptchaService {
  constructor(private readonly apiResponseBuilder: ApiResponseBuilderService) {}

  /**
   * Validates a captcha token
   * In production, this would call an external captcha service (e.g., Google reCAPTCHA)
   * For mock purposes, we simulate validation
   */
  validate(token: string): ApiResponse<CaptchaResponse> {
    if (!token) {
      return this.apiResponseBuilder.error(
        'token es requerido',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Mock validation: simulate captcha validation
    // In production, validate token with external service
    // For now, accept any non-empty token as valid
    const isValid = token.length > 0;

    const captchaResponse: CaptchaResponse = {
      success: isValid,
      score: isValid ? 0.9 : 0.1, // Score between 0.0 (bot) and 1.0 (human)
      action: 'submit',
    };

    if (isValid) {
      return this.apiResponseBuilder.success(
        captchaResponse,
        'Captcha validado correctamente',
      );
    } else {
      return this.apiResponseBuilder.error(
        'Captcha inválido',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
