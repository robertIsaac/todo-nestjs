import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Index } from 'typeorm';

@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;
}
