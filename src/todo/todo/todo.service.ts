import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../todo.entity';
import { REQUEST } from '@nestjs/core';
import { UserEntity } from '../../users/user.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
    @Inject(REQUEST) private readonly request: {user: UserEntity},
  ) {}

  findAll(): Promise<TodoEntity[]> {
    return this.todosRepository.find({userId: this.request.user.id});
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
    todo.userId = this.request.user.id;
    try {
      await this.todosRepository.insert(todo);
      return true;
    }
    catch (e) {
      return false;
    }
  }

}
