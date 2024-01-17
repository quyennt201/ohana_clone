import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgEntity } from './img.entity';
import { Repository } from 'typeorm';
import { ImgDto } from './img.dto';
import { plainToInstance } from 'class-transformer';
import { url } from 'inspector';

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(ImgEntity)
    private readonly repository: Repository<ImgEntity>,
  ) {}

  async create(dto: ImgDto): Promise<any> {
    const res = await this.repository.save(dto);
    return plainToInstance(ImgDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findByPost(postId: string): Promise<any> {
    const res = await this.repository.find({
      select: {
        url: true,
      },
      where: {
        postId: postId,
      },
    });
    const array = res.map((item) => item.url);
    return array;
  }

  async deleteByPost(postId: string): Promise<{ result: string }> {
    const res = await this.repository.findBy({ postId: postId });
    await Promise.all(
      res.map(async (item) => await this.repository.delete(item.id)),
    );
    return { result: 'delete by post success' };
  }
}
