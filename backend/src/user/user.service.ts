import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  // export class UserService extends BaseService<UserEntity, UserDto> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(dto: UserDto): Promise<UserDto> {
    const res = await this.repository.save(dto as UserDto);
    return plainToInstance(UserDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<UserDto> {
    const res = await this.repository.findOne({
      where: {
        id: id as any,
      }
    });
    return plainToInstance(UserDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<UserDto[]> {
    const res = await this.repository.find();
    return plainToInstance(UserDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findByEmail(email: string): Promise<any> {
    const res = await this.repository.findOne({
      where: { email: email },
    });
    return res;
    // return plainToInstance(UserDto, res, {
    //   excludeExtraneousValues: true,
    // });
  }

  async update(id: string, dto: UpdateUserDto): Promise<{ result: string }> {
    await this.repository.update(id, dto as any);
    return { result: 'success' };
  }

  async delete(id: string): Promise<{ result: string }> {
    await this.repository.softDelete(id);
    return { result: 'success' };
  }
}
