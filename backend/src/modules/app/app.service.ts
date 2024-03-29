import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, genius. I`ve been waiting for your, Alex!';
  }
}