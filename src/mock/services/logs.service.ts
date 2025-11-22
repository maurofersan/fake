import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FakeStorageService } from '../utils/fake-storage.service';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { LogCreateRequestDto, DataGeneralLogResponse } from '../dto/logs.dto';
import { ApiResponse } from '../dto/common.dto';

/**
 * Service responsible for managing transaction logs
 * Handles three scenarios:
 * 1. Initial creation - creates a new transaction and returns transactionId
 * 2. Per input - updates traceability data for an existing transaction
 * 3. Final transaction - completes the transaction with all data
 */
@Injectable()
export class LogsService {
  constructor(
    private readonly fakeStorage: FakeStorageService,
    private readonly apiResponseBuilder: ApiResponseBuilderService,
  ) {}

  /**
   * Creates or updates a log entry
   * Determines the type of operation based on the fields present in the request
   */
  create(data: LogCreateRequestDto): ApiResponse<DataGeneralLogResponse> {
    // Determine the type of operation
    const isInitialCreation = this.isInitialCreation(data);
    const isPerInput = this.isPerInput(data);
    const isFinalTransaction = this.isFinalTransaction(data);

    if (isInitialCreation) {
      return this.handleInitialCreation(data);
    } else if (isPerInput) {
      return this.handlePerInput(data);
    } else if (isFinalTransaction) {
      return this.handleFinalTransaction(data);
    } else {
      return this.apiResponseBuilder.error(
        'Formato de solicitud no válido. Debe ser creación inicial, input por campo, o finalización de transacción',
        400,
      );
    }
  }

  /**
   * Checks if the request is an initial creation
   * Initial creation has: transactionStartDate
   * But NOT transactionId
   */
  private isInitialCreation(data: LogCreateRequestDto): boolean {
    return !!data.transactionStartDate && !data.transactionId;
  }

  /**
   * Checks if the request is a per-input update
   * Per input has: transactionId, traceabilityTransactionId, and traceability fields
   * But NOT all the transaction fields
   */
  private isPerInput(data: LogCreateRequestDto): boolean {
    return (
      !!data.transactionId &&
      !!data.traceabilityTransactionId &&
      !!data.traceabilityPageInternalName &&
      !!data.traceabilityElementName &&
      data.traceabilityIsValid !== undefined &&
      !this.hasAllTransactionFields(data)
    );
  }

  /**
   * Checks if the request is a final transaction completion
   * Final transaction has all transaction fields
   */
  private isFinalTransaction(data: LogCreateRequestDto): boolean {
    return (
      !!data.transactionId &&
      !!data.transactionSessionId &&
      this.hasAllTransactionFields(data)
    );
  }

  /**
   * Checks if the request has all the main transaction fields
   */
  private hasAllTransactionFields(data: LogCreateRequestDto): boolean {
    return (
      !!data.transactionDocumentType &&
      !!data.transactionDocumentNumber &&
      !!data.transactionStartDate &&
      data.transactionEndDate !== undefined
    );
  }

  /**
   * Handles initial creation of a transaction log
   * Generates a new transactionId and stores the initial data
   */
  private handleInitialCreation(
    data: LogCreateRequestDto,
  ): ApiResponse<DataGeneralLogResponse> {
    // Generate a new transactionId
    const transactionId = randomUUID();

    // Format transactionStartDate without timezone indicator
    const formattedStartDate = data.transactionStartDate
      ? this.formatDateWithoutTimezone(data.transactionStartDate)
      : null;

    // Create the log entry with all fields set to null except transactionId, transactionStartDate, and traceabilityTransactionId
    const logEntry: DataGeneralLogResponse = {
      transactionId,
      transactionSessionId: null,
      transactionDocumentType: null,
      transactionDocumentNumber: null,
      transactionPaternalLastname: null,
      transactionMaternalLastname: null,
      transactionFirstName: null,
      transactionFullName: null,
      transactionGender: null,
      transactionMaritalStatus: null,
      transactionBirthDate: null,
      transactionProductAcquired: null,
      transactionSubproductAcquired: null,
      transactionCurrency: null,
      transactionStartDate: formattedStartDate,
      transactionEndDate: null,
      transactionIpAddress: null,
      transactionBrowserUsed: null,
      transactionIncompleteReason: null,
      isActive: null,
      createdBy: null,
      createdAt: null,
      updatedBy: null,
      updatedAt: null,
      traceabilityTraceId: null,
      traceabilityTransactionId: transactionId, // Use the same transactionId for traceability
      traceabilityPageInternalName: null,
      traceabilityElementName: null,
      traceabilityEvaluatedValue: null,
      traceabilityIsValid: null,
      traceabilityErrorMessage: null,
    };

    // Store by transactionId
    const transactionKey = `log:transaction:${transactionId}`;
    this.fakeStorage.setItem(transactionKey, logEntry);

    return this.apiResponseBuilder.created(
      logEntry,
      'Transancción ejecutada con éxito',
    );
  }

  /**
   * Formats a date string to remove timezone indicator
   * Converts "2025-11-21T16:20:28.217Z" to "2025-11-21T16:20:28.217"
   */
  private formatDateWithoutTimezone(dateString: string): string {
    if (!dateString) return null;
    // Remove timezone indicator (Z at the end)
    return dateString.replace(/Z$/, '');
  }

