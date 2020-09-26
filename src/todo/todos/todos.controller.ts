import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import { TodoEntity } from '../todo.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../../users/user.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export class TodosController {

  constructor(private todoService: TodoService) {
  }

  @Post()
  @HttpCode(204)
  async create(@Request() req: {user: UserEntity}, @Body() todoDto: TodoEntity): Promise<void> {
    todoDto.user = req.user;
    if (await this.todoService.insert(todoDto)) {
      return;
    } else {
      throw new HttpException('duplicate name', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<TodoEntity[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoEntity> {
    return this.todoService.find(id);
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() todoDto: TodoEntity): void {
    this.todoService.update(id, todoDto);
    return;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    await this.todoService.remove(id);
    return;
  }

}
