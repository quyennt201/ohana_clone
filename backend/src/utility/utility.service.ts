import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilityEntity } from './utility.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { UtilityDto } from './utility.dto';

@Injectable()
export class UtilityService {
  constructor(
    @InjectRepository(UtilityEntity)
    private readonly repository: Repository<UtilityEntity>,
  ) {}

  async save(dto: UtilityDto): Promise<UtilityDto> {
    const res = await this.repository.save(dto as UtilityDto);
    return plainToInstance(UtilityDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<UtilityDto> {
    const res = await this.repository.findOne({
      where: {
        id: id as any,
      },
    });
    return plainToInstance(UtilityDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<UtilityDto[]> {
    const res = await this.repository.find();
    return plainToInstance(UtilityDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, dto: UtilityDto): Promise<{ result: string }> {
    await this.repository.update(id, dto as any);
    return { result: 'success' };
  }

  async delete(id: string): Promise<{ result: string }> {
    await this.repository.softDelete(id);
    return { result: 'success' };
  }
}
