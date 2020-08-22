import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Index } from 'typeorm';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column()
  completed: boolean;
}
