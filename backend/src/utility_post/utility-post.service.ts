import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilityOfPostEntity } from './utility-post.entity';
import { Repository } from 'typeorm';
import { UtilityOfPostDto } from './utility-post.dto';
import { plainToInstance } from 'class-transformer';
import { UtilityDto } from 'src/utility/utility.dto';
import { UtilityService } from 'src/utility/utility.service';

@Injectable()
export class UtilityOfPostService {
  constructor(
    @InjectRepository(UtilityOfPostEntity)
    private readonly repository: Repository<UtilityOfPostEntity>,
    private utilityService: UtilityService,
  ) {}

  async create(dto: UtilityOfPostDto): Promise<any> {
    try {
      const res = await this.repository.save(dto);
      return plainToInstance(UtilityOfPostDto, res, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      throw new HttpException('Utility already exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findByPost(postId: string): Promise<any> {
    const res = await this.repository.find({
      select: {
        utilityId: true,
      },
      where: {
        postId: postId,
      },
    });
    const array = res.map(
      async (item) => await this.utilityService.findOne(item.utilityId),
    );
    return await Promise.all(array);
  }

  async update(id: string, uop: UtilityOfPostDto): Promise<any> {}

  async deleteByPost(postId: string): Promise<{ result: string }> {
    const res = await this.repository.findBy({ postId: postId });
    await Promise.all(
      res.map(async (item) => await this.repository.delete(item.id)),
    );
    return { result: 'delete by post success' };
  }
}
