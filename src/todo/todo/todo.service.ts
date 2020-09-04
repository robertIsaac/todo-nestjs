import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../todo.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
  ) {}

  findAll(): Promise<TodoEntity[]> {
    return this.todosRepository.find();
  }

  find(id: string): Promise<TodoEntity> {
    return this.todosRepository.findOne(id);
  }

  remove(id: string): any {
    return this.todosRepository.delete(id);
  }

  update(id: string, todo: TodoEntity): any {
    return this.todosRepository.update(id, todo);
  }

  async insert(todo: TodoEntity): Promise<boolean> {
    try {
      await this.todosRepository.insert(todo);
      return true;
    }
    catch (e) {
      return false;
    }
  }

}
