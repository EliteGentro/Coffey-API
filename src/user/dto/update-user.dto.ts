import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(PickType(CreateUserDto, ['given_name', 'family_name', 'email', 'organization'])) {}
