import { User } from "../../user/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Preference extends BaseEntity{
    @PrimaryGeneratedColumn({ type: 'integer' })
    preference_id: number;

    @Column({ type: 'integer' })
    user_id: number;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    font_multiplier: number;
}
