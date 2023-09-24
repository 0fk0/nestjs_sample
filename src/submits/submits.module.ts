import { Module } from '@nestjs/common';
import { SubmitsController } from './submits.controller';
import { SubmitsService } from './submits.service';

@Module({
  controllers: [SubmitsController],
  providers: [SubmitsService]
})
export class SubmitsModule {}
