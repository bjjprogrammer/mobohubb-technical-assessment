import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ type: 'varchar' })
  title: string = '';

  @Column({ type: 'varchar' })
  description: string = '';

  @Column({ default: true })
  completed: boolean = false;

  @Column({ default: new Date(), type: 'timestamp' })
  createdAt?: Date;
}
