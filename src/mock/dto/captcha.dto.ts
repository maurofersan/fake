/**
 * DTOs for Captcha endpoints
 * Based on swagger-redis-create.json schemas
 */

/**
 * Response DTO for Captcha validation
 */
export class CaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
}
