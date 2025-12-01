import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OTPService } from '../services/otp.service';
import {
  GenerateOTPRecord,
  VerifyOTPRecord,
  GenerateOTPResponse,
} from '../dto/otp.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('otp')
export class OTPController {
  constructor(private readonly otpService: OTPService) {}

  @Post('generate')
  @HttpCode(HttpStatus.OK)
  generate(@Body() body: GenerateOTPRecord): ApiResponse<GenerateOTPResponse> {
    return this.otpService.generate(body);
  }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  verify(@Body() body: VerifyOTPRecord): ApiResponse<string> {
    return this.otpService.verify(body);
  }
}
