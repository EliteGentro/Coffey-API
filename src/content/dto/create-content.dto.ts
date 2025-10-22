import { IsEnum, IsString } from "class-validator";
import { ContentType } from "../entities/content.entity";

export class CreateContentDto {
    @IsString()
    name: string;

    @IsString()
    details: string;

    @IsEnum(ContentType)
    type: ContentType;

    @IsString()
    url: string;

    @IsString()
    transcript: string;
}
