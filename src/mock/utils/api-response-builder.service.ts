import { Injectable, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '../dto/common.dto';

/**
 * Service responsible for building standardized API responses
 * Follows Single Responsibility Principle (SRP)
 */
@Injectable()
export class ApiResponseBuilderService {
  /**
   * Builds a successful API response
   * @param data - The data to wrap in the response
   * @param message - Optional success message (default: 'Operación exitosa')
   * @param status - Optional HTTP status code (default: 200)
   */
  success<T>(
    data: T,
    message: string = 'Operación exitosa',
    status: number = HttpStatus.OK,
  ): ApiResponse<T> {
    return {
      success: true,
      status,
      message,
      data,
    };
  }

  /**
   * Builds a created API response (201)
   * @param data - The data to wrap in the response
   * @param message - Optional success message (default: 'Recurso creado exitosamente')
   */
  created<T>(
    data: T,
    message: string = 'Recurso creado exitosamente',
  ): ApiResponse<T> {
    return this.success(data, message, HttpStatus.CREATED);
  }

  /**
   * Builds an error API response
   * @param message - Error message
   * @param status - HTTP status code (default: 500)
   */
  error(
    message: string,
    status: number = HttpStatus.INTERNAL_SERVER_ERROR,
  ): ApiResponse<null> {
    return {
      success: false,
      status,
      message,
      data: null,
    };
  }
}
