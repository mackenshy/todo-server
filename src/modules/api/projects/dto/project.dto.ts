import {IsEnum, IsOptional, IsString, Max} from 'class-validator';
import {Project, ProjectStatus} from 'src/graphql.schema';

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
}
