import { Module } from '@nestjs/common';
import { RedisController } from './controllers/redis.controller';
import { AccountOpeningController } from './controllers/account-opening.controller';
import { AmlController } from './controllers/aml.controller';
import { SettingsController } from './controllers/settings.controller';
import { OTPController } from './controllers/otp.controller';
import { CaptchaController } from './controllers/captcha.controller';
import { LogsController } from './controllers/logs.controller';
import { RedisService } from './services/redis.service';
import { AccountOpeningService } from './services/account-opening.service';
import { AmlService } from './services/aml.service';
import { SettingsService } from './services/settings.service';
import { OTPService } from './services/otp.service';
import { CaptchaService } from './services/captcha.service';
import { LogsService } from './services/logs.service';
import { MockDataGeneratorService } from './utils/mock-data-generator.service';
import { IdentyService } from './services/identy.service';
import { IdentyController } from './controllers/identy.controller';
import { FakeStorageService } from './utils/fake-storage.service';
import { ApiResponseBuilderService } from './utils/api-response-builder.service';

@Module({
  controllers: [
    RedisController,
    AccountOpeningController,
    AmlController,
    SettingsController,
    IdentyController,
    OTPController,
    CaptchaController,
    LogsController,
  ],
  providers: [
    RedisService,
    AccountOpeningService,
    AmlService,
    SettingsService,
    OTPService,
    CaptchaService,
    LogsService,
    MockDataGeneratorService,
    IdentyService,
    FakeStorageService,
    ApiResponseBuilderService,
  ],
})
export class MockModule {}
