import { Injectable } from '@nestjs/common';
import { MockDataGeneratorService } from '../utils/mock-data-generator.service';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import {
  DepartmentResponseDto,
  ProvinceResponseDto,
  DistrictResponseDto,
  DescribeCatalogRecordDto,
  TypeAccountRecordDto,
} from '../dto/settings.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class SettingsService {
  constructor(
    private readonly mockDataGenerator: MockDataGeneratorService,
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  sayHello(): ApiResponse<string> {
    return this.apiResponseBuilder.success('Hello world!', 'Saludo exitoso');
  }

  findAllDepartments(): ApiResponse<DepartmentResponseDto[]> {
    // Try to get from storage first
    const storageKey = 'settings:departments';
    const stored = this.fakeStorage.getItem(storageKey);

    let departments: DepartmentResponseDto[];

    if (stored) {
      departments = stored;
    } else {
      // Generate array of departments (typically 5-10 items for mock)
      departments = this.mockDataGenerator.generateArray(
        'DepartmentResponse',
        8,
      );

      // Persist for future requests
      this.fakeStorage.setItem(storageKey, departments);
    }

    return this.apiResponseBuilder.success(
      departments,
      'Departamentos obtenidos correctamente',
    );
  }

  findProvincesByDepartment(
    departmentId: string,
  ): ApiResponse<ProvinceResponseDto[]> {
    // Try to get from storage first
    const storageKey = `settings:provinces:${departmentId}`;
    const stored = this.fakeStorage.getItem(storageKey);

    let provinces: ProvinceResponseDto[];

    if (stored) {
      provinces = stored;
    } else {
      // Generate array of provinces for a department
      provinces = this.mockDataGenerator.generateArray('ProvinceResponse', 5);

      // Persist for future requests
      this.fakeStorage.setItem(storageKey, provinces);
    }

    return this.apiResponseBuilder.success(
      provinces,
      'Provincias obtenidas correctamente',
    );
  }

  findDistrictsByProvince(
    provinceId: string,
  ): ApiResponse<DistrictResponseDto[]> {
    // Try to get from storage first
    const storageKey = `settings:districts:${provinceId}`;
    const stored = this.fakeStorage.getItem(storageKey);

    let districts: DistrictResponseDto[];

    if (stored) {
      districts = stored;
    } else {
      // Generate array of districts for a province
      districts = this.mockDataGenerator.generateArray('DistrictResponse', 8);

      // Persist for future requests
      this.fakeStorage.setItem(storageKey, districts);
    }

    return this.apiResponseBuilder.success(
      districts,
      'Distritos obtenidos correctamente',
    );
  }

  listTypeAccounts(): ApiResponse<TypeAccountRecordDto[]> {
    // Try to get from storage first
    const storageKey = 'settings:catalog:typeAccounts';
    const stored = this.fakeStorage.getItem(storageKey);

    let typeAccounts: TypeAccountRecordDto[];

    if (stored) {
      typeAccounts = stored;
    } else {
      // Fixed response with exactly two accounts as specified
      typeAccounts = [
        {
          productId: '6b19fa91-b703-45e4-96e8-b18c4977dd25',
          productName: 'Apertura de Cuenta',
          subProductId: '849676f6-c5f2-414c-9e74-1ac799ab61db',
          subProductName: 'Cuenta Imparable',
        },
        {
          productId: '6b19fa91-b703-45e4-96e8-b18c4977dd25',
          productName: 'Apertura de Cuenta',
          subProductId: '98695cb1-15fa-4ee2-b66e-276d143d5385',
          subProductName: 'Cuenta Libre',
        },
      ];

      // Persist for future requests
      this.fakeStorage.setItem(storageKey, typeAccounts);
    }

    return this.apiResponseBuilder.success(
      typeAccounts,
      'Lista obtenida correctamente',
    );
  }

  findDescribeCatalogByType(
    type: string,
  ): ApiResponse<DescribeCatalogRecordDto[]> {
    // Try to get from storage first
    const storageKey = `settings:catalog:describe:${type}`;
    const stored = this.fakeStorage.getItem(storageKey);

    let catalogData: DescribeCatalogRecordDto[];

    if (stored) {
      catalogData = stored;
    } else {
      // Get catalog data based on type
      catalogData = this.getCatalogDataByType(type);

      // Persist for future requests
      this.fakeStorage.setItem(storageKey, catalogData);
    }

    return this.apiResponseBuilder.success(
      catalogData,
      'Catálogo obtenido correctamente',
    );
  }

  /**
   * Get catalog data based on type
   * This method can be extended with more catalog types as needed
   */
  private getCatalogDataByType(type: string): DescribeCatalogRecordDto[] {
    const catalogMap: Record<string, DescribeCatalogRecordDto[]> = {
      marital_status: [
        {
          describeCatalogId: '75b58ddf-78e0-44d1-b0f2-e574cef0a810',
          describeCatalogCode: 'Soltero(a)',
          describeCatalogDescription: 'Descripción de Soltero(a) (Editable)',
        },
        {
          describeCatalogId: '266fc698-a980-4f8a-8e1b-5a0688a30893',
          describeCatalogCode: 'Casado(a)',
          describeCatalogDescription: 'Descripción de Casado(a) (Editable)',
        },
        {
          describeCatalogId: '3c9fb603-4cf1-4f4e-816a-98d54e93bbe9',
          describeCatalogCode: 'Conviviente',
          describeCatalogDescription: 'Descripción de Conviviente (Editable)',
        },
        {
          describeCatalogId: 'e20973f4-8a23-4d36-bae1-b8f5d43dd7df',
          describeCatalogCode: 'Viudo(a)',
          describeCatalogDescription: 'Descripción de Viudo(a) (Editable)',
        },
        {
          describeCatalogId: '30ade2a9-f291-4862-a68e-2146bec744cb',
          describeCatalogCode: 'Divorciado(a)',
          describeCatalogDescription: 'Descripción de Divorciado(a) (Editable)',
        },
        {
          describeCatalogId: 'ff4d3971-8613-454d-bbf1-07523bed2c61',
          describeCatalogCode: 'No Especificado',
          describeCatalogDescription:
            'Descripción de No Especificado (Editable)',
        },
      ],
      currency_type: [
        {
          describeCatalogId: 'cc2fee53-4e51-488a-ad92-9c9c3168ebd0',
          describeCatalogCode: 'Soles (S/.)',
          describeCatalogDescription: 'Descripción de Soles (S/.) (Editable)',
        },
        {
          describeCatalogId: '010a63b1-8c19-45c6-9207-6b8d4576ae53',
          describeCatalogCode: 'Dólares (US$)',
          describeCatalogDescription: 'Descripción de Dólares (US$) (Editable)',
        },
        {
          describeCatalogId: 'a7c90db3-0372-485d-b8d5-adedafdb99b4',
          describeCatalogCode: 'Euros (EUR)',
          describeCatalogDescription: 'Descripción de Euros (EUR) (Editable)',
        },
      ],
    };

    // Return specific catalog data if exists, otherwise generate mock data
    if (catalogMap[type]) {
      return catalogMap[type];
    }

    // Fallback: generate mock data for unknown types
    const count =
      type === 'document_type' ? 4 : type === 'marital_status' ? 5 : 3;
    return this.mockDataGenerator.generateArray('DescribeCatalogRecord', count);
  }
}
