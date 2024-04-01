import {Body, Controller, Patch, Delete, UseGuards, Req} from '@nestjs/common';
import { UserService } from './user.service';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDTO, UpdateUserDTO} from "./dto";
import {JwtAusGuard} from "../../security/guards/jwtGuard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags('API-user')
    @ApiResponse({status: 200, type: UpdateUserDTO})
    @UseGuards(JwtAusGuard)
    @Patch('update')
    updateUser(@Body() dto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user;
        return this.userService.updateUser(user.email, dto);
    }

    @ApiTags('API-user')
    @ApiResponse({status: 200})
    @UseGuards(JwtAusGuard)
    @Delete('delete')
    deleteUser(@Req() request) : Promise<boolean>{
        const user = request.user;
        return this.userService.deleteUser(user.email);
    }
}
