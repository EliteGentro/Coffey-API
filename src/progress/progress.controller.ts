import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  create(@Body() createProgressDto: CreateProgressDto) {
    return this.progressService.create(createProgressDto);
  }

  @Get()
  findAll() {
    return this.progressService.findAll();
  }

  @Get('deleted')
  findAllDeleted() {
    return this.progressService.findAllDeleted();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.progressService.findOne(id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.progressService.findByUser(userId);
  }

  @Get('content/:contentId')
  findByContent(@Param('contentId', ParseIntPipe) contentId: number) {
    return this.progressService.findByContent(contentId);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProgressDto: UpdateProgressDto) {
    return this.progressService.update(id, updateProgressDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.progressService.remove(id);
  }
}
