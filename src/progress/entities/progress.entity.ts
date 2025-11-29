import { JoinColumn, ManyToOne } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { User } from "../../user/entities/user.entity";
import { Content } from '../../content/entities/content.entity';
export enum ProgressStatus {
    NOT_STARTED = "notStarted",
    IN_PROGRESS = "inProgress",
    COMPLETED = "completed"
}
@Entity()
export class Progress extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  progress_id: number;

  @Column({ type: 'integer' })
  user_id: number;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;


  @Column({ type: 'integer' })
  content_id: number;

  @ManyToOne(() => Content, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'content_id' })
  content: Content;

  @Column({ type: 'enum', enum: ProgressStatus, default: ProgressStatus.NOT_STARTED })
  status: ProgressStatus;

  @Column({ type: 'int', default: 0, nullable: false })
  grade: number;
}
