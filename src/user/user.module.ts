import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { OrganizationModule } from '../organization/organization.module';
import { OrganizationService } from '../organization/organization.service';
import { Organization } from '../organization/entities/organization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Organization]),
    OrganizationModule
  ],
  controllers: [UserController],
  providers: [UserService, OrganizationService],
})
export class UserModule {}
