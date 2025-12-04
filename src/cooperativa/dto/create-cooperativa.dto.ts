import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCooperativaDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    createdAt: Date;

    @IsString()
    @IsOptional()
    updatedAt: Date;

    @IsString()
    @IsOptional()
    deletedAt?: Date | null;
}
