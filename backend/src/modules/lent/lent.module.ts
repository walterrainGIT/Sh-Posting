import { Module } from '@nestjs/common';
import { LentService } from './lent.service';

@Module({
  providers: [LentService]
})
export class LentModule {}
