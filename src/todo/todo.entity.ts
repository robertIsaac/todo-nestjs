import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  completed: boolean;

  @Column({ nullable: false })
  userId: string;
}
