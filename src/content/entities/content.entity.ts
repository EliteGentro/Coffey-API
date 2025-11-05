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
    @Column({ type : 'integer', comment: 'External course ID' })
    course: number;

    @Column({ type : 'integer', comment: 'External level ID' })
    level: number;

    @Column({ type : 'integer', comment: 'External lection ID' })
    lection: number;

    @Column({ type : 'integer', comment: 'External resource ID' })
    resource: number;

    @Column({ type : 'varchar', nullable: true })
    description: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'enum', enum: ContentType })
    type: ContentType;

    @Column({ type: 'text', nullable: true })
    transcription: string;
};
