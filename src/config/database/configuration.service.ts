import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class DBConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('db.host');
  }

  get user(): string {
    return this.configService.get<string>('db.user');
  }

  get password(): string {
    return this.configService.get<string>('db.password');
  }

  get name(): string {
    return this.configService.get<string>('db.name');
  }
}
