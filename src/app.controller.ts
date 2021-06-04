import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 리퀘스트 데이터와 리스폰스 데이터를 받아서 비지니스 로직을 호출하는형태
@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
