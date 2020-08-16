import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [],
  controllers: [
    TodosController,
  ],
  providers: [AppService],
})
export class AppModule {
}
