import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { AmlRequestDto } from '../dto/aml.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class AmlService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  verify(data: AmlRequestDto): ApiResponse<string> {
    // Create a unique key based on the verification data
    const verificationKey = `aml:verify:${data.dni}:${data.name}:${data.dateBirth}`;

    // Try to get from storage first (persistent verification result)
    const stored = this.fakeStorage.getItem(verificationKey);

    let result: string;

    if (stored) {
      result = stored;
    } else {
      // Mock AML verification - returns a simple string response
      // In real scenario, this would be "OK" or "MATCH" or similar
      result = 'OK';

      // Persist the verification result
      this.fakeStorage.setItem(verificationKey, result);
    }

    return this.apiResponseBuilder.success(
      result,
      'Verificación AML completada exitosamente',
    );
  }
}
