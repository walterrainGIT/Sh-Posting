import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./models/user.model";

@Module({
  imports: [SequelizeModule.forFeature([User])], //импорт модуля для работы с БД в модели User
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
