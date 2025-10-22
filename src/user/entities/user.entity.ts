import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Organization } from "../../organization/entities/organization.entity";

@Entity()
export class User extends BaseEntity {
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
}
