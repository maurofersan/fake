import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import {
  DepartmentResponseDto,
  ProvinceResponseDto,
  DistrictResponseDto,
  TypeAccountRecordDto,
  DescribeCatalogRecordDto,
} from '../dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
  ) {}

  sayHello(): string {
    return 'Hello world!';
  }

  findAllDepartments(): DepartmentResponseDto[] {
    // Try to get from storage first
    const storageKey = 'settings:departments';
    const stored = this.fakeStorage.getItem(storageKey);

    if (stored) {
      return stored;
    }

    // Generate array of departments (typically 5-10 items for mock)
    const departments = this.mockDataGenerator.generateArray(
      'DepartmentResponse',
      8,
    );

    // Persist for future requests
    this.fakeStorage.setItem(storageKey, departments);

    return departments;
  }

  findProvincesByDepartment(departmentId: string): ProvinceResponseDto[] {
    // Try to get from storage first
    const storageKey = `settings:provinces:${departmentId}`;
    const stored = this.fakeStorage.getItem(storageKey);

    if (stored) {
      return stored;
    }

    // Generate array of provinces for a department
    const provinces = this.mockDataGenerator.generateArray(
      'ProvinceResponse',
      5,
    );

    // Persist for future requests
    this.fakeStorage.setItem(storageKey, provinces);

    return provinces;
  }

  findDistrictsByProvince(provinceId: string): DistrictResponseDto[] {
    // Try to get from storage first
    const storageKey = `settings:districts:${provinceId}`;
    const stored = this.fakeStorage.getItem(storageKey);

    if (stored) {
      return stored;
    }

    // Generate array of districts for a province
    const districts = this.mockDataGenerator.generateArray(
      'DistrictResponse',
      8,
    );

    // Persist for future requests
    this.fakeStorage.setItem(storageKey, districts);

    return districts;
  }

  listTypeAccounts(): TypeAccountRecordDto[] {
    // Try to get from storage first
    const storageKey = 'settings:catalog:typeAccounts';
    const stored = this.fakeStorage.getItem(storageKey);

    if (stored) {
      return stored;
    }

    // Generate array of type accounts (typically 3-5 items for mock)
    const typeAccounts = this.mockDataGenerator.generateArray(
      'TypeAccountRecord',
      5,
    );

    // Persist for future requests
    this.fakeStorage.setItem(storageKey, typeAccounts);

    return typeAccounts;
  }

  findDescribeCatalogByType(type: string): DescribeCatalogRecordDto[] {
    // Try to get from storage first
    const storageKey = `settings:catalog:describe:${type}`;
    const stored = this.fakeStorage.getItem(storageKey);

    if (stored) {
      return stored;
    }

    // Generate array of catalog records (typically 3-8 items depending on type)
    const count =
      type === 'document_type' ? 4 : type === 'marital_status' ? 5 : 3;
    const catalogRecords = this.mockDataGenerator.generateArray(
      'DescribeCatalogRecord',
      count,
    );

    // Persist for future requests
    this.fakeStorage.setItem(storageKey, catalogRecords);

    return catalogRecords;
  }
}
