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
import { AccountOpeningRecordDto } from '../dto/account-opening.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller('api/account-openings')
export class AccountOpeningController {
  constructor(private readonly accountOpeningService: AccountOpeningService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: AccountOpeningRecordDto): ApiResponse<any> {
    return this.accountOpeningService.create(body);
  }

  @Get('document')
  @HttpCode(HttpStatus.OK)
  findByDocument(
    @Query('documentType') documentType: string,
    @Query('documentNumber') documentNumber: string,
  ): ApiResponse<any> {
    return this.accountOpeningService.findByDocument(
      documentType,
      documentNumber,
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string): ApiResponse<any> {
    return this.accountOpeningService.findById(id);
  }
}
