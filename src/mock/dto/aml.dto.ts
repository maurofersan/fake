/**
 * DTOs for AML endpoints
 * Based on swagger-aml.json schemas
 */

export class AmlRequestDto {
  /**
   * @minLength 1
   */
  citizenship: string;

  /**
   * @minLength 1
   */
  name: string;

  /**
   * @pattern Entity|Person
   */
  type?: string;

  /**
   * @minLength 1
   * @pattern \d{2}/\d{2}/\d{4}
   */
  dateBirth: string;

  /**
   * @minLength 1
   * @pattern \d{8}
   */
  dni: string;
}
