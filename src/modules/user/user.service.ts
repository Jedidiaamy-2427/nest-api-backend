import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseDto } from 'src/common/dtos/reponse.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<ResponseDto<User[]>> {
    try {
      const users = await this.userRepository.find();
      if (!users) {
        return {
          message: 'Impossible de récupérer toutes les utilisateurs',
          status: 404,
          data: null,
        };
      }
      return {
        message: 'Utilisateurs récupérés avec succès',
        status: 200,
        data: users,
      };
    } catch (error) {
      return {
        message: error.message,
        status: error.status,
        data: null,
      };
    }
  }

  async findByEmail(email: string): Promise<ResponseDto<User>> {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) {
        return {
          message: 'Utilisateur non trouvé',
          status: 404,
          data: null,
        };
      }
      return {
        message: 'Utilisateur récupéré avec succès',
        status: 200,
        data: user,
      };
    } catch (error) {
      return {
        message: error.message,
        status: error.status,
        data: null,
      };
    }
  }

  async create(user: CreateUserDto): Promise<ResponseDto<User>> {
    try {
      const userSave = this.userRepository.save(user);
      if (!userSave) {
        return {
          message: 'Impossible de créer un utilisateur',
          status: 404,
          data: null,
        };
      }
      return {
        message: 'Utilisateur créé avec succès',
        status: 201,
        data: userSave,
      };
    } catch (error) {
      return {
        message: error.message,
        status: error.status,
        data: null,
      };
    }
  }
}