  /**
   * Handles per-input updates
   * Updates traceability data for an existing transaction
   */
  private handlePerInput(
    data: LogCreateRequestDto,
  ): ApiResponse<DataGeneralLogResponse> {
    // Retrieve existing log entry
    const transactionKey = `log:transaction:${data.transactionId}`;
    const existingLog = this.fakeStorage.getItem(
      transactionKey,
    ) as DataGeneralLogResponse | null;

    if (!existingLog) {
      return this.apiResponseBuilder.error(
        `Transacción con ID ${data.transactionId} no encontrada`,
        404,
      );
    }

    // Update traceability data
    const updatedLog: DataGeneralLogResponse = {
      ...existingLog,
      traceabilityTransactionId: data.traceabilityTransactionId,
      traceabilityPageInternalName: data.traceabilityPageInternalName,
      traceabilityElementName: data.traceabilityElementName,
      traceabilityEvaluatedValue: data.traceabilityEvaluatedValue,
      traceabilityIsValid: data.traceabilityIsValid,
      traceabilityErrorMessage: data.traceabilityErrorMessage,
      updatedAt: new Date().toISOString(),
      updatedBy: data.updatedBy,
    };

    // Persist updated data
    this.fakeStorage.setItem(transactionKey, updatedLog);

    // Also update by sessionId if available
    if (updatedLog.transactionSessionId) {
      const sessionKey = `log:session:${updatedLog.transactionSessionId}`;
      this.fakeStorage.setItem(sessionKey, updatedLog);
    }

    return this.apiResponseBuilder.success(
      updatedLog,
      'Log de trazabilidad actualizado exitosamente',
    );
  }

  /**
   * Handles final transaction completion
   * Updates the transaction with all final data
   */
  private handleFinalTransaction(
    data: LogCreateRequestDto,
  ): ApiResponse<DataGeneralLogResponse> {
    // Retrieve existing log entry
    const transactionKey = `log:transaction:${data.transactionId}`;
    const existingLog = this.fakeStorage.getItem(
      transactionKey,
    ) as DataGeneralLogResponse | null;

    // Create or update the log entry with all transaction data
    const finalLog: DataGeneralLogResponse = {
      ...(existingLog || {}),
      transactionId: data.transactionId,
      transactionSessionId: data.transactionSessionId,
      transactionDocumentType: data.transactionDocumentType,
      transactionDocumentNumber: data.transactionDocumentNumber,
      transactionPaternalLastname: data.transactionPaternalLastname,
      transactionMaternalLastname: data.transactionMaternalLastname,
      transactionFirstName: data.transactionFirstName,
      transactionFullName: data.transactionFullName,
      transactionGender: data.transactionGender,
      transactionMaritalStatus: data.transactionMaritalStatus,
      transactionBirthDate: data.transactionBirthDate,
      transactionProductAcquired: data.transactionProductAcquired,
      transactionSubproductAcquired: data.transactionSubproductAcquired,
      transactionCurrency: data.transactionCurrency,
      transactionStartDate: data.transactionStartDate,
      transactionEndDate: data.transactionEndDate,
      transactionIpAddress: data.transactionIpAddress,
      transactionBrowserUsed: data.transactionBrowserUsed,
      transactionIncompleteReason: data.transactionIncompleteReason,
      isActive: data.isActive !== undefined ? data.isActive : true,
      updatedAt: data.updatedAt || new Date().toISOString(),
      updatedBy: data.updatedBy,
      // Preserve traceability data if it exists
      traceabilityTraceId:
        data.traceabilityTraceId || existingLog?.traceabilityTraceId,
      traceabilityTransactionId:
        data.traceabilityTransactionId ||
        existingLog?.traceabilityTransactionId,
      traceabilityPageInternalName:
        data.traceabilityPageInternalName ||
        existingLog?.traceabilityPageInternalName,
      traceabilityElementName:
        data.traceabilityElementName || existingLog?.traceabilityElementName,
      traceabilityEvaluatedValue:
        data.traceabilityEvaluatedValue ||
        existingLog?.traceabilityEvaluatedValue,
      traceabilityIsValid:
        data.traceabilityIsValid !== undefined
          ? data.traceabilityIsValid
          : existingLog?.traceabilityIsValid,
      traceabilityErrorMessage:
        data.traceabilityErrorMessage || existingLog?.traceabilityErrorMessage,
    };

    // Ensure createdAt and createdBy are set if this is a new entry
    if (!existingLog) {
      finalLog.createdAt = data.createdAt || new Date().toISOString();
      finalLog.createdBy = data.createdBy;
    }

    // Persist final data
    this.fakeStorage.setItem(transactionKey, finalLog);

    // Also update by sessionId
    if (finalLog.transactionSessionId) {
      const sessionKey = `log:session:${finalLog.transactionSessionId}`;
      this.fakeStorage.setItem(sessionKey, finalLog);
    }

    return this.apiResponseBuilder.success(
      finalLog,
      'Transacción completada exitosamente',
    );
  }
}
