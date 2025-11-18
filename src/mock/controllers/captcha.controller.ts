import { Controller, Get, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { CaptchaService } from '../services/captcha.service';
import { CaptchaResponse } from '../dto/captcha.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('captcha')
export class CaptchaController {
  constructor(private readonly captchaService: CaptchaService) {}

  @Get('validate')
  @HttpCode(HttpStatus.OK)
  validate(@Query('token') token: string): ApiResponse<CaptchaResponse> {
    return this.captchaService.validate(token);
  }
}
