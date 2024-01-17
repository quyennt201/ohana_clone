import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KindRoomEntity } from './kindRoom.entity';
import { Repository } from 'typeorm';
import { KindRoomDto } from './kindRoom.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class KindRoomService {
  constructor(
    @InjectRepository(KindRoomEntity)
    private readonly repository: Repository<KindRoomEntity>,
  ) {}

  async save(dto: KindRoomDto): Promise<KindRoomDto> {
    const res = await this.repository.save(dto);
    return plainToInstance(KindRoomDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<KindRoomDto[]> {
    const res = await this.repository.find();
    return plainToInstance(KindRoomDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<any> {
    const res = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    return res.name;
  }

  async update(id: string, dto: KindRoomDto): Promise<{ result: string }> {
    await this.repository.update(id, dto);
    return { result: 'success' };
  }

  async delete(id: string): Promise<{ result: string }> {
    await this.repository.softDelete(id);
    return { result: 'success' };
  }
}
