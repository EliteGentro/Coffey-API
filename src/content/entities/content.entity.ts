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

    @Column({ type : 'integer'})
    courseid: number;

    @Column({ type : 'integer'})
    levelid: number;

    @Column({ type : 'integer'})
    lectionid: number;

    @Column({ type : 'integer'})
    resourceid: number;

    @Column({ type : 'varchar', nullable: true })
    lectiondescription: string;

    @Column({ type: 'enum', enum: ContentType })
    resourcetype: ContentType;

    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'text' })
    transcription: string;
};
