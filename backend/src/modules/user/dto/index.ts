import { IsString } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

/*Валидация данных, чтобы типы для записи в базу данных были правильные*/
export class CreateUserDTO {
    @ApiProperty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsString()
    userName: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}

export class UpdateUserDTO {
    @ApiProperty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsString()
    userName: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}
