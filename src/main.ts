import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import * as compression from 'compression';
import * as helmet from 'helmet';
import {AppModule} from './app.module';
import {AppConfigService} from './config/app/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    })
  );
  app.use(compression());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  app.enableCors();

  const appConfigService = app.get(AppConfigService);
  await app.listen(appConfigService.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
