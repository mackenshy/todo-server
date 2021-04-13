import {IsArray, IsEmpty, IsEnum, IsOptional, IsString} from 'class-validator';
import {Project, ProjectStatus} from 'src/graphql.schema';
import {TaskDTO} from '../../tasks/dto/task.dto';

export class ProjectDTO implements Project {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ProjectStatus)
  status: ProjectStatus;

  @IsArray()
  @IsEmpty()
  @IsOptional()
  tasks?: TaskDTO[];
}
