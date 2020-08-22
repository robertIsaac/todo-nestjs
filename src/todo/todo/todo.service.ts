import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../todo.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(TodoEntity)
    private usersRepository: Repository<TodoEntity>,
  ) {}

  findAll(): Promise<TodoEntity[]> {
    return this.usersRepository.find();
  }

  async insert(todo: TodoEntity): Promise<boolean> {
    try {
      await this.usersRepository.insert(todo);
      return true;
    }
    catch (e) {
      return false;
    }
  }

}
