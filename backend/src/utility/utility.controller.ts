import {
    Controller,
    Body,
    Post,
    Get,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
import { UtilityService } from "./utility.service";
import { UtilityDto } from './utility.dto';

@Controller("utility")
export class UtilityController {
    constructor(public service: UtilityService){}

    @Post()
  createUser(@Body() uti: UtilityDto): Promise<UtilityDto> {
    return this.service.save(uti);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<UtilityDto> {
    return this.service.findOne(id);
  }

  @Get()
  getAll(): Promise<UtilityDto[]> {
    return this.service.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() user: UtilityDto,
  ): Promise<{ result: string }> {
    return this.service.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.service.delete(id);
  }
}