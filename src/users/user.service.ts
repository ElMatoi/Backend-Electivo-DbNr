// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { RegisterUserDto } from './dto/register.user.dto';
import { getDataUserDto } from './dto/getDataUserDto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: RegisterUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findUsernameByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).exec();
    return user;
  }

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.userModel.findOne({ username }).exec();
    if (user && user.password === pass) {
      
      return true;
    }
    
    return false;
  }
  
};
  

