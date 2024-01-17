import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgEntity } from './img.entity';
import { ImgService } from './img.service';

@Module({
  imports: [TypeOrmModule.forFeature([ImgEntity])],
  providers: [ImgService],
  exports: [ImgService],
})
export class ImgModule {}
