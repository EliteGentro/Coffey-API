import { BaseEntity } from "../../shared/base.entity"
import { Column, Entity } from "typeorm";

export enum ContentType {
    VIDEO = "video",
    ARTICLE = "article",
    PODCAST = "podcast",
    FILE = "file"
}

@Entity()
export class Content extends BaseEntity {
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

    @Column({ type: 'varchar', nullable: true })
    name: string;

    @Column({ type: 'varchar', nullable: true, })
    url: string;

    @Column({ type: 'enum', enum: ContentType, nullable: true })
    resourcetype: ContentType;

    @Column({ type: 'text', nullable: true })
    transcription: string;
};
