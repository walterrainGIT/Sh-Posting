import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from "./models/post.model";
import {PostService} from "./post.service";

@Module({
  imports: [SequelizeModule.forFeature([Post])], //импорт модуля для работы с БД в модели User
  providers: [PostService],
  controllers: [PostController],
  exports: [PostService]
})

export class PostModule {}
