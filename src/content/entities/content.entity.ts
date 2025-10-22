import { BaseEntity } from "../../shared/base.entity"
import { Column, Entity } from "typeorm";

export enum ContentType {
    VIDEO = "video",
}

@Entity()
export class Content extends BaseEntity {
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    details: string;

    @Column({ type: 'enum', enum: ContentType })
    type: ContentType;

    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'text' })
    transcript: string;
};
