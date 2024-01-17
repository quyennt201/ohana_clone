import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { PostDto } from './dto/post.dto';
import { UserService } from 'src/user/user.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { UtilityOfPostService } from 'src/utility_post/utility-post.service';
import { KindRoomService } from 'src/kindRoom/kindRoom.service';
import { UtilityOfPostDto } from 'src/utility_post/utility-post.dto';
import { ImgService } from 'src/img/img.service';
import { ImgDto } from 'src/img/img.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly repository: Repository<PostEntity>,
    private readonly userService: UserService,
    private readonly utilityOfPostService: UtilityOfPostService,
    private readonly kinhRoomService: KindRoomService,
    private readonly imgService: ImgService,
  ) {}

  async save(dto: PostDto): Promise<any> {
    const res = await this.repository.save(dto);
    await Promise.all(
      res?.utilitiesId?.map(async (utl) => {
        const ultDto = new UtilityOfPostDto();
        ultDto.postId = res.id;
        ultDto.utilityId = utl;
        await this.utilityOfPostService.create(ultDto);
      }),
    );
    await Promise.all(
      res?.img?.map(async (i) => {
        const imgDto = new ImgDto();
        imgDto.postId = res.id;
        imgDto.url = i;
        await this.imgService.create(imgDto);
      }),
    );
    return plainToInstance(PostDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<PostDto[]> {
    const res = await this.repository.find();
    const array = res.map(async (resItem) => ({
      ...resItem,
      owner: await this.userService.findOne(resItem.ownerId),
    }));
    return plainToInstance(PostDto, await Promise.all(array), {
      excludeExtraneousValues: true,
    });
  }

  async findOne(id: string): Promise<PostDto> {
    const res = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    let user = {};
    let utilities = {};
    let kindRoom = {};
    let imgs = {};
    if (res) {
      user = await this.userService.findOne(res?.ownerId);
      utilities = await this.utilityOfPostService.findByPost(res?.id);
      kindRoom = await this.kinhRoomService.findOne(res?.kindRoomId);
      imgs = await this.imgService.findByPost(res?.id);
      return plainToInstance(
        PostDto,
        {
          ...res,
          owner: user,
          utilities: utilities,
          kindRoom: kindRoom,
          img: imgs,
        },
        {
          excludeExtraneousValues: true,
        },
      );
    } else {
      return plainToInstance(PostDto, res, {
        excludeExtraneousValues: true,
      });
    }
  }

  async findByUser(ownerId: string): Promise<PostDto[]> {
    const res = await this.repository.findBy({ ownerId: ownerId });
    return plainToInstance(PostDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findByCity(city: string): Promise<PostDto[]> {
    const res = await this.repository.findBy({ city: city });
    return plainToInstance(PostDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async findByDistrict(district: string): Promise<PostDto[]> {
    const res = await this.repository.findBy({ district: district });
    return plainToInstance(PostDto, res, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, dto: UpdatePostDto): Promise<{ result: string }> {
    await Promise.all([
      await this.utilityOfPostService.deleteByPost(id),
      await this.imgService.deleteByPost(id),
      dto?.utilitiesId?.map(async (utl) => {
        const ultDto = new UtilityOfPostDto();
        ultDto.postId = id;
        ultDto.utilityId = utl;
        await this.utilityOfPostService.create(ultDto);
      }),
      dto?.img?.map(async (i) => {
        const imgDto = new ImgDto();
        imgDto.postId = id;
        imgDto.url = i;
        await this.imgService.create(imgDto);
      }),
      await this.repository.update(
        id,
        plainToInstance(PostEntity, dto, { excludeExtraneousValues: true }),
      ),
    ]);
    return { result: 'success' };
  }

  async delete(id: string): Promise<{ result: string }> {
    await Promise.all([
      await this.utilityOfPostService.deleteByPost(id),
      await this.imgService.deleteByPost(id),
      await this.repository.softDelete(id),
    ]);
    return { result: 'success' };
  }
}
