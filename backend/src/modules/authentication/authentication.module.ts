import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {UserModule} from "../user/user.module";
import {JwtStrategy} from "../../security/strategy";
import {AuthenticationController} from "./authentication.controller";
import {TokenModule} from "../token/token.module";

@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy]
})
export class AuthenticationModule {}
