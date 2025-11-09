import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePreferenceDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    font_multiplier: number;
}
