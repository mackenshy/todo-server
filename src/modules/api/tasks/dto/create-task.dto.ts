import {IsOptional, IsString} from 'class-validator';
import {CreateTaskInput} from 'src/graphql.schema';

export class CreateTaskDTO implements CreateTaskInput {
  @IsString()
  projectId: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
