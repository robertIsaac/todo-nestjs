import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
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
