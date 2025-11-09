import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    email: string | undefined;

    @IsString()
    @IsNotEmpty()
    given_name: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    family_name: string | undefined;

    @IsOptional()
    @IsUUID()
    @IsNotEmpty()
    organization: string | undefined;
}
