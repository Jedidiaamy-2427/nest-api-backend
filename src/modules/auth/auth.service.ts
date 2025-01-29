import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { ResponseDto } from 'src/common/dtos/reponse.dto';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user.data && (await bcrypt.compare(pass, user.data.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user.data;
      return result;
    }
    return null;
  }

  async login(user: LoginDto): Promise<any> {
    const userData = await this.userService.findByEmail(user.email);
    if (
      !userData ||
      !(await bcrypt.compare(user.password, userData.data.password))
    ) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email, sub: userData.data.id };
    return {
      message: 'Uitlisateur connecté avec succès',
      status: 200,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: CreateUserDto): Promise<ResponseDto<User>> {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      console.log(hashedPassword);
      const createdUser = await this.userService.create({
        ...user,
        password: hashedPassword,
      });
      return createdUser;
    } catch (error) {
      return {
        message: error.message,
        status: error.status,
        data: null,
      };
    }
  }
}
