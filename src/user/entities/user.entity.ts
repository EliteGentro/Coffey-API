import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Organization } from "../../organization/entities/organization.entity";

export enum UserRole {
    BASE = "base",
    COORDINATOR = "coordinator",
    ADMIN = "admin"
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    userid: string;

    @Column({ type: 'varchar', nullable: true, unique: true })
    email: string | null;

    @Column({ type: 'varchar' })
    given_name: string;

    @Column({ type: 'varchar', nullable: true })
    family_name: string;

    @ManyToOne(() => Organization, organization => organization.users)
    organization: Organization;

    @Column({ type: 'int', default: 0 })
    puntaje_aprendizaje: number;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.BASE })
    role: UserRole;
}
