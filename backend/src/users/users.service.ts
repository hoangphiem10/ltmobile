import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto/signup.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * Query user by email
   * @param {string} email String
   */
  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  /**
   * Create user account
   * @param {Object} user Object
   * @param {string} password String
   */
  async createUser(user: CreateUserDto, password: string) {
    return await this.userModel.create({
      ...user,
      password,
    });
  }
}
