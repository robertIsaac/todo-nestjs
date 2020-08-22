import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: '',
      password: '',
      database: 'todo',
      entities: [TodoEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodoModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {
}
