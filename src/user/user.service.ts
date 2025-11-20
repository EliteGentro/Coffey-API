import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationService } from '../organization/organization.service';
import { Organization } from '../organization/entities/organization.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly organizationService: OrganizationService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { organization: organization_id, ...rest } = createUserDto;

    const newUser = this.userRepository.create(rest);

    if (organization_id) {
      const existingOrg = await this.organizationService.findOne(organization_id);
      newUser.organization = existingOrg as Organization; // This will always be defined, if not it will throw and bubble up.
    }

    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findAllDeleted() {
    return await this.userRepository.find({
      where: {},
      withDeleted: true,
    }).then(results => results.filter(item => item.deletedAt !== null));
  }

  async findOne(user_id: number) {
    const user = await this.userRepository.findOneBy({ user_id });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findOne(id);

    if (updateUserDto.organization) {
      const existingOrg = await this.organizationService.findOne(updateUserDto.organization);
      existingUser.organization = existingOrg as Organization;
    }

    // Merge the DTO properties into the existing user
    this.userRepository.merge(existingUser, {
      ...updateUserDto,
      organization: existingUser.organization,
    });

    return this.userRepository.save(existingUser);
  }

  async remove(id: number) {
    const existingUser = await this.findOne(id);
    await this.userRepository.softRemove(existingUser);

    return existingUser;
  }
}
