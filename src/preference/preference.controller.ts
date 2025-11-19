import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PreferenceService } from './preference.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';

@Controller('preference')
export class PreferenceController {
  constructor(private readonly preferenceService: PreferenceService) {}

  @Post()
  create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferenceService.create(createPreferenceDto);
  }

  @Get()
  findAll() {
    return this.preferenceService.findAll();
  }

  @Get('deleted')
  findAllDeleted() {
    return this.preferenceService.findAllDeleted();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.preferenceService.findOne(id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.preferenceService.findByUser(userId);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePreferenceDto: UpdatePreferenceDto) {
    return this.preferenceService.update(id, updatePreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.preferenceService.remove(id);
  }
}
