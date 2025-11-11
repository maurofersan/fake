import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';
import {
  DepartmentResponseDto,
  ProvinceResponseDto,
  DistrictResponseDto,
  ApiResponseTypeAccountRecordDto,
  ApiResponseListDescribeCatalogRecordDto,
} from '../dto/settings.dto';

@Controller()
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('scp-shoncd1-becdsettings/hello')
  @HttpCode(HttpStatus.OK)
  sayHello(): string {
    return this.settingsService.sayHello();
  }

  @Get('departments')
  @HttpCode(HttpStatus.OK)
  findAllDepartments(): DepartmentResponseDto[] {
    return this.settingsService.findAllDepartments();
  }

  @Get('departments/:departmentId/provinces')
  @HttpCode(HttpStatus.OK)
  findProvincesByDepartment(
    @Param('departmentId') departmentId: string,
  ): ProvinceResponseDto[] {
    return this.settingsService.findProvincesByDepartment(departmentId);
  }

  @Get('provinces/:provinceId/districts')
  @HttpCode(HttpStatus.OK)
  findDistrictsByProvince(
    @Param('provinceId') provinceId: string,
  ): DistrictResponseDto[] {
    return this.settingsService.findDistrictsByProvince(provinceId);
  }

  @Get('catalog/typeAccounts')
  @HttpCode(HttpStatus.OK)
  listTypeAccounts(): ApiResponseTypeAccountRecordDto {
    return this.settingsService.listTypeAccounts();
  }

  @Get('catalog/describe-catalog/:type')
  @HttpCode(HttpStatus.OK)
  findDescribeCatalogByType(
    @Param('type') type: string,
  ): ApiResponseListDescribeCatalogRecordDto {
    return this.settingsService.findDescribeCatalogByType(type);
  }
}
