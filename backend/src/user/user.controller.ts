import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(public service: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string): Promise<UserDto> {
    return this.service.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<UserDto[]> {
    return this.service.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Post('search')
  getByEmail(@Body('email') email: string): Promise<UserDto> {
    return this.service.findByEmail(email);
  }

  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<{ result: string }> {
    return this.service.update(id, user);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.service.delete(id);
  }
}
