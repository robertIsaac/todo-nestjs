import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  completed: boolean;

  @Column()
  time: Date;

  @Column({ nullable: false })
  userId: string;
}
