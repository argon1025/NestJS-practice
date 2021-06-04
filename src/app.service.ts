import { Injectable } from '@nestjs/common';

// 트랜젝션 단위로 기능을 분리
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
