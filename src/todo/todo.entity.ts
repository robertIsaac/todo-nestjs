import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  completed: boolean;
}
