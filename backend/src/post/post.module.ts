import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UserModule } from 'src/user/user.module';
import { UserEntity } from 'src/user/user.entity';
import { UtilityOfPostModule } from 'src/utility_post/utility-post.module';
import { UtilityOfPostService } from 'src/utility_post/utility-post.service';
import { KindRoomModule } from 'src/kindRoom/kindRoom.module';
import { ImgModule } from 'src/img/img.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), UserModule, UtilityOfPostModule, KindRoomModule, ImgModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
