import { DeleteResult, Repository } from 'typeorm';
import { IBaseService } from './i.base.service';
import { BaseEntity } from './base.entity';
import { EntityId } from 'typeorm/repository/EntityId';
import { plainToInstance } from 'class-transformer';
import { BaseDto } from './base.dto';
import { UserDto } from 'src/user/dto/user.dto';

export class BaseService<T extends BaseEntity, Dto extends BaseDto> {
  constructor(protected repository: Repository<T>) {}

  async save(dto: Dto): Promise<any> {
    const res = await this.repository.save(dto as any);
  }

  async findOne(id: string): Promise<Dto | undefined> {
    const res = await this.repository.findOne({
      where: {
        id: id as any,
      },
    });
    return plainToInstance(this.getDtoConstructor(), res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<Dto[]> {
    const res = await this.repository.find();
    return plainToInstance(this.getDtoConstructor(), res, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, dto: Dto): Promise<{ result: string }> {
    await this.repository.update(id, dto as any);
    return { result: 'success' };
  }

  async delete(id: string): Promise<{ result: string }> {
    await this.repository.delete(id);
    return { result: 'success' };
  }

  private getDtoConstructor(): new () => Dto {
    return this.repository.target as new () => Dto;
  }
}
