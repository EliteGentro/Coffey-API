import { IsEnum, IsString } from "class-validator";
import { ResourceType } from "../entities/content.entity";

export class CreateContentDto {
    @IsString()
    name: string;

    @IsString()
    details: string;

    @IsEnum(ResourceType)
    type: ResourceType;

    @IsString()
    url: string;

    @IsString()
    transcript: string;
}
