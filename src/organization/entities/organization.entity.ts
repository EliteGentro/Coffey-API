import { BaseEntity } from "../../shared/base.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    organizationid: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    description: string;
}
