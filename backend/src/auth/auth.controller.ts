import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';
import { LocalAuthGuard } from './guard/local.guard';
import { UserDto } from 'src/user/dto/user.dto';

@Controller()
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() user: UserDto) {
    const check = await this.userService.findByEmail(user.email);
    if (check) {
      throw new HttpException(
        {
          message: 'User already exists',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    user.password = await this.authService.hashPassword(user.password);
    return this.userService.save(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: CreateUserDto): Promise<any> {
    return this.authService.login(user);
  }
}
