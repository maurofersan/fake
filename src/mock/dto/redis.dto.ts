/**
 * DTOs for Redis endpoints
 * Based on swagger.json schemas
 */

export class RedAccountEntityDto {
  accountId?: number;
  fullName?: string;
  lastName?: string;
  motherLastName?: string;
  firstName?: string;
  birthDate?: string;
  civilStatus?: string;
  gender?: string;
  streetType?: string;
  streetName?: string;
  houseNumber?: string;
  department?: string;
  district?: string;
  documentType?: string;
  documentNumber?: string;
  phoneNumber?: string;
  email?: string;
  isPeruvian?: string;
  acceptedPrivacyPolicy?: string;
  acceptedTermsAndConditions?: string;
  accountTypeId?: string;
  accountTypeName?: string;
  currency?: string;
}
