import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { taskControler } from './task/task.cotroller';
import { taskModule } from './task/task.module';
// import {TypeOrmModule} from "@nestjs/typeorm"

@Module({
  imports: [ userModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
