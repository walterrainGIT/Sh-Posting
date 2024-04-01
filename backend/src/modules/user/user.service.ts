import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt"
import {CreateUserDTO, UpdateUserDTO} from "./dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

    async hashPassword (password: string) : Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async findUserByEmail(email: string) : Promise<User> {
        return this.userRepository.findOne({where: {email} });
    }

    async createUser(dto: CreateUserDTO) : Promise<CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password);

        await this.userRepository.create({
            firstName: dto.firstName,
            userName: dto.userName,
            email: dto.email,
            password: dto.password
        })
        return dto;
    }

    async publicUser(email: string) : Promise<User>{
        const result = this.userRepository.findOne({
            where: {email},
            attributes: {exclude: ['password']},
        });
        return result;
    }

    async updateUser(email: string, dto: UpdateUserDTO) : Promise<UpdateUserDTO> {
        dto.password = await this.hashPassword(dto.password);
        await this.userRepository.update(dto, {where: {email}});
        return dto;
    }

    async deleteUser(email: string) : Promise<boolean> {
        await this.userRepository.destroy({where: {email}});
        return true;
    }
}
