import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthPayload } from './auth-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, storePasswordHash);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    const check = await this.comparePassword(password, user.password);

    if (!user || !check) {
      return false;
    }

    return user;
  }

  async login(user: CreateUserDto) {
    // const res = await this.userService.findByEmail(user.email);
    // const payload = {
    // email: res.email,
    // id: res.id,
    // };
    // const userDto = plainToInstance(UserDto, res, {
    //   excludeExtraneousValues: true,
    // });
    // return { ...userDto, access_token: this.jwtService.sign(payload) };
    const payload = { email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}
