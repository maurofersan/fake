import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';

@Injectable()
export class AccountOpeningService {
  constructor(private readonly mockDataGenerator: MockDataGeneratorService) {}

  create(data: any): any {
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
