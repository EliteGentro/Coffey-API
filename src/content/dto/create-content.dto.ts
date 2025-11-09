import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { ResourceType } from "../entities/content.entity";

export class CreateContentDto {
    @IsString()
    name: string;

    @IsString()
    details: string;

    @IsString()
    url: string;

    @IsEnum(ResourceType)
    resourceType: ResourceType;

    @IsString()
    @IsOptional()
    transcript: string;

    @IsInt()
    course: number;

    @IsInt()
    level: number;

    @IsInt()
    lection: number;

    @IsInt()
    resource: number;
}
