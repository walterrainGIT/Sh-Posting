import { IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "sequelize-typescript";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class CreatePostDTO {
    @ApiProperty()
    @IsString()
    category: string

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @Column
    content: string
}

export class UpdatePostDTO {
    @ApiProperty()
    @IsString()
    postId: string

    @ApiProperty()
    @IsString()
    category: string

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @Column
    content: string
}

export class DeletePostDTO {
    @ApiProperty()
    @IsString()
    postId: string
}
