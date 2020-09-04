import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: '',
      password: '',
      database: 'todo',
      entities: [TodoEntity, UserEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodoModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {
}
