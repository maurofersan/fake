import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RedisService } from '../services/redis.service';
import { RedAccountRedisInputDTO, RedAccountDto } from '../dto/redis.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: RedAccountRedisInputDTO): ApiResponse<RedAccountDto> {
    return this.redisService.create(body);
  }

  @Get(':documentType/:documentNumber')
  @HttpCode(HttpStatus.OK)
  findByDocument(
    @Param('documentType') documentType: string,
    @Param('documentNumber') documentNumber: string,
  ): ApiResponse<RedAccountDto> {
    return this.redisService.findByDocument(documentType, documentNumber);
  }
}
