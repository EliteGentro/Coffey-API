import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Finance extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    finance_id: number;

    @Column({ type: 'integer' })
    user_id: number;

    @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'timestamp with time zone' })
    date: Date;

    @Column({ type: 'varchar' })
    category: string;

    @Column({ type: 'decimal', 
        precision: 10, 
        scale: 2, 
        transformer: {
        to: (value: number) => value,
        from: (value: string) => parseFloat(value)
    } })
    amount: number;

    @Column({ type: 'varchar' })
    type: string;
}
