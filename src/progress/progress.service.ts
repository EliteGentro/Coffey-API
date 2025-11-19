import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from './entities/progress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private readonly progressRepository: Repository<Progress>,
  ) {}
  create(createProgressDto: CreateProgressDto) {
    const progress = this.progressRepository.create(createProgressDto);
    return this.progressRepository.save(progress);
  }

  async findAll() {
    return this.progressRepository.find({
      relations: ['user', 'content'],
    });
  }

  async findAllDeleted() {
    return await this.progressRepository.find({
      where: {},
      withDeleted: true,
      relations: ['user', 'content'],
    }).then(results => results.filter(item => item.deletedAt !== null));
  }

  async findOne(progress_id: number) {
    const progress = await this.progressRepository.findOne({
      where: {  progress_id },
      relations: ['user', 'content'],
    });
    if(!progress){
      throw new NotFoundException(`Progress with ID ${progress_id} not found`);
    }
    return progress;
  }

  async findByUser(user_id: number) {
    return await this.progressRepository.find({
      where: { user_id },
      relations: ['user', 'content'],
    });
  }

  async findByContent(content_id: number) {
    return await this.progressRepository.find({
      where: { content_id },
      relations: ['user', 'content'],
    });
  }

  async update(progress_id: number, updateProgressDto: UpdateProgressDto) {
    const progress = await this.findOne(progress_id);
    this.progressRepository.merge(progress, updateProgressDto);
    return this.progressRepository.save(progress);
  }

  async remove(progress_id: number) {
    const existingProgress = await this.findOne(progress_id);
    await this.progressRepository.softRemove(existingProgress);
    return existingProgress;
  }
}
