import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) {}

  create(createContentDto: CreateContentDto) {
    const newContent = this.contentRepository.create(createContentDto);

    return this.contentRepository.save(newContent);
  }

  async findAll() {
    return await this.contentRepository.find();
  }

  async findOne(content_id: string) {
    const content = await this.contentRepository.findOneBy({ content_id });

    if (!content) {
      throw new NotFoundException();
    }

    return content;
  }

  async update(id: string, updateContentDto: UpdateContentDto) {
    const content = await this.findOne(id);

    this.contentRepository.merge(content, updateContentDto);
    return this.contentRepository.save(content);
  }

  async remove(id: string) {
    const existingContent = await this.findOne(id);
    await this.contentRepository.softRemove(existingContent);

    return existingContent;
  }
}
