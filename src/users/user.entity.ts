import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Index } from 'typeorm';
import { TodoEntity } from '../todo/todo.entity';

@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(type => TodoEntity, photo => photo.user)
  todos: TodoEntity[];
}
