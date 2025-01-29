// src/common/dto/response.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/user/entities/user.entity';

export class ResponseDto<T> {
  @ApiProperty({
    example: 'Opération réussie',
    description: 'Message de la réponse',
  })
  message: string;

  @ApiProperty({
    example: 200,
    description: 'Code de statut HTTP de la réponse',
  })
  status: number;

  @ApiProperty({
    example: {},
    description: 'Données de la réponse',
  })
  data: User | any;

  constructor(message: string, status: number, data: T) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
