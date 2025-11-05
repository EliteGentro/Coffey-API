import { BaseEntity } from "../../shared/base.entity"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ResourceType {
    VIDEO = "video",
    ARTICLE = "article",
    PODCAST = "podcast",
    FILE = "file"
}

@Entity()
export class Content extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    contentid: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type : 'varchar', nullable: true })
    details: string;

    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'enum', enum: ResourceType })
    resourceType: ResourceType;

    @Column({ type: 'text', nullable: true })
    transcript: string;

    @Column({ type : 'integer', comment: 'External course ID' })
    course: number;

    @Column({ type : 'integer', comment: 'External level ID' })
    level: number;

    @Column({ type : 'integer', comment: 'External lection ID' })
    lection: number;

    @Column({ type : 'integer', comment: 'External resource ID' })
    resource: number;
};
