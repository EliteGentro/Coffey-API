import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    const newAdmin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(newAdmin);
  }

  async findAll() {
    return await this.adminRepository.find({
      relations: ['cooperativa'],
    });
  }

  async findAllDeleted() {
    return await this.adminRepository.find({
      where: {},
      withDeleted: true,
      relations: ['cooperativa'],
    }).then(results => results.filter(item => item.deletedAt !== null));
  }

  async findOne(admin_id: number) {
    const admin = await this.adminRepository.findOne({
      where: { admin_id },
      relations: ['cooperativa'],
    });

    if (!admin) {
      throw new NotFoundException(`Admin with ID ${admin_id} not found`);
    }

    return admin;
  }

  async findByCooperativa(cooperativa_id: number) {
    return await this.adminRepository.find({
      where: { cooperativa_id },
      relations: ['cooperativa'],
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.findOne(id);
    this.adminRepository.merge(admin, updateAdminDto);
    return this.adminRepository.save(admin);
  }

  async remove(id: number) {
    const existingAdmin = await this.findOne(id);
    await this.adminRepository.softRemove(existingAdmin);
    return existingAdmin;
  }
}
