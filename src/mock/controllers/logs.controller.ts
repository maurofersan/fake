import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LogsService } from '../services/logs.service';
import {
  LogCreateRequestDto,
  DataGeneralLogResponse,
  ConsultLogQueryDto,
  TransactionLogRecord,
  ConsultDataLogResponse,
} from '../dto/logs.dto';
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

  @Get('consultLog')
  @HttpCode(HttpStatus.OK)
  consultLog(
    @Query() query: ConsultLogQueryDto,
  ): ApiResponse<TransactionLogRecord | ConsultDataLogResponse[]> {
    return this.logsService.consultLog(query);
  }
}
