import {IsEnum, IsOptional, IsString} from 'class-validator';
import {TaskStatuses, UpdateTaskInput} from 'src/graphql.schema';

export class UpdateTaskDTO implements UpdateTaskInput {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatuses)
  status: TaskStatuses;
}
