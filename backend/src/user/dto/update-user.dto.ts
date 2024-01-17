import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';
// import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(UserDto) {}
