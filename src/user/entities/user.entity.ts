import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Organization } from "../../organization/entities/organization.entity";

@Entity()
export class User extends BaseEntity {
    @Column({ nullable: true, unique: true })
    email: string;

    @Column()
    name: string;

    @ManyToOne(() => Organization, organization => organization.users)
    organization: Organization;

    @Column({ default: 0 })
    puntaje_aprendizaje: number;

    @Column()
    puntaje_colaboracion: number;

}
