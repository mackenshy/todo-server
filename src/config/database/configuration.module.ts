import * as Joi from 'joi';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';

import configuration from './configuration';
import {DBConfigService} from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService, DBConfigService],
  exports: [ConfigService, DBConfigService],
})
export class DBConfigModule {}
