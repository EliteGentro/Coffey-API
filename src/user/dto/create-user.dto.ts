import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsString()
    email: string | undefined;

    @IsString()
    given_name: string;

    @IsOptional()
    @IsString()
    family_name: string | undefined;

    @IsOptional()
    @IsUUID()
    organization: string | undefined;
}
