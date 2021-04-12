import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigurationModule} from './config/configuration.module';
import {DBConfigModule} from './config/database/configuration.module';
import MongooseConfigService from './config/database/mongoose-config.service';
import {ApiModule} from './modules/api/api.module';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRootAsync({
      imports: [DBConfigModule],
      useClass: MongooseConfigService,
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      cacheControl: false,
    }),
    ApiModule,
  ],
})
export class AppModule {}
