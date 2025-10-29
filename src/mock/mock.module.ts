import { Module } from '@nestjs/common';
import { RedisController } from './controllers/redis.controller';
import { AccountOpeningController } from './controllers/account-opening.controller';
import { AmlController } from './controllers/aml.controller';
import { SettingsController } from './controllers/settings.controller';
import { RedisService } from './services/redis.service';
import { AccountOpeningService } from './services/account-opening.service';
import { AmlService } from './services/aml.service';
import { SettingsService } from './services/settings.service';
import { MockDataGeneratorService } from './utils/mock-data-generator.service';

@Module({
  controllers: [
    RedisController,
    AccountOpeningController,
    AmlController,
    SettingsController,
  ],
  providers: [
    RedisService,
    AccountOpeningService,
    AmlService,
    SettingsService,
    MockDataGeneratorService,
  ],
})
export class MockModule {}
