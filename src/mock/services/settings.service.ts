import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';

@Injectable()
export class SettingsService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
  ) {}

  sayHello(): string {
    return 'Hello world!';
  }

  findAllDepartments(): any[] {
    // Try to get from storage first
    const storageKey = 'settings:departments';
    const stored = this.fakeStorage.getItem(storageKey);
    
    if (stored) {
      return stored;
    }
    
    // Generate array of departments (typically 5-10 items for mock)
    const departments = this.mockDataGenerator.generateArray('DepartmentResponse', 8);
    
    // Persist for future requests
    this.fakeStorage.setItem(storageKey, departments);
    
    return departments;
  }

  findProvincesByDepartment(departmentId: string): any[] {
    // Try to get from storage first
    const storageKey = `settings:provinces:${departmentId}`;
    const stored = this.fakeStorage.getItem(storageKey);
    
    if (stored) {
      return stored;
    }
    
    // Generate array of provinces for a department
    const provinces = this.mockDataGenerator.generateArray('ProvinceResponse', 5);
    
    // Persist for future requests
    this.fakeStorage.setItem(storageKey, provinces);
    
    return provinces;
  }

  findDistrictsByProvince(provinceId: string): any[] {
    // Try to get from storage first
    const storageKey = `settings:districts:${provinceId}`;
    const stored = this.fakeStorage.getItem(storageKey);
    
    if (stored) {
      return stored;
    }
    
    // Generate array of districts for a province
    const districts = this.mockDataGenerator.generateArray('DistrictResponse', 8);
    
    // Persist for future requests
    this.fakeStorage.setItem(storageKey, districts);
    
    return districts;
  }
}
