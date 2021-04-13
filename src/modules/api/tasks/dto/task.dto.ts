import {IsEnum, IsOptional, IsString} from 'class-validator';
import {Task, TaskStatuses} from 'src/graphql.schema';

export class TaskDTO implements Task {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatuses)
  status: TaskStatuses;
}
