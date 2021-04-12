import {Injectable} from '@nestjs/common';
import {MongooseModuleOptions, MongooseOptionsFactory} from '@nestjs/mongoose';

import {DBConfigService} from './configuration.service';

@Injectable()
export default class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: DBConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb+srv://${this.configService.user}:${this.configService.password}@${this.configService.host}/${this.configService.name}?retryWrites=true&w=majority`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
  }
}
