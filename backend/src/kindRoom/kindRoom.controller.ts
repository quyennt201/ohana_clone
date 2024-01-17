import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { KindRoomService } from './kindRoom.service';
import { KindRoomDto } from './kindRoom.dto';

@Controller('kind-room')
export class KindRoomController {
  constructor(public service: KindRoomService) {}

  @Post()
  create(@Body() dto: KindRoomDto): Promise<KindRoomDto> {
    return this.service.save(dto);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<KindRoomDto> {
    return this.service.findOne(id);
  }

  @Get()
  getAll(): Promise<KindRoomDto[]> {
    return this.service.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() kind: KindRoomDto,
  ): Promise<{ result: string }> {
    return this.service.update(id, kind);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.service.delete(id);
  }
}
