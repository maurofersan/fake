import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class MockDataGeneratorService {
  /**
   * Generate mock data based on OpenAPI schema
   */
  generateFromSchema(schemaName: string, schema: any): any {
    switch (schemaName) {
      case 'LeadRecord':
        return this.generateLeadRecord();
      case 'LeadProductRecord':
        return this.generateLeadProductRecord();
      case 'LoanRecord':
        return this.generateLoanRecord();
      case 'RedAccountEntity':
        return this.generateRedAccountEntity();
      case 'AccountOpeningRecord':
        return this.generateAccountOpeningRecord();
      case 'ApiResponseRedAccountEntity':
        return this.generateApiResponseRedAccountEntity();
      case 'ApiResponseAccountOpeningRecord':
        return this.generateApiResponseAccountOpeningRecord();
      case 'DepartmentResponse':
        return this.generateDepartmentResponse();
      case 'ProvinceResponse':
        return this.generateProvinceResponse();
      case 'DistrictResponse':
        return this.generateDistrictResponse();
      case 'ErrorModelGateway':
        return this.generateErrorModelGateway();
      case 'GluonError':
        return this.generateGluonError();
      case 'TypeAccountRecord':
        return this.generateTypeAccountRecord();
      case 'DescribeCatalogRecord':
        return this.generateDescribeCatalogRecord();
      case 'ApiResponseListDescribeCatalogRecord':
        return this.generateApiResponseListDescribeCatalogRecord();
      default:
        return this.generateFromProperties(schema?.properties || {});
    }
  }

  private generateLeadRecord(): any {
    return {
      leadId: faker.number.int({ min: 1, max: 999999 }),
      documentType: 'DNI',
      documentNumber: faker.string.numeric(8),
      firstLastname: faker.person.lastName(),
      secondLastname: faker.person.lastName(),
      fullName: faker.person.fullName(),
      birthDate: faker.date
        .birthdate({ min: 18, max: 80, mode: 'age' })
        .toISOString()
        .split('T')[0],
      phoneNumber: '9' + faker.string.numeric(8),
      maritalStatus: faker.helpers.arrayElement([
        'Soltero',
        'Casado',
        'Divorciado',
        'Viudo',
      ]),
      gender: faker.helpers.arrayElement(['M', 'F']),
      homeAddress: faker.location.streetAddress(),
      companyRuc: faker.string.numeric(11),
      companyName: faker.company.name(),
      companyPhone: '9' + faker.string.numeric(8),
      companyAddress: faker.location.streetAddress(),
      campaignStartDate: faker.date.past().toISOString().split('T')[0],
      income: parseFloat(
        faker.finance.amount({ min: 1000, max: 10000, dec: 2 }),
      ),
      bureauScore: faker.number.int({ min: 0, max: 900 }),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      createdBy: faker.internet.userName(),
      updatedBy: faker.internet.userName(),
      isActive: faker.datatype.boolean(),
      leadProductRecord: this.generateLeadProductRecord(),
      loanLeadRecord: this.generateLoanRecord(),
    };
  }

  private generateLeadProductRecord(): any {
    return {
      leadId: faker.number.int({ min: 1, max: 999999 }),
      productCode: faker.string.alphanumeric(6).toUpperCase(),
      subproductCode: faker.string.alphanumeric(6).toUpperCase(),
      evaluationType: faker.helpers.arrayElement(['AUTO', 'MANUAL']),
      strategyColorCode: faker.helpers.arrayElement([
        'VERDE',
        'AMARILLO',
        'ROJO',
      ]),
      approvedAmount: parseFloat(
        faker.finance.amount({ min: 1000, max: 50000, dec: 2 }),
      ),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      createdBy: faker.internet.userName(),
      updatedBy: faker.internet.userName(),
    };
  }

  private generateLoanRecord(): any {
    return {
      loanId: faker.number.int({ min: 1, max: 999999 }),
      leadId: faker.number.int({ min: 1, max: 999999 }),
      approvedAmount: parseFloat(
        faker.finance.amount({ min: 1000, max: 50000, dec: 2 }),
      ),
      disbursedAmount: parseFloat(
        faker.finance.amount({ min: 1000, max: 50000, dec: 2 }),
      ),
      interestRate: parseFloat(
        faker.finance.amount({ min: 5, max: 25, dec: 2 }),
      ),
      termMonths: faker.number.int({ min: 6, max: 60 }),
      startDate: faker.date.future().toISOString().split('T')[0],
      endDate: faker.date.future({ years: 5 }).toISOString().split('T')[0],
      loanStatus: faker.helpers.arrayElement([
        'APROBADO',
        'PENDIENTE',
        'RECHAZADO',
        'CANCELADO',
      ]),
      contractPath: `/contracts/${faker.string.uuid()}.pdf`,
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      createdBy: faker.internet.userName(),
      updatedBy: faker.internet.userName(),
      isActive: faker.datatype.boolean(),
    };
  }

  private generateRedAccountEntity(): any {
    return {
      accountId: faker.number.int({ min: 1, max: 999999 }),
      fullName: faker.person.fullName(),
      lastName: faker.person.lastName(),
      motherLastName: faker.person.lastName(),
      firstName: faker.person.firstName(),
      birthDate: faker.date
        .birthdate({ min: 18, max: 80, mode: 'age' })
        .toISOString(),
      civilStatus: faker.helpers.arrayElement([
        'Soltero',
        'Casado',
        'Divorciado',
        'Viudo',
      ]),
      gender: faker.helpers.arrayElement(['M', 'F']),
      streetType: faker.helpers.arrayElement(['AV', 'JR', 'CL', 'PSJ']),
      streetName: faker.location.street(),
      houseNumber: faker.location.buildingNumber(),
      department: faker.location.state(),
      district: faker.location.city(),
      documentType: 'DNI',
      documentNumber: faker.string.numeric(8),
      phoneNumber: '9' + faker.string.numeric(8),
      email: faker.internet.email(),
      isPeruvian: 'S',
      acceptedPrivacyPolicy: 'S',
      acceptedTermsAndConditions: 'S',
      accountTypeId: faker.string.uuid(),
      accountTypeName: faker.helpers.arrayElement([
        'Cuenta Corriente',
        'Cuenta de Ahorros',
      ]),
      currency: 'PEN',
    };
  }

  private generateAccountOpeningRecord(): any {
    return {
      accountOpeningId: faker.string.uuid(),
      productId: faker.string.uuid(),
      productName: faker.helpers.arrayElement([
        'Cuenta Corriente',
        'Cuenta de Ahorros',
      ]),
      subproductId: faker.string.uuid(),
      subproductName: faker.helpers.arrayElement([
        'Ahorro Regular',
        'Ahorro Plus',
      ]),
      documentType: 'DNI',
      documentNumber: faker.string.numeric(8),
      openingDate: faker.date.recent().toISOString(),
      currency: 'PEN',
      status: faker.helpers.arrayElement([
        'PENDIENTE',
        'APROBADO',
        'RECHAZADO',
        'COMPLETADO',
      ]),
      createdBy: faker.internet.userName(),
      updatedAt: faker.date.recent().toISOString(),
      updatedBy: faker.internet.userName(),
      partnerStoreId: faker.string.uuid(),
      partnerId: faker.string.uuid(),
    };
  }

  private generateApiResponseRedAccountEntity(): any {
    return {
      success: false,
      status: 404,
      message: 'Datos no encontrados',
      data: null,
    };
  }

  private generateApiResponseAccountOpeningRecord(): any {
    return {
      success: false,
      status: 404,
      message: 'Apertura de cuenta no encontrada',
      data: null,
    };
  }

  private generateDepartmentResponse(): any {
    const departments = [
      'Amazonas',
      'Ancash',
      'Apurímac',
      'Arequipa',
      'Ayacucho',
      'Cajamarca',
      'Callao',
      'Cusco',
      'Huancavelica',
      'Huánuco',
      'Ica',
      'Junín',
      'La Libertad',
      'Lambayeque',
      'Lima',
      'Loreto',
      'Madre de Dios',
      'Moquegua',
      'Pasco',
      'Piura',
      'Puno',
      'San Martín',
      'Tacna',
      'Tumbes',
      'Ucayali',
    ];
    return {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(departments),
    };
  }

  private generateProvinceResponse(): any {
    const provinces = [
      'Lima',
      'Callao',
      'Cusco',
      'Arequipa',
      'Trujillo',
      'Chiclayo',
      'Iquitos',
      'Huancayo',
      'Piura',
      'Chimbote',
    ];
    return {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(provinces),
    };
  }

  private generateDistrictResponse(): any {
    const districts = [
      'Lima',
      'Miraflores',
      'San Isidro',
      'Barranco',
      'Surco',
      'La Molina',
      'Chorrillos',
      'Pueblo Libre',
      'Jesús María',
      'Magdalena',
    ];
    return {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(districts),
    };
  }

  private generateErrorModelGateway(): any {
    return {
      httpCode: 401,
      httpMessage: 'UNAUTHORIZED',
      moreInformation: 'Unauthorized access',
    };
  }

  private generateGluonError(): any {
    return {
      code: faker.string.alphanumeric(6).toUpperCase(),
      description: faker.lorem.sentence(),
      level: faker.helpers.arrayElement(['ERROR', 'WARNING', 'INFO']),
      message: faker.lorem.sentence(),
    };
  }

  private generateTypeAccountRecord(): any {
    const accountTypes = [
      { product: 'Cuenta Corriente', subProduct: 'Corriente Regular' },
      { product: 'Cuenta Corriente', subProduct: 'Corriente Premium' },
      { product: 'Cuenta de Ahorros', subProduct: 'Ahorro Regular' },
      { product: 'Cuenta de Ahorros', subProduct: 'Ahorro Plus' },
      { product: 'Cuenta de Ahorros', subProduct: 'Ahorro VIP' },
    ];
    const selected = faker.helpers.arrayElement(accountTypes);
    return {
      productId: faker.string.uuid(),
      productName: selected.product,
      subProductId: faker.string.uuid(),
      subProductName: selected.subProduct,
    };
  }

  private generateDescribeCatalogRecord(): any {
    const catalogTypes: Record<string, string[]> = {
      document_type: ['DNI', 'CE', 'PASAPORTE', 'RUC'],
      marital_status: [
        'Soltero',
        'Casado',
        'Divorciado',
        'Viudo',
        'Conviviente',
      ],
      gender: ['M', 'F'],
      account_type: ['Corriente', 'Ahorros'],
      currency: ['PEN', 'USD', 'EUR'],
    };

    // Generate a random catalog entry
    const codes = Object.keys(catalogTypes);
    const randomCode = faker.helpers.arrayElement(codes);
    const values = catalogTypes[randomCode];
    const randomValue = faker.helpers.arrayElement(values);

    return {
      describeCatalogId: faker.string.alphanumeric(10).toUpperCase(),
      describeCatalogCode: randomValue,
      describeCatalogDescription: `${randomCode}: ${randomValue}`,
    };
  }

  private generateApiResponseListDescribeCatalogRecord(): any {
    return {
      success: false,
      status: 500,
      message: 'Error interno del servidor',
      data: [],
    };
  }

  /**
   * Generate array of mock data
   */
  generateArray(schemaName: string, count: number = 5): any[] {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(this.generateFromSchema(schemaName, null));
    }
    return items;
  }

  private generateFromProperties(properties: any): any {
    const result: any = {};
    for (const [key, value] of Object.entries(properties)) {
      const prop = value as any;
      if (prop.type === 'string') {
        if (prop.format === 'uuid') {
          result[key] = faker.string.uuid();
        } else if (prop.format === 'date') {
          result[key] = faker.date.past().toISOString().split('T')[0];
        } else if (prop.format === 'date-time') {
          result[key] = faker.date.recent().toISOString();
        } else {
          result[key] = faker.string.sample();
        }
      } else if (prop.type === 'integer') {
        result[key] = faker.number.int({ min: 1, max: 999999 });
      } else if (prop.type === 'number') {
        result[key] = parseFloat(
          faker.finance.amount({ min: 0, max: 10000, dec: 2 }),
        );
      } else if (prop.type === 'boolean') {
        result[key] = faker.datatype.boolean();
      }
    }
    return result;
  }
}
