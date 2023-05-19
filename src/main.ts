import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core/index';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3020);
}
bootstrap();
