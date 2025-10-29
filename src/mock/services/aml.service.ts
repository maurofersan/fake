import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { AmlRequestDto } from '../dto/aml.dto';

@Injectable()
export class AmlService {
  constructor(private readonly mockDataGenerator: MockDataGeneratorService) {}

  verify(data: AmlRequestDto): string {
    // Mock AML verification - returns a simple string response
    // In real scenario, this would be "OK" or "MATCH" or similar
    return 'OK';
  }
}
