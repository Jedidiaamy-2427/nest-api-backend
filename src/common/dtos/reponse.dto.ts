// src/common/dto/response.dto.ts

export class ResponseDto<T> {
  message: string;
  status: number;
  data: any;

  constructor(message: string, status: number, data: T) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
