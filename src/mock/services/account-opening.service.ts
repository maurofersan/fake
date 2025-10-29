import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { AccountOpeningRecordDto } from '../dto/account-opening.dto';

@Injectable()
export class AccountOpeningService {
  constructor(private readonly mockDataGenerator: MockDataGeneratorService) {}

  create(data: AccountOpeningRecordDto): any {
    // Generate mock LeadRecord response
    return this.mockDataGenerator.generateFromSchema('LeadRecord', null);
  }

  findById(id: string): any {
    // Generate mock LeadRecord response
    return this.mockDataGenerator.generateFromSchema('LeadRecord', null);
  }

  findByDocument(documentType: string, documentNumber: string): any {
    // Generate mock LeadRecord response
    return this.mockDataGenerator.generateFromSchema('LeadRecord', null);
  }
}
