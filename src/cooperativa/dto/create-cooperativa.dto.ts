import { IsString, IsNotEmpty } from "class-validator";

export class CreateCooperativaDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
