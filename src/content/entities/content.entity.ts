import { BaseEntity } from "../../shared/base.entity"
import { Column, Entity } from "typeorm";

export enum ContentType {
    VIDEO = "video",
    ARTICLE = "article",
    PODCAST = "podcast"
}

@Entity()
export class Content extends BaseEntity {
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'int' })
    courseid: number;

    @Column({ type: 'int' })
    levelid: number;

    @Column({ type: 'int' })
    resourceid: number;

    @Column({ type: 'varchar' })
    details: string;

    @Column({ type: 'text', nullable: true })
    lectiondescription: string;

    @Column({ type: 'enum', enum: ContentType })
    type: ContentType;

    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'text' })
    transcript: string;
};
