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
  UseGuards,
} from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import { TodoEntity } from '../todo.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
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
  async update(@Param('id') id: string, @Body() todoDto: TodoEntity): Promise<void> {
    const response = await this.todoService.update(id, todoDto);
    if (response === false) {
      throw new HttpException(`you don't have permission to this todo item`, HttpStatus.FORBIDDEN);
    }
    return;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string): Promise<void> {
    const response = await this.todoService.remove(id);
    if (response === false) {
      throw new HttpException(`you don't have permission to this todo item`, HttpStatus.FORBIDDEN);
    }
    return;
  }

}
