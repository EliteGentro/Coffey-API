import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CooperativaService } from './cooperativa.service';
import { CreateCooperativaDto } from './dto/create-cooperativa.dto';
import { UpdateCooperativaDto } from './dto/update-cooperativa.dto';

@Controller('cooperativa')
export class CooperativaController {
  constructor(private readonly cooperativaService: CooperativaService) {}

  @Post()
  create(@Body() createCooperativaDto: CreateCooperativaDto) {
    return this.cooperativaService.create(createCooperativaDto);
  }

  @Get()
  findAll() {
    return this.cooperativaService.findAll();
  }

  @Get('deleted')
  findAllDeleted() {
    return this.cooperativaService.findAllDeleted();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cooperativaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCooperativaDto: UpdateCooperativaDto) {
    return this.cooperativaService.update(id, updateCooperativaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cooperativaService.remove(id);
  }
}
