import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UtilityOfPostService } from './utility-post.service';
import { UtilityOfPostDto } from './utility-post.dto';

@Controller('utility-post')
export class UtilityOfPostController {
  constructor(public service: UtilityOfPostService) {}

  @Post()
  create(@Body() uop: UtilityOfPostDto): Promise<any> {
    return this.service.create(uop);
  }

  @Get()
  findByPost(@Query("postId") postId: string): Promise<any> {
    return this.service.findByPost(postId);
  }
}
