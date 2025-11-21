import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';
import {
  DepartmentResponseDto,
  ProvinceResponseDto,
  DistrictResponseDto,
  TypeAccountRecordDto,
  DescribeCatalogRecordDto,
} from '../dto/settings.dto';
import { ApiResponse } from '../dto/common.dto';

@Controller()
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('scp-shoncd1-becdsettings/hello')
  @HttpCode(HttpStatus.OK)
  sayHello(): ApiResponse<string> {
    return this.settingsService.sayHello();
  }

  @Get('departments')
  @HttpCode(HttpStatus.OK)
  findAllDepartments(): ApiResponse<DepartmentResponseDto[]> {
    return this.settingsService.findAllDepartments();
  }

  @Get('departments/:departmentId/provinces')
  @HttpCode(HttpStatus.OK)
  findProvincesByDepartment(
    @Param('departmentId') departmentId: string,
  ): ApiResponse<ProvinceResponseDto[]> {
    return this.settingsService.findProvincesByDepartment(departmentId);
  }

  @Get('provinces/:provinceId/districts')
  @HttpCode(HttpStatus.OK)
  findDistrictsByProvince(
    @Param('provinceId') provinceId: string,
  ): ApiResponse<DistrictResponseDto[]> {
    return this.settingsService.findDistrictsByProvince(provinceId);
  }

  @Get('catalog/typeAccounts')
  @HttpCode(HttpStatus.OK)
  listTypeAccounts(): ApiResponse<TypeAccountRecordDto[]> {
    return this.settingsService.listTypeAccounts();
  }

  @Get('catalog/final-catalog/:type')
  @HttpCode(HttpStatus.OK)
  findDescribeCatalogByType(
    @Param('type') type: string,
  ): ApiResponse<DescribeCatalogRecordDto[]> {
    return this.settingsService.findDescribeCatalogByType(type);
  }
}
