/**
 * DTOs for Settings endpoints
 * Based on swagger-settings.json schemas
 */

export class DepartmentResponseDto {
  id: string; // UUID
  name: string;
}

export class ProvinceResponseDto {
  id: string; // UUID
  name: string;
}

export class DistrictResponseDto {
  id: string; // UUID
  name: string;
}

export class TypeAccountRecordDto {
  productId: string; // UUID
  productName: string;
  subProductId: string; // UUID
  subProductName: string;
}

export class DescribeCatalogRecordDto {
  describeCatalogId: string;
  describeCatalogCode: string;
  describeCatalogDescription: string;
}

export class ApiResponseListDescribeCatalogRecordDto {
  success: boolean;
  status: number;
  message: string;
  data: DescribeCatalogRecordDto[];
}

export class GluonErrorDto {
  code: string;
  description: string;
  level: string;
  message: string;
}

export class ErrorModelGatewayDto {
  httpCode: number;
  httpMessage: string;
  moreInformation: string;
}
