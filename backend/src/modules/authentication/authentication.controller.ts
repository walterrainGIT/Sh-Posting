import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDTO} from "../user/dto";
import {UserLoginDTO} from "./dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthUserResponse} from "./responce";
import {AuthenticationService} from "./authentication.service";



@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService){}

    @ApiTags('API-authentication')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register(@Body() dto: CreateUserDTO) : Promise<CreateUserDTO>{
        return this.authService.registerUser(dto);
    }

    @ApiTags('API-authentication')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login(@Body() dto: UserLoginDTO) : Promise<AuthUserResponse>{
        return this.authService.loginUser(dto);
    }
}
