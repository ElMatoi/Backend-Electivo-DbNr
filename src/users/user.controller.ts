// user.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register.user.dto';
import { getDataUserDto } from './dto/getDataUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('registerUser')
  async create(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<boolean | { error: string }> {
    const user = await this.usersService.validateUser(loginUserDto.username, loginUserDto.password);
    if (!user) {
      return false;
    }

    return true;
  }

  @Post('getDataUser')
  async getDataUser(@Body() getDataUserDto: getDataUserDto)  {
    const { email } = getDataUserDto;
    const username = await this.usersService.findUsernameByEmail(email);

    if (username) {
      return { username };
    } else {
      return { error: 'No se encontró ningún usuario con el correo proporcionado.' };
    }
  }
  
}
