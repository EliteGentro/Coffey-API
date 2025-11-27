import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Cooperativa } from "../../cooperativa/entities/cooperativa.entity";

@Entity()
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    admin_id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', unique: true })
    correo: string;

    @Column({ type: 'integer' })
    cooperativa_id: number;

    @ManyToOne(() => Cooperativa, { nullable: false })
    @JoinColumn({ name: 'cooperativa_id' })
    cooperativa: Cooperativa;

    @Column({ type: 'varchar' })
    password: string;
}
