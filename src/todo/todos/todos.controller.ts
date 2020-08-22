import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TodoDto } from '../../TDOs/todoDto';
import { TodoService } from '../todo/todo.service';
import { TodoEntity } from '../todo.entity';

@Controller('todos')
export class TodosController {

  constructor(private todoService: TodoService) {
  }

  @Post()
  @HttpCode(204)
  async create(@Body() todoDto: TodoEntity): Promise<void> {
    await this.todoService.insert(todoDto);
    return;
  }

  @Get()
  async findAll(): Promise<TodoEntity[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): TodoDto {
    return {id, name: 'TODO', completed: false};
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() todoDto: TodoDto): void {
    console.log(id, todoDto);
    return;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    console.log(id);
    return;
  }

}
