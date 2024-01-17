import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(public service: PostService) {}

  @Post()
  create(@Body() dto: PostDto): Promise<PostDto> {
    return this.service.save(dto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get()
  getAll(): Promise<PostDto[]> {
    return this.service.findAll();
  }

  @Post('/search')
  getByUser(@Query('ownerId') ownerId: string): Promise<PostDto[]> {
    return this.service.findByUser(ownerId);
  }

  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() kind: UpdatePostDto,
  ): Promise<{ result: string }> {
    return this.service.update(id, kind);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<{ result: string }> {
    return this.service.delete(id);
  }
}
