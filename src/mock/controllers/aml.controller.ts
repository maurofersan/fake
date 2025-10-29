import { Controller, Post, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AmlService } from '../services/aml.service';

@Controller('aml')
export class AmlController {
  constructor(private readonly amlService: AmlService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  verify(
    @Query('citizenship') citizenship?: string,
    @Query('name') name?: string,
    @Query('type') type?: string,
    @Query('dateBirth') dateBirth?: string,
    @Query('dni') dni?: string,
    @Query('data') data?: any,
  ): string {
    // Mock successful AML verification response (200)
    // Accept both individual query params and 'data' object (for flexibility)
    const requestData = data || {
      citizenship,
      name,
      type,
      dateBirth,
      dni,
    };
    return this.amlService.verify(requestData);
  }
}
