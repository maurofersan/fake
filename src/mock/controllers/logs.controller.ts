import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { LogsService } from '../services/logs.service';
import { LogCreateRequestDto, DataGeneralLogResponse } from '../dto/logs.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  create(
    @Body() body: LogCreateRequestDto,
  ): ApiResponse<DataGeneralLogResponse> {
    return this.logsService.create(body);
  }
}
