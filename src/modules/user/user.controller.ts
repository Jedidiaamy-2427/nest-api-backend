import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/modules/user/entities/user.entity';
import { ResponseDto } from 'src/common/dtos/reponse.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getUsers(): Promise<ResponseDto<User[]>> {
    return this.userService.findAll();
  }
}
