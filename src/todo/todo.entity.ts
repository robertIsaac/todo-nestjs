import { Entity, Column, ObjectIdColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  completed: boolean;

  @Column({ nullable: false })
  @ManyToOne(type => UserEntity, user => user.todos)
  @JoinColumn()
  user: UserEntity;
}
