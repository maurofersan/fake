import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IdentyService } from '../services/identy.service';
import { SDKTypeDto } from '../dto/identy.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('api/v1')
export class IdentyController {
  constructor(private readonly identyService: IdentyService) {}

  @Post('pub_key')
  @HttpCode(HttpStatus.OK)
  create(@Body() body: SDKTypeDto): ApiResponse<string> {
    return this.identyService.generatePubKey(body);
  }
}
