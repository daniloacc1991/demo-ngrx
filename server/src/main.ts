import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RedisAdapter } from './redis.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redisIoAdapter = new RedisAdapter(app);
  await redisIoAdapter.connectToRedis();

  app.setGlobalPrefix('api');
  app.useWebSocketAdapter(redisIoAdapter);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe(),
    new ValidationPipe({ transform: true }),
  );
  await app.listen(3000);
}

bootstrap();
