import { BaseEntity } from "../../shared/base.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Organization extends BaseEntity {

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    description: string;

    @OneToMany(() => User, user => user.organization)
    users: User[];
}
