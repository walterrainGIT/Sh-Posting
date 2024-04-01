import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*Настройки приложения через файл configurations/user.model.ts*/
  const configService = app.get(ConfigService);
  /*Создание Pipe-для запросов и валидация данных*/
  app.useGlobalPipes(new ValidationPipe());
  /*Формирование документации через библиотеку Swagger*/
  const config = new DocumentBuilder()
      .setTitle('Documentation for Project Sh-Posting')
      .setDescription('API for Sh-Posting')
      .setVersion('1.0')
      .addTag('API-user')
      .addTag('API-authentication')
      .addTag('API-post')
      .addTag('API-list')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /*Стандартные настройки подключения с измененным портом из файла configurations/user.model.ts*/
  const port = configService.get('port')
  await app.listen(port);
}
bootstrap();

