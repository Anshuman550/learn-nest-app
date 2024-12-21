import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller("app")
export class AppController {
  constructor(private appService: AppService) {}
  //private appService = new AppService();
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("namo")
  getNamaste(): string {
    return this.appService.getNamaste() ;
  }
}
