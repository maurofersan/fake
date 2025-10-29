/**
 * DTOs for Account Opening endpoints
 * Based on swagger.json schemas
 */

export class AccountOpeningRecordDto {
  accountOpeningId?: string;
  productId?: string;
  productName?: string;
  subproductId?: string;
  subproductName?: string;
  documentType?: string;
  documentNumber?: string;
  openingDate?: string; // ISO date-time string
  currency?: string;
  status?: string;
  createdBy?: string;
  updatedAt?: string; // ISO date-time string
  updatedBy?: string;
  partnerStoreId?: string;
  partnerId?: string;
}
