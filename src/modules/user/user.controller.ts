import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/modules/user/entities/user.entity';
import { ResponseDto } from 'src/common/dtos/reponse.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Utilisateurs récupérés avec succès',
    schema: {
      example: {
        message: 'Utilisateurs récupérés avec succès',
        status: 200,
        data: [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'user@example.com',
          },
        ],
      },
    },
  })
  async getUsers(): Promise<ResponseDto<User[]>> {
    return this.userService.findAll();
  }
}
