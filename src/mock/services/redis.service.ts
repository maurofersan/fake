import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { RedAccountRedisInputDTO, RedAccountDto } from '../dto/redis.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class RedisService {
  constructor(
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  /**
   * Creates or updates Redis account data
   * Merges new data with existing data if documentType and documentNumber already exist
   * Generates idTransaction if it doesn't exist
   */
  create(data: RedAccountRedisInputDTO): ApiResponse<RedAccountDto> {
    // Validate required fields for initial creation
    // if (!data.documentType || !data.documentNumber) {
    //   return this.apiResponseBuilder.error(
    //     'documentType y documentNumber son requeridos',
    //     400,
    //   );
    // }

    const documentKey = `red-account:doc:${data.documentType}:${data.documentNumber}`;

    // Get existing data if it exists
    const existingData = this.fakeStorage.getItem(
      documentKey,
    ) as RedAccountDto | null;

    // Initialize with existing data or create new structure
    const redAccount: RedAccountDto = existingData
      ? { ...existingData }
      : {
          idTransaction: randomUUID(),
          idScreen: null,
          minutsScreen: 0,
          fullName: null,
          lastName: null,
          motherLastName: null,
          firstName: null,
          birthDate: null,
          civilStatus: null,
          gender: null,
          streetType: null,
          streetName: null,
          houseNumber: null,
          department: null,
          district: null,
          province: null,
          documentType: data.documentType,
          documentNumber: data.documentNumber,
          phoneNumber: null,
          email: null,
          isPeruvian: null,
          acceptedPrivacyPolicy: null,
          acceptedTermsAndConditions: null,
          acceptedreadContract: null,
          productId: null,
          productName: null,
          accountTypeId: null,
          accountTypeName: null,
          currency: null,
          statusValOtp: null,
          statusValZtrus: null,
          pathImageDocumentFront: null,
          pathImageDocumentReverse: null,
          pathImagePersonSelfie: null,
        };

    // Merge new data with existing data (new data takes precedence)
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && data[key] !== null) {
        (redAccount as any)[key] = data[key];
      }
    });

    // Ensure idTransaction is set (should never be null after creation)
    if (!redAccount.idTransaction) {
      redAccount.idTransaction = randomUUID();
    }

    // Persist updated data
    this.fakeStorage.setItem(documentKey, redAccount);

    return this.apiResponseBuilder.created(
      redAccount,
      'Datos obtenidos con éxito',
    );
  }

  /**
   * Retrieves Redis account data by document type and number
   * Returns all saved data including idScreen to know which screen the user was on
   */
  findByDocument(
    documentType: string,
    documentNumber: string,
  ): ApiResponse<RedAccountDto> {
    const documentKey = `red-account:doc:${documentType}:${documentNumber}`;
    const stored = this.fakeStorage.getItem(
      documentKey,
    ) as RedAccountDto | null;

    if (!stored) {
      return this.apiResponseBuilder.error('Datos no encontrados', 404);
    }

    return this.apiResponseBuilder.success(stored, 'Datos obtenidos con éxito');
  }
}
