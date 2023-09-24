import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmitsModule } from './submits/submits.module';

@Module({
  imports: [SubmitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
