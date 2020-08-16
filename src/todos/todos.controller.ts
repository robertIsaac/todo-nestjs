import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TodoDto } from '../TDOs/todoDto';

@Controller('todos')
export class TodosController {
  @Post()
  @HttpCode(204)
  create(@Body() todoDto: TodoDto): void {
    console.log(todoDto);
    return;
  }

  @Get()
  findAll(): TodoDto[] {
    return [];
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
