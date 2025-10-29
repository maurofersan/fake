import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AccountOpeningService } from '../services/account-opening.service';

@Controller('api/account-openings')
export class AccountOpeningController {
  constructor(private readonly accountOpeningService: AccountOpeningService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: any) {
    // Mock successful response (201)
    return this.accountOpeningService.create(body);
  }

  @Get('document')
  @HttpCode(HttpStatus.OK)
  findByDocument(
    @Query('documentType') documentType: string,
    @Query('documentNumber') documentNumber: string,
  ) {
    // Mock successful response (200)
    return this.accountOpeningService.findByDocument(
      documentType,
      documentNumber,
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string) {
    // Mock successful response (200)
    return this.accountOpeningService.findById(id);
  }
}
