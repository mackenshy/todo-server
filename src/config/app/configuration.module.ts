import * as Joi from 'joi';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';

import configuration from './configuration';
import {AppConfigService} from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}