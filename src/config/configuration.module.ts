import {Module} from '@nestjs/common';
import {AppConfigModule} from './app/configuration.module';
import {DBConfigModule} from './database/configuration.module';

@Module({
  imports: [AppConfigModule, DBConfigModule],
})
export class ConfigurationModule {}
