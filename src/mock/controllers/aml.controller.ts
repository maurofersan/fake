import {
  Controller,
  Post,
  Query,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AmlService } from '../services/aml.service';
import { AmlRequestDto } from '../dto/aml.dto';

@Controller('aml')
export class AmlController {
  constructor(private readonly amlService: AmlService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  verify(
    @Body() body?: AmlRequestDto,
    @Query('citizenship') citizenship?: string,
    @Query('name') name?: string,
    @Query('type') type?: string,
    @Query('dateBirth') dateBirth?: string,
    @Query('dni') dni?: string,
  ): string {
    // Mock successful AML verification response (200)
    // Accept both @Body (recommended for POST) and query params (as per swagger)
    const requestData: AmlRequestDto =
      body ||
      ({
        citizenship,
        name,
        type,
        dateBirth,
        dni,
      } as AmlRequestDto);
    return this.amlService.verify(requestData);
  }
}
