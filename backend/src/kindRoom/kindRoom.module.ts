import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KindRoomEntity } from './kindRoom.entity';
import { KindRoomController } from './kindRoom.controller';
import { KindRoomService } from './kindRoom.service';

@Module({
  imports: [TypeOrmModule.forFeature([KindRoomEntity])],
  controllers: [KindRoomController],
  providers: [KindRoomService],
  exports: [KindRoomService]
})
export class KindRoomModule {}
