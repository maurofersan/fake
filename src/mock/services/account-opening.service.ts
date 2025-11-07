import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { AccountOpeningRecordDto } from '../dto/account-opening.dto';

@Injectable()
export class AccountOpeningService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
  ) {}

  create(data: AccountOpeningRecordDto): any {
    // Generate mock LeadRecord response
    const leadRecord = this.mockDataGenerator.generateFromSchema('LeadRecord', null);
    
    // Persist data in memory storage
    const storageKey = `lead:${leadRecord.leadId}`;
    this.fakeStorage.setItem(storageKey, leadRecord);
    
    // Also store by document for findByDocument lookup
    const documentKey = `lead:doc:${data.documentType}:${data.documentNumber}`;
    this.fakeStorage.setItem(documentKey, leadRecord);
    
    return leadRecord;
  }

  findById(id: string): any {
    // Try to get from storage first
    const storageKey = `lead:${id}`;
    const stored = this.fakeStorage.getItem(storageKey);
    
    if (stored) {
      return stored;
    }
    
    // If not found, generate new mock data
    return this.mockDataGenerator.generateFromSchema('LeadRecord', null);
  }

  findByDocument(documentType: string, documentNumber: string): any {
    // Try to get from storage first
    const documentKey = `lead:doc:${documentType}:${documentNumber}`;
    const stored = this.fakeStorage.getItem(documentKey);
    
    if (stored) {
      return stored;
    }
    
    // If not found, generate new mock data
    return this.mockDataGenerator.generateFromSchema('LeadRecord', null);
  }
}
