import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id: id });
  }

  create(input: CreateTodoDto): Promise<Todo> {
    return this.todosRepository.save(input);
  }

  async update(id: number, input: UpdateTodoDto): Promise<void> {
    await this.todosRepository.update(id, input);
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
