import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { RedAccountEntityDto } from '../dto/redis.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class RedisService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  create(data: RedAccountEntityDto): ApiResponse<any> {
    // Generate mock RedAccountEntity response
    const redAccount = this.mockDataGenerator.generateFromSchema(
      'RedAccountEntity',
      null,
    );

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

    return this.apiResponseBuilder.success(
      redAccount,
      'Cuenta Redis creada exitosamente',
    );
  }

  findByDocument(
    documentType: string,
    documentNumber: string,
  ): ApiResponse<any> {
    // Try to get from storage first
    const documentKey = `red-account:doc:${documentType}:${documentNumber}`;
    const stored = this.fakeStorage.getItem(documentKey);

    let redAccount: any;

    if (stored) {
      redAccount = stored;
    } else {
      // If not found, generate new mock data
      redAccount = this.mockDataGenerator.generateFromSchema(
        'RedAccountEntity',
        null,
      );
    }

    return this.apiResponseBuilder.success(
      redAccount,
      'Cuenta Redis obtenida correctamente',
    );
  }
}
