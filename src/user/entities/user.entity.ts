import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Cooperativa } from "../../cooperativa/entities/cooperativa.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    user_id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'integer' })
    cooperativa_id: number;

    @ManyToOne(() => Cooperativa, { nullable: false })
    @JoinColumn({ name: 'cooperativa_id' })
    cooperativa: Cooperativa;

    @Column({ type: 'int', default: 0 })
    puntaje_aprendizaje: number;

    @Column({ type: 'int', default: 0 })
    contenidos_terminados: number;
}
