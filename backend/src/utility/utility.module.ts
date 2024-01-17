import { UtilityController } from './utility.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilityEntity } from './utility.entity';
import { UtilityService } from './utility.service';

@Module({
  imports: [TypeOrmModule.forFeature([UtilityEntity])],
  controllers: [UtilityController],
  providers: [UtilityService],
  exports: [UtilityService]
})
export class UtilityModule {}
