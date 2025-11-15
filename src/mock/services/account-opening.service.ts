import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { AccountOpeningRecordDto } from '../dto/account-opening.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class AccountOpeningService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  create(data: AccountOpeningRecordDto): ApiResponse<any> {
    // Generate mock LeadRecord response
    const leadRecord = this.mockDataGenerator.generateFromSchema(
      'LeadRecord',
      null,
    );

    // Persist data in memory storage
    const storageKey = `lead:${leadRecord.leadId}`;
    this.fakeStorage.setItem(storageKey, leadRecord);

    // Also store by document for findByDocument lookup
    const documentKey = `lead:doc:${data.documentType}:${data.documentNumber}`;
    this.fakeStorage.setItem(documentKey, leadRecord);

    return this.apiResponseBuilder.created(
      leadRecord,
      'Apertura de cuenta creada exitosamente',
    );
  }

  findById(id: string): ApiResponse<any> {
    // Try to get from storage first
    const storageKey = `lead:${id}`;
    const stored = this.fakeStorage.getItem(storageKey);

    let leadRecord: any;

    if (stored) {
      leadRecord = stored;
    } else {
      // If not found, generate new mock data
      leadRecord = this.mockDataGenerator.generateFromSchema(
        'LeadRecord',
        null,
      );
    }

    return this.apiResponseBuilder.success(
      leadRecord,
      'Apertura de cuenta obtenida correctamente',
    );
  }

  findByDocument(
    documentType: string,
    documentNumber: string,
  ): ApiResponse<any> {
    // Try to get from storage first
    const documentKey = `lead:doc:${documentType}:${documentNumber}`;
    const stored = this.fakeStorage.getItem(documentKey);

    let leadRecord: any;

    if (stored) {
      leadRecord = stored;
    } else {
      // If not found, generate new mock data
      leadRecord = this.mockDataGenerator.generateFromSchema(
        'LeadRecord',
        null,
      );
    }

    return this.apiResponseBuilder.success(
      leadRecord,
      'Apertura de cuenta obtenida correctamente',
    );
  }
}
