import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';

@Controller()
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('scp-shoncd1-becdsettings/hello')
  @HttpCode(HttpStatus.OK)
  sayHello(): string {
    return this.settingsService.sayHello();
  }

  @Get('provinces/:provinceId/districts')
  @HttpCode(HttpStatus.OK)
  findDistrictsByProvince(@Param('provinceId') provinceId: string) {
    return this.settingsService.findDistrictsByProvince(provinceId);
  }

  @Get('departments/:departmentId/provinces')
  @HttpCode(HttpStatus.OK)
  findProvincesByDepartment(@Param('departmentId') departmentId: string) {
    return this.settingsService.findProvincesByDepartment(departmentId);
  }

  @Get('departments')
  @HttpCode(HttpStatus.OK)
  findAllDepartments() {
    return this.settingsService.findAllDepartments();
  }
}
