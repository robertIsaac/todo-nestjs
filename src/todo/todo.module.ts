import { Module } from '@nestjs/common';
import { TodosController } from './todos/todos.controller';

@Module({
  controllers: [
    TodosController,
  ],
  providers: [
  ],
  imports: [
  ],
})
export class TodoModule {
}
