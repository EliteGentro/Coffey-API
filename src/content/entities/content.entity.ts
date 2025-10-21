import { BaseEntity } from "../../shared/base.entity"
import { Column } from "typeorm";

export enum ContentType {
    VIDEO = "video",
}

export class Content extends BaseEntity {
    @Column()
    name: string;

    @Column()
    details: string;

    @Column({ enum: ContentType })
    type: ContentType;

    @Column()
    url: string;

    @Column({ type: 'text' })
    transcript: string;
};
