import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Preference } from './entities/preference.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PreferenceService {

  constructor(
    @InjectRepository(Preference)
    private readonly preferenceRepository: Repository<Preference>,
  ) {}

  create(createPreferenceDto: CreatePreferenceDto) {
    const preference = this.preferenceRepository.create(createPreferenceDto);
    return this.preferenceRepository.save(preference);
  }

  async findAll() {
    return this.preferenceRepository.find({
      relations: ['user'],
    });
  }

  async findOne(preference_id: number) {
    const preference = await this.preferenceRepository.findOne({
      where: { preference_id },
      relations: ['user'],
    });
    if(!preference){
      throw new NotFoundException(`Preference with ID ${preference_id} not found`);
    }
    return preference;
  }

  async findByUser(user_id: number) {
    return await this.preferenceRepository.find({
      where: { user_id },
      relations: ['user'],
    });
  }

  async update(preference_id: number, updatePreferenceDto: UpdatePreferenceDto) {
    const preference = await this.findOne(preference_id);
    this.preferenceRepository.merge(preference, updatePreferenceDto);
    return this.preferenceRepository.save(preference);
  }

  async remove(preference_id: number) {
    const existingPreference = await this.findOne(preference_id);
    await this.preferenceRepository.softRemove(existingPreference);
    return existingPreference;
  }
}
