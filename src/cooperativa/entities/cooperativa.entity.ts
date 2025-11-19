import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cooperativa extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    cooperativa_id: number;

    @Column({ type: 'varchar' })
    name: string;
}
