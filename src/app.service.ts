import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html><head><title>Welcome to my API</title></head><body><h1>Welcome to my API</h1></body></html>';
  }
}
