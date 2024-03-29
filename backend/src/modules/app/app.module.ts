import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import configurations from "../../configurations";

@Module({
  imports: [
    /*Настройки приложения через файл configurations/index.ts*/
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),
    /*Настройки базы данных из файла configurations/index.ts*/
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: "postgres",
        host: configService.get("dbHost"),
        port: configService.get("dbPort"),
        username: configService.get("dbUser"),
        password: configService.get("dbPassword"),
        database: configService.get("dbName"),
        synchronize: true,
        autoLoadModels: true,
        modules: [],//перечисление моделей таблиц для создания в БД
      })
    }),
    /*Подключение модулей*/
      //User,
      //Posts,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}