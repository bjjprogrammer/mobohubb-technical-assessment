export class CreateTodoDto {
  id: number = 0;
  title: string = '';
  description = '';
  completed: boolean = false;
  createdAt?: Date;
}
