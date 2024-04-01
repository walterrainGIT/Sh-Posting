import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "sequelize-typescript";

export class PostResponce {
    @ApiProperty()
    @IsString()
    creatorId: number

    @ApiProperty()
    @IsString()
    category: string

    @ApiProperty()
    @IsString()
    createDateTime: string

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    content: string
}
