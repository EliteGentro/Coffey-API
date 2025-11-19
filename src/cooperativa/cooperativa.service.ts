import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCooperativaDto } from './dto/create-cooperativa.dto';
import { UpdateCooperativaDto } from './dto/update-cooperativa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cooperativa } from './entities/cooperativa.entity';

@Injectable()
export class CooperativaService {
  constructor(
    @InjectRepository(Cooperativa)
    private readonly cooperativaRepository: Repository<Cooperativa>,
  ) {}

  create(createCooperativaDto: CreateCooperativaDto) {
    const newCooperativa = this.cooperativaRepository.create(createCooperativaDto);
    return this.cooperativaRepository.save(newCooperativa);
  }

  async findAll() {
    return await this.cooperativaRepository.find();
  }

  async findAllDeleted() {
    return await this.cooperativaRepository.find({
      where: {},
      withDeleted: true,
    }).then(results => results.filter(item => item.deletedAt !== null));
  }

  async findOne(cooperativa_id: number) {
    const cooperativa = await this.cooperativaRepository.findOneBy({ cooperativa_id });

    if (!cooperativa) {
      throw new NotFoundException(`Cooperativa with ID ${cooperativa_id} not found`);
    }

    return cooperativa;
  }

  async update(id: number, updateCooperativaDto: UpdateCooperativaDto) {
    const cooperativa = await this.findOne(id);
    this.cooperativaRepository.merge(cooperativa, updateCooperativaDto);
    return this.cooperativaRepository.save(cooperativa);
  }

  async remove(id: number) {
    const existingCooperativa = await this.findOne(id);
    await this.cooperativaRepository.softRemove(existingCooperativa);
    return existingCooperativa;
  }
}
