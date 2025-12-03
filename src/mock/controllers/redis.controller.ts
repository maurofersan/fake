import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Res,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { RedisService } from '../services/redis.service';
import { RedAccountRedisInputDTO, RedAccountDto } from '../dto/redis.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('create')
  create(@Body() body: RedAccountRedisInputDTO, @Res() res: Response): void {
    try {
      const result = this.redisService.create(body);
      // Si no hay error, retornar con status 201
      res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      // Si hay error, el servicio lanzará HttpException y NestJS lo manejará automáticamente
      // Pero si usamos @Res(), debemos manejarlo manualmente
      if (error instanceof HttpException) {
        res.status(error.getStatus()).json(error.getResponse());
      } else {
        throw error;
      }
    }
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
