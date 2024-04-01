import { IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "sequelize-typescript";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class DataPostDTO {
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

export class PostIdDTO {
    @ApiProperty()
    @IsString()
    postId: string
}

export class CreatorIdDTO {
    @ApiProperty()
    @IsString()
    creatorId: string
}

export class UpdatePostDTO {
    @ApiProperty()
    postId: PostIdDTO

    @ApiProperty()
    postData: DataPostDTO
}

export class CertainNumDTO {
    @ApiProperty()
    offset: string

    @ApiProperty()
    limit: string
}

export class FiltersDTO {
    @ApiProperty()
    category: string

    @ApiProperty()
    dateStart: string

    @ApiProperty()
    dateEnd: string
}