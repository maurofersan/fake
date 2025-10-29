import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';

@Injectable()
export class SettingsService {
  constructor(private readonly mockDataGenerator: MockDataGeneratorService) {}

  sayHello(): string {
    return 'Hello world!';
  }

  findAllDepartments(): any[] {
    // Generate array of departments (typically 5-10 items for mock)
    return this.mockDataGenerator.generateArray('DepartmentResponse', 8);
  }

  findProvincesByDepartment(departmentId: string): any[] {
    // Generate array of provinces for a department
    return this.mockDataGenerator.generateArray('ProvinceResponse', 5);
  }

  findDistrictsByProvince(provinceId: string): any[] {
    // Generate array of districts for a province
    return this.mockDataGenerator.generateArray('DistrictResponse', 8);
  }
}
