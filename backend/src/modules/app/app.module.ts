import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import configurations from "../../configurations";
import {UserModule} from "../user/user.module";
import {AuthenticationModule} from "../authentication/authentication.module";
import {User} from "../user/models/user.model";
import {PostModule} from "../post/post.module";

@Module({
  imports: [
    /*Настройки приложения через файл configurations/user.model.ts*/
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),
    /*Настройки базы данных из файла configurations/user.model.ts*/
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
        modules: [
            User,
        ],//перечисление моделей таблиц для создания в БД
      })
    }),
    /*Подключение модулей*/
    UserModule,
    AuthenticationModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}