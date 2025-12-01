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
import { PERU_DEPARTMENTS } from '../constants/peru-locations.constants';

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
      // Use real Peru departments data
      departments = PERU_DEPARTMENTS.map((dept) => ({
        id: dept.id,
        name: dept.name,
      }));

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
      // Find the department in Peru data
      const department = PERU_DEPARTMENTS.find(
        (dept) => dept.id === departmentId,
      );

      if (department) {
        // Use real provinces for the department
        provinces = department.provinces.map((prov) => ({
          id: prov.id,
          name: prov.name,
        }));
      } else {
        // Fallback: return empty array if department not found
        provinces = [];
      }

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
      // Find the province in Peru data
      let province = null;
      for (const department of PERU_DEPARTMENTS) {
        province = department.provinces.find((prov) => prov.id === provinceId);
        if (province) break;
      }

      if (province) {
        // Use real districts for the province
        districts = province.districts.map((dist) => ({
          id: dist.id,
          name: dist.name,
        }));
      } else {
        // Fallback: return empty array if province not found
        districts = [];
      }

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
      gender: [
        {
          describeCatalogId: '8ad30a61-2a3b-4c99-aaa4-ac1b507b2c8e',
          describeCatalogCode: 'Masculino',
          describeCatalogDescription: 'Descripción de Masculino (Editable)',
        },
        {
          describeCatalogId: '277bd012-197c-4d83-af0f-f250f37c1668',
          describeCatalogCode: 'Femenino',
          describeCatalogDescription: 'Descripción de Femenino (Editable)',
        },
        {
          describeCatalogId: 'b8b00c0e-b6cf-45f4-8f7e-3a6720aa7aa1',
          describeCatalogCode: 'No Especificado',
          describeCatalogDescription:
            'Descripción de No Especificado (Editable)',
        },
      ],
      road_type: [
        {
          describeCatalogId: '1f2c47d3-1234-4a12-9f71-987654321001',
          describeCatalogCode: 'Avenida',
          describeCatalogDescription: 'Descripción de Avenida (Editable)',
        },
        {
          describeCatalogId: '2b3d58e4-2234-4c44-8f02-987654321002',
          describeCatalogCode: 'Calle',
          describeCatalogDescription: 'Descripción de Calle (Editable)',
        },
        {
          describeCatalogId: '3c4e69f5-3234-4f55-9c13-987654321003',
          describeCatalogCode: 'Jirón',
          describeCatalogDescription: 'Descripción de Jirón (Editable)',
        },
        {
          describeCatalogId: '4d5f70g6-4234-4a66-8d24-987654321004',
          describeCatalogCode: 'Pasaje',
          describeCatalogDescription: 'Descripción de Pasaje (Editable)',
        },
        {
          describeCatalogId: '5e6h81i7-5234-4b77-9e35-987654321005',
          describeCatalogCode: 'Carretera',
          describeCatalogDescription: 'Descripción de Carretera (Editable)',
        },
        {
          describeCatalogId: '6f7i92j8-6234-4c88-af46-987654321006',
          describeCatalogCode: 'Autopista',
          describeCatalogDescription: 'Descripción de Autopista (Editable)',
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
