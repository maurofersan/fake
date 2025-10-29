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
import { RedAccountEntityDto } from '../dto/redis.dto';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  create(@Body() body: RedAccountEntityDto) {
    // Mock successful response (200)
    return this.redisService.create(body);
  }

  @Get(':documentType/:documentNumber')
  @HttpCode(HttpStatus.OK)
  findByDocument(
    @Param('documentType') documentType: string,
    @Param('documentNumber') documentNumber: string,
  ) {
    // Mock successful response (200)
    return this.redisService.findByDocument(documentType, documentNumber);
  }
}
