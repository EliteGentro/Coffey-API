import { IsNotEmpty, IsNumber } from "class-validator";
import { ProgressStatus } from "../entities/progress.entity";

export class CreateProgressDto {
    
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    content_id: number;

    @IsNotEmpty()
    status: ProgressStatus;
}
