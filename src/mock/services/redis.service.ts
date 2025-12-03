import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { RedAccountRedisInputDTO, RedAccountDto } from '../dto/redis.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class RedisService {
  // Flag para simular errores del servidor (500, 502, 503, 504)
  // Cambiar a true para habilitar la simulación de errores
  private readonly SIMULATE_SERVER_ERRORS = false;

  // Tipo de error a simular: '500' | '502' | '503' | '504' | null
  private readonly ERROR_TYPE: '500' | '502' | '503' | '504' | null = '500';

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
    // Simular errores del servidor si está habilitado
    if (this.SIMULATE_SERVER_ERRORS && this.ERROR_TYPE) {
      const errorMessages = {
        '500': 'Error interno del servidor',
        '502': 'Bad Gateway - El servidor recibió una respuesta inválida',
        '503':
          'Servicio no disponible - El servidor no puede procesar la solicitud',
        '504': 'Gateway Timeout - El servidor no respondió a tiempo',
      };

      const statusCode = parseInt(this.ERROR_TYPE) as HttpStatus;
      const errorResponse = this.apiResponseBuilder.error(
        errorMessages[this.ERROR_TYPE],
        statusCode,
      );

      // Lanzar HttpException para que Angular lo capture en catchError
      // El body de la excepción será el formato ApiResponse estándar
      throw new HttpException(errorResponse, statusCode);
    }

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
