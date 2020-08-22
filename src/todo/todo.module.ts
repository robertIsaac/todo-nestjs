import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todo/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';

@Module({
  controllers: [
    TodosController,
  ],
  providers: [
    TodoService,
  ],
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
  ],
})
export class TodoModule {
}
