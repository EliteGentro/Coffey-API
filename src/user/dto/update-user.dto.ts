import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsInt()
    @Min(0)
    puntaje_aprendizaje?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    contenidos_terminados?: number;
}
