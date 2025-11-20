import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find({ relations: ['cooperativa'] });
  }

  async findAllDeleted() {
    return await this.userRepository.find({
      where: {},
      withDeleted: true,
    }).then(results => results.filter(item => item.deletedAt !== null));
  }

  async findOne(user_id: number) {
    const user = await this.userRepository.findOne({
      where: { user_id },
      relations: ['cooperativa'],
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findOne(id);
    this.userRepository.merge(existingUser, updateUserDto);
    return this.userRepository.save(existingUser);
  }

  async remove(id: number) {
    const existingUser = await this.findOne(id);
    await this.userRepository.softRemove(existingUser);
    return existingUser;
  }

  async findByCooperativa(cooperativaId: number) {
    return this.userRepository.find({
      where: { cooperativa_id: cooperativaId },
      relations: ['cooperativa'],
    });
  }
}
