import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { RedAccountEntityDto } from '../dto/redis.dto';

@Injectable()
export class RedisService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
  ) {}

  create(data: RedAccountEntityDto): any {
    // Generate mock RedAccountEntity response
    const redAccount = this.mockDataGenerator.generateFromSchema('RedAccountEntity', null);
    
    // Merge with provided data from request body (prioritize user data over mock)
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && data[key] !== null) {
        redAccount[key] = data[key];
      }
    });
    
    // Persist data in memory storage
    const storageKey = `red-account:${redAccount.accountId}`;
    this.fakeStorage.setItem(storageKey, redAccount);
    
    // Also store by document for findByDocument lookup
    if (redAccount.documentType && redAccount.documentNumber) {
      const documentKey = `red-account:doc:${redAccount.documentType}:${redAccount.documentNumber}`;
      this.fakeStorage.setItem(documentKey, redAccount);
    }
    
    return redAccount;
  }

  findByDocument(documentType: string, documentNumber: string): any {
    // Try to get from storage first
    const documentKey = `red-account:doc:${documentType}:${documentNumber}`;
    const stored = this.fakeStorage.getItem(documentKey);
    
    if (stored) {
      return stored;
    }
    
    // If not found, generate new mock data
    return this.mockDataGenerator.generateFromSchema('RedAccountEntity', null);
  }
}
