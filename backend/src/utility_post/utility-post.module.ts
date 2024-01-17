import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilityOfPostController } from './utility-post.controller';
import { UtilityOfPostService } from './utility-post.service';
import { UtilityOfPostEntity } from './utility-post.entity';
import { UtilityModule } from 'src/utility/utility.module';

@Module({
  imports: [TypeOrmModule.forFeature([UtilityOfPostEntity]), UtilityModule],
  controllers: [UtilityOfPostController],
  providers: [UtilityOfPostService],
  exports: [UtilityOfPostService]
})
export class UtilityOfPostModule {}
