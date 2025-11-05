import { BaseEntity } from "../../shared/base.entity";
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Organization extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    organizationid: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    description: string;

    @OneToMany(() => User, user => user.organization)
    users: User[];
}
