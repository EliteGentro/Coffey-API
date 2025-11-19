import { IsString, IsNotEmpty, IsNumber, IsEmail } from "class-validator";

export class CreateAdminDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsNumber()
    @IsNotEmpty()
    cooperativa_id: number;

    @IsString()
    @IsNotEmpty()
    password: string;
}
